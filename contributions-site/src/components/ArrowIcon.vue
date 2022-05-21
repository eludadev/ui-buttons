<script>
	export default {
		props: ['direction']
	}
</script>

<template>
	<svg :class="[{'transform rotate-180': direction==='left'}]" viewBox="0 0 490 490">
		<polygon points="240.112,0 481.861,245.004 240.112,490 8.139,490 250.29,245.004 8.139,0 			"/>
	</svg>
</template>