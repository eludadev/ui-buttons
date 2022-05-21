import { Octokit, App } from "https://cdn.skypack.dev/octokit";

// Common data
const owner = 'eludadev'
const repo = 'css-buttons'

// Get main branch
async function getMainBranch(octokit) {
  // Get SHA of `main` branch
  const branch_response = await octokit.request('GET /repos/{owner}/{repo}/branches/main', {
    owner,
    repo
  })

  return branch_response.data
}

// Create new ref
async function createBranch(octokit, commit_sha) {
  // Generate ref name
  const random_number = Math.floor(Math.random() * 1000) - 1
  const formatted_number = String(random_number).padStart(4, '0')
  const ref_name = `${formatted_number}-update-buttons` // TODO: do better job of naming branches (why, is this one not good?) (this just feels like a code smell!)

  // Request Github to create a ref
  const ref_response = await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner,
    repo,
    ref: `refs/heads/${ref_name}`,
    sha: commit_sha
  })

  return ref_response.data
}

// Create blob from file contents (assuming utf-8 encoding)
async function createBlob(octokit, content) {
  const blob_response = await octokit.request('POST /repos/{owner}/{repo}/git/blobs', {
    owner,
    repo,
    content,
    encoding: 'utf-8'
  })

  return blob_response.data
}

// Create tree from files: [{path, content}] (assuming utf-8 encoding)
async function createTree(octokit, files, branch_sha) {
  // Create file blob and store their SHAs
  const treeFiles = []
  for (const { path, content } of files) {
    // Create blob from file content
    const { sha } = await createBlob(octokit, content)

    treeFiles.push({path, sha})
  }

  // Create tree object
  const tree = []
  for (const { path, sha } of treeFiles) {
    const treeObject = {
      path,
      mode: '100644',
      type: 'blob',
      sha
    }

    tree.push(treeObject)
  }

  // Request Github to create tree object
  const tree_response = await octokit.request('POST /repos/{owner}/{repo}/git/trees', {
    owner,
    repo,
    base_tree: branch_sha,
    tree
  })

  return tree_response.data
}

// Create a commit from a tree to a branch
async function createCommit(octokit, tree_sha, branch_sha, author, msg) {
  

  // Request Github to make a commit.
  const commit_response = await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
    owner,
    repo,
    message: msg,
    author,
    parents: [
      branch_sha
    ],
    tree: tree_sha
  })

  return commit_response.data
}

// Create pull request from A to B
async function createPullRequest(octokit, new_branch_name, old_branch_name, title, body) {
  // Request Github to make a pull request.
  const pull_response = await octokit.request('POST /repos/{owner}/{repo}/pulls', {
    owner,
    repo,
    title,
    body,
    head: new_branch_name,
    base: old_branch_name
  })

  return pull_response.data
}

// Gather all this logic for a set of files
export default async function (files, name, email, commit_msg, pr_title, pr_body) {
  const octokit = new Octokit({
    auth: localStorage.getItem('access_token')
  })

  const author = {
    'name': 'eludadev',
    'email': '111eluda111@gmail.com'
  }

  // 1. Get main branch SHA
  const main_sha  = (await getMainBranch(octokit)).commit.sha

  // 2. Create tree
  const tree_sha = (await createTree(octokit, files, main_sha)).sha

  // 3. Create commit
  const commit_sha = (await createCommit(octokit, tree_sha, main_sha, author, commit_msg)).sha

  // 4. Create new branch
  const { object: {sha: new_branch_sha}, ref: new_branch_ref } = (await createBranch(octokit, commit_sha))

  // 5. Create pull request
  const new_branch_name = new_branch_ref.split('/').slice(-1)[0]
  const pull_request = await createPullRequest(octokit, new_branch_name, 'main', pr_title, pr_body)

  return pull_request.html_url
}

/*
TEST:
const files = [{path: 'vanilla/button-2/button-2.html', content: '<button>BUTTON</button>'}, {path: 'vanilla/button-5/button-5.css', content: 'p { color: blue }'}]
push_to_github(files)
*/