<script>
	export default {
		props: {
			id: {
				type: Number,
				required: true
			}
		},
		data() {
			return {
				loading: true
			}
		},
		mounted() {
			this.loading = false
		}
	}
</script>

<template>
	<div v-if="loading" class="w-full h-48 rounded-xl
    bg-stone-50/10 backdrop-blur-lg animate-pulse">
    </div>
	<a v-else href="#">
		<article class="flex flex-col
	w-full h-48 border-2 border-stone-50 rounded-xl
	bg-stone-50/10 backdrop-blur-lg">
			<header class="order-2 h-8 grow-0">
				<h1 class="ml-2 font-bold text-lg text-stone-50">Basic</h1>
			</header>
			<main class="grow grid place-items-center">
				<button>Button {{ id }}</button>
			</main>
		</article>
	</a>
</template>