<script>
import { RouterLink } from 'vue-router';
import getButtonStore from '@/stores/buttons.js';
import ArrowIcon from '@/components/ArrowIcon.vue';

export default {
	components: {
		RouterLink,
		ArrowIcon
	},
	data() {
		return {
			buttons: null
		}
	},
	mounted() {
		this.getChangedButtons()
	},
	computed: {
		is_authenticated() {
			return localStorage.hasOwnProperty('access_token')
		}
	},
	methods: {
		getChangedButtons() {
			const { getAllSavedButtons } = getButtonStore()
			const buttons = getAllSavedButtons()
			this.buttons = buttons.filter(b => JSON.stringify(b.source_files) !== JSON.stringify(b.modified_files))
		},
		stashChanges(button) {
			const { set: setButton } = getButtonStore()
			button.modified_files = {...button.source_files}
			this.buttons = this.buttons.filter(b => b.id !== button.id)
			setButton(button.id, button)
		}
	}
}
</script>

<template>
	<header class="px-4 py-2 flex items-center justify-between">
		<button @click="$router.go(-1)" class="bg-slate-800 px-2 py-1 rounded font-bold flex flex-row-reverse items-center gap-8 hover:filter hover:brightness-110 active:brightness-90" to="/changes">Go back<span><arrow-icon direction="left" class="w-3 h-3 fill-slate-50"/></span></button>
    	<router-link class="bg-slate-800 px-2 py-1 rounded font-bold flex items-center gap-8 hover:filter hover:brightness-110 active:brightness-90" :to="is_authenticated ? '/changes/pull' : '/changes/auth'">Push changes<span><arrow-icon direction="right" class="w-4 h-4 fill-slate-50"/></span></router-link>
	</header>
	<main class="mt-4 flex flex-col gap-4" v-if="buttons && buttons.length">
		<article class="flex items-center gap-12 mx-auto" v-for="button in buttons">
			<div class="flex gap-2 items-center">
				<div class="p-2 overflow-hidden relative border-2 border-slate-50 w-56 h-20 rounded" :innerHTML="`${button.source_files.html}<style>${button.source_files.css}</style>`"></div>
				<arrow-icon class="fill-slate-50 w-6 h-6" direction="right"/>
				<div class="p-2 overflow-hidden relative border-2 border-slate-50 w-56 h-20 rounded" :innerHTML="`${button.modified_files.html.replaceAll(`btn-${button.id}`, `btn-${button.id}-modified`)}<style>${button.modified_files.css.replaceAll(`.btn-${button.id}`, `.btn-${button.id}-modified`)}</style>`"></div>
			</div>
			<div class="font-bold">Button {{ button.id }}</div>
			<hr class="h-24 w-0.5 relative before:absolute before:block before:h-full before:w-full before:bg-slate-50 before:top-0 before:left-0"/>
			<button class="w-8 h-8 p-1 fill-slate-50 bg-slate-900 hover:filter hover:brightness-150 active:brightness-90" title="Revert changes" @click="stashChanges(button)">
				<svg class="w-full h-full" viewBox="0 0 24 24">
					<path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"/>
				</svg>
			</button>
		</article>
	</main>
	<p class="mx-2" v-else>
		Nothing to see here. <button class="text-sky-500 hover:underline" @click="$router.go(-1)">Go make some changes</button>
	</p>
</template>
