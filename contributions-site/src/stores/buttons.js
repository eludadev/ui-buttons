import axios from 'axios';
import { defineStore } from 'pinia';

export default defineStore('buttons', {
	actions: {
		async get(id, always_fetch_source=false, should_update_storage=true) {
			let button = {
				id,
				source_files: {},
				modified_files: {}
			}
			if (always_fetch_source || !localStorage.hasOwnProperty(`button-${id}`)) {
				const urlAccessor = (ext) => `https://raw.githubusercontent.com/eludadev/css-buttons/main/vanilla/button-${id}/button-${id}.${ext}`

				for (const ext of ['html', 'css', 'txt']) {
					const url = urlAccessor(ext)
					const response = await axios({
						method: 'get',
						url,
						responseType: 'text'
					})
					button.source_files[ext] = response.data
					button.modified_files[ext] = response.data
				}

				should_update_storage && this.set(id, button)
				return button
			}
			else {
				const button = localStorage.getItem(`button-${id}`)
				return JSON.parse(button)
			}

		},
		has(id) {
			return localStorage.hasOwnProperty(`button-${id}`)
		},
		async compareToSource(id, button) {
			// Compares `button` to the current button with `id` in the latest source in Github.
			const source_button = await this.get(id, true, false)
			return JSON.stringify(button.source_files) === JSON.stringify(source_button.source_files)
		},
		set(id, button) {
			localStorage.setItem(`button-${id}`, JSON.stringify(button))
		},
		getAllSavedButtons() {
			const keys = Object.keys(localStorage).filter(k => k.startsWith('button-'))
			const buttons = []
			for (const key of keys) {
				const button = JSON.parse(localStorage.getItem(key))
				buttons.push(button)
			}
			return buttons
		}
	}
});