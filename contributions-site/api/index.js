const app = require('express')();
const cors = require('cors');

const axios = require('axios');
const asyncHandler = require('express-async-handler')

const client_id = 'ee303ba8e3dd54743288'
const client_secret = process.env.client_secret

app.use(cors({
  origin: ['http://127.0.0.1:3000', 'https://css-buttons.web.app']
}))

app.post('/api/auth/', asyncHandler(async (req, res) => {
  const code = req.query.code

  const url = `https://github.com/login/oauth/access_token/?client_id=${client_id}&client_secret=${client_secret}&code=${code}`

  const response = await axios({
    method: 'post',
    url,
    headers: {
      'Accept': 'application/json'
    }
  })

  console.log(response)

  const { access_token } = response.data

  res.send(access_token)
}))

module.exports = app;

