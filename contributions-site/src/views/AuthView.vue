<script>
	import axios from "axios";
	import ArrowIcon from '@/components/ArrowIcon.vue';

	export default {
		components: {
			ArrowIcon
		},
		data() {
			return {
				is_authenticated: false,
				auth_url: null
			}
		},
		async mounted() {
			// Check if access_token in URL
			if (this.$route.query.code) {
				// TODO: check if `state` matches
				// Get access token
				const code = this.$route.query.code
				const response = await axios({
					method: 'post',
					url: `https://css-buttons-api.vercel.app/api/auth/?code=${code}`,
					responseType: 'text'
				})
				const access_token = response.data
				localStorage.setItem('access_token', access_token)
				this.is_authenticated = true
			}
			else {
				this.auth_url = `https://github.com/login/oauth/authorize/?client_id=ee303ba8e3dd54743288&scope=public_repo&redirect_uri=https://contribute-to-css-buttons.vercel.app/changes/auth`
			}
		}
	}
</script>

<template>
	<header class="px-4 py-2 flex items-center justify-between">
		<button @click="$router.go(-1)" class="bg-slate-800 px-2 py-1 rounded font-bold flex flex-row-reverse items-center gap-8 hover:filter hover:brightness-110 active:brightness-90" to="/changes">Go back<span><arrow-icon direction="left" class="w-3 h-3 fill-slate-50"/></span></button>
	</header>
	<section class="mt-4 text-6xl font-bold flex flex-col items-center gap-8" v-if="is_authenticated && !auth_url">
		Authenticated! 
		<router-link class="flex gap-4 text-sm items-center bg-slate-800 py-2 px-4 rounded hover:filter hover:brightness-150 active:brightness-90" to="/changes/pull">Continue<arrow-icon direction="right" class="w-3 h-3 fill-slate-50"/></router-link>
	</section>
	<section class="mt-4 text-6xl font-bold" v-else-if="!auth_url">
		Loading...
	</section>
	<section class="mt-4 text-6xl font-bold flex flex-col items-center gap-8" v-if="auth_url">
		You need to authenticate first. 
		<a class="text-sm bg-slate-800 py-2 px-4 rounded hover:filter hover:brightness-150 active:brightness-90" :href="auth_url" target="_self">Connect Github</a>
	</section>
</template>
