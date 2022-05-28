import { defineStore } from 'pinia'

export default defineStore('buttons', {
	actions: {
		async getItem(id) {
			const urlAccessor = (ext) => `https://raw.githubusercontent.com/eludadev/css-buttons/main/buttons/button-${id}/vanilla/button-${id}.${ext}`
		
			async function getRawFile(ext) {
				const url = urlAccessor(ext)
				const res = await fetch(url)
				return ext === 'json' ? await res.json() : await res.text()
			}

			const button = {
				id
			}

			for (const ext of ['html', 'css', 'json']) {
				const data = await getRawFile(ext)
				if (ext === 'json') {
					button.name = data.name
				} else {
					button[ext] = data
				}
			}

			return button
		}
	}
})