<script>
	import { vElementVisibility } from '@vueuse/components'

	import getButtonStore from '@/stores/buttons.js'

	export default {
		directives: {
			'element-visibility': vElementVisibility
		},
		props: {
			id: {
				type: Number,
				required: true
			}
		},
		async setup(props) {
			const { getItem: getButton } = getButtonStore()
			const button = await getButton(props.id)
			return {...button}
		},
		data() {
			return {
				autoPlayInterval: null,
				isVisible: false // tracks element visibility in viewport
			}
		},
		mounted() {
			// AutoPlay :hover and :active effects
			const button = this.$refs.buttonContainer.children[0]
			this.autoPlayInterval = setInterval(() => {
				// For performance reasons, only AutoPlay when element is in viewport
				this.isVisible && button.classList.toggle('__Hover')
			}, 1200)
		},
		unmounted() {
			clearInterval(this.autoPlayInterval)
		},
		computed: {
			innerHTML() {
				return `${this.html}<style>.btn-${this.id}{color: white; cursor: default; user-select: none;}${this.css}</style>`
				.replaceAll(':hover', '.__Hover')
				.replaceAll(':active', '.__Hover')
			}
		},
		methods: {
			onElementVisibilityChange(isVisible) {
				this.isVisible = isVisible
			}
		}
	}
</script>

<template>
	<article class="flex flex-col
	w-full h-48 border-2 border-stone-50 rounded-xl
	bg-stone-50/10 backdrop-blur-lg
	hover:bg-stone-50/[15%] active:bg-stone-50/5"
	v-element-visibility="onElementVisibilityChange">
		<header class="order-2 h-8 grow-0">
			<h1 class="ml-2 font-bold text-lg text-stone-50">{{ name }}</h1>
		</header>
		<main class="grow grid place-items-center pointer-events-none overflow-hidden" :innerHTML="innerHTML"
		ref="buttonContainer">
		</main>
	</article>
</template>