<script>
import { RouterLink } from 'vue-router';
import getButtonStore from '@/stores/buttons.js'
import ArrowIcon from '@/components/ArrowIcon.vue';

import { oneDark } from '@codemirror/theme-one-dark'
import { html } from '@codemirror/lang-html'
import { Codemirror } from 'vue-codemirror'
import { css } from '@codemirror/lang-css'

export default {
	components: {
		RouterLink,
		ArrowIcon,
		Codemirror
	},
	setup() {
		// Setup code-mirror
		const extensionsHTML = [html(), oneDark]
		const extensionsCSS = [css(), oneDark]

		return {
			extensions: {
				html: extensionsHTML,
				css: extensionsCSS
			}
		}
	},
	data() {
		return {
			button: {
				modified_files: {
					html: '',
					css: '',
					txt: ''
				},
				source_files: {
					html: '',
					css: '',
					txt: ''
				}
			},
			is_outdated: false
		}
	},
	watch: {
		button_id: {
			immediate: true,
			async handler() {
				this.button = null
				await this.loadButton()
			}
		}
	},
	computed: {
		button_id() {
			return Number(this.$route.query.id)
		},
		button_name() {
			return this.button.source_files.txt.match(/Name: (.*)/)[1]
		}
	},
	methods: {
		async loadButton() {
			const { get: getButton, has: hasButton, compareToSource } = getButtonStore()

			if (!this.button_id) return
				
			// Check if button was already fetched
			if (hasButton(this.button_id)) {
				this.button = await getButton(this.button_id)
				// Check if the code is outdated
				const is_same = await compareToSource(this.button_id, this.button)
				if (!is_same) {
					// Show an actionable warning
					this.is_outdated = true
				}
			}
			else {
				this.button = await getButton(this.button_id)
			}

			// Preload next button for convenience
			getButton(this.button_id+1)
		},
		updateButton() {
			const { set: setButton } = getButtonStore()
			setButton(this.button_id, this.button)
		},
		async syncWithSource() {
			const { get: getButton, set: setButton } = getButtonStore()
			this.button = await getButton(this.button_id, true)
			this.is_outdated = false
			setButton(this.button_id, this.button)
		}
	}
};
</script>

<template>
	<header class="px-4 py-2 flex items-center justify-between">
		<p class="font-bold" v-if="is_outdated">
			Warning! This version is outdated. <button class="bg-slate-800 px-2 py-0.5 rounded mx-1 inline-block hover:filter hover:brightness-110 active:brightness-90" @click="syncWithSource">Reset</button>?
		</p>
		<div class="w-1 h-1" v-else>
		</div>
    	<router-link class="bg-slate-800 px-2 py-1 rounded font-bold flex items-center gap-8 hover:filter hover:brightness-110 active:brightness-90" to="/changes">See changes<span><arrow-icon direction="right" class="w-4 h-4 fill-slate-50"/></span></router-link>
	</header>
	<section class="h-96 grid grid-rows-1 grid-cols-3 gap-2 mx-2 mt-4" v-if="button">
		<section class="flex flex-col gap-2">
			<div class="relative overflow-hidden py-1 grid place-items-center w-full border-2 border-slate-50 rounded aspect-square" :innerHTML="`${button.modified_files.html}<style>${button.modified_files.css}</style>`">

			</div>
			<div class="py-1 flex items-center justify-around w-full border-2 border-slate-50 rounded">
				{{ button_name }}
			</div>
			<div class="py-1 flex items-center justify-between px-4 w-full border-2 border-slate-50 rounded">
				<router-link :to="button_id <= 1 ? '' : `/button/?id=${button_id-1}`" class="w-6 h-6 p-2 hover:filter hover:brightness-150 active:brightness-90 bg-slate-900" title="Go left">
					<arrow-icon direction="left" class="w-full h-full fill-slate-50"/>
				</router-link>
				<input class="border-[1px] border-slate-50 rounded grow-0 w-12 px-1 bg-slate-900 focus:outline-sky-500 focus:border-0" :value="button_id" @change="$router.push(`/button/?id=${$event.target.value}`)"/>
				<router-link :to="button_id >= 100 ? '' : `/button/?id=${button_id+1}`" class="w-6 h-6 p-2 hover:filter hover:brightness-150 active:brightness-90 bg-slate-900" title="Go right">
					<arrow-icon direction="right" class="w-full h-full fill-slate-50"/>
				</router-link>
			</div>
			<div class="bg-slate-900 py-1 w-full border-2 border-slate-50 rounded hover:filter hover:brightness-110 active:brightness-90">
				<button class="w-full h-full items-center" @click="syncWithSource">Reset</button>
			</div>
		</section>
		<codemirror
			v-model="button.modified_files.html"
			:extensions="extensions.html"
			:style="{ 'height': '100%' }"
			@change="updateButton"
		/>
		<codemirror
			v-model="button.modified_files.css"
			:extensions="extensions.css"
			:style="{ 'height': '100%' }"
			@change="updateButton"
		/>
	</section>
</template>
