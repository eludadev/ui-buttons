<script>
import push_to_github from '@/helpers/push_to_github.js';
import getButtonStore from '@/stores/buttons.js';
import ArrowIcon from '@/components/ArrowIcon.vue';

export default {
	components: {
		ArrowIcon
	},
	data() {
		return {
			name: '',
			email: '',
			pull_request: {
				title: '',
				body: '',
				url: ''
			},
			loading: false
		}
	},
	methods: {
		async push_changes() {
			const { getAllSavedButtons } = getButtonStore()
			const buttons = getAllSavedButtons()
			const changedButtons = buttons.filter(b => JSON.stringify(b.source_files) !== JSON.stringify(b.modified_files))

			this.loading = true

			const files = []
			for (const { id, modified_files } of changedButtons) {
				const pathAccessor = (ext) => `vanilla/button-${id}/button-${id}.${ext}`
				for (const ext of ['html', 'css', 'txt']) {
					const path = pathAccessor(ext)
					const content = modified_files[ext]

					files.push({path, content})
				}
			}

			try {
				this.pull_request.url = await push_to_github(files, this.name, this.email, this.pull_request.title, this.pull_request.title, this.pull_request.body)
			}
			catch(e) {
				this.loading = false
				console.error(e)
			}

			this.loading = false

			window.open(this.pull_request.url, '_self')
		}
	}
}
</script>

<template>
	<header class="px-4 py-2 flex items-center justify-between">
		<button @click="$router.go(-1)" class="bg-slate-800 px-2 py-1 rounded font-bold flex flex-row-reverse items-center gap-8 hover:filter hover:brightness-110 active:brightness-90" to="/changes">Go back<span><arrow-icon direction="left" class="w-3 h-3 fill-slate-50"/></span></button>
    	<button class="bg-slate-800 px-2 py-1 rounded font-bold flex items-center gap-8 hover:filter hover:brightness-110 active:brightness-90 disabled:filter disabled:brightness-90" @click="push_changes" :disabled="loading || pull_request.url.length">{{ loading ? 'Please wait...' : 'Make Pull Request' }}<span><arrow-icon direction="right" class="w-4 h-4 fill-slate-50"/></span></button>
	</header>

	<form class="mx-2 flex flex-col gap-12" @submit.prevent>
		<fieldset class="relative before:block before:absolute before:top-[-15px] before:left-0 before:h-[calc(100%+30px)] before:w-full before:z-[-1] p-4 before:border-2 before:border-slate-50 before:rounded flex flex-col gap-2">
			<legend class="font-bold text-xl bg-slate-900 px-2">Author</legend>
			<input class="bg-slate-800 rounded px-2 py-2" v-model="name" placeholder="Name...">
			<input class="bg-slate-800 rounded px-2 py-2" v-model="email" placeholder="Email...">
		</fieldset>
		<fieldset class="relative before:block before:absolute before:top-[-15px] before:left-0 before:h-[calc(100%+30px)] before:w-full before:z-[-1] p-4 before:border-2 before:border-slate-50 before:rounded flex flex-col gap-2">
			<legend class="font-bold text-xl bg-slate-900 px-2">Pull Request</legend>
			<input class="bg-slate-800 rounded px-2 py-2" v-model="pull_request.title" placeholder="Title...">
			<textarea class="bg-slate-800 rounded px-2 py-2" v-model="pull_request.body" placeholder="Body..."></textarea>
		</fieldset>
	</form>
</template>
