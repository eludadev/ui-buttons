<script>
    import ButtonItem from '@/components/ButtonItem.vue'

    import buttonsBannerUrl from '@/assets/buttons-banner.png'


    export default {
        components: {
            ButtonItem
        },
        data() {
            return {
                buttonsBannerUrl,
                buttons: []
            }
        },
        async mounted() {
            // Get total buttons count
            const total = await this.getTotalCount()
            console.log(total)
            // 
        },
        methods: {
            async loadButton(id) {
                this.buttons.push({id: Math.max(...this.buttons.map(b => b.id)) + 1})
            }
        }
    }
</script>

<template>
    <header class="relative w-full h-56">
        <img class="w-3/4 sm:w-1/2 lg:w-96 absolute
        top-1/2 transform -translate-y-1/2
        left-1/2 transform -translate-x-1/2
        " :src="buttonsBannerUrl"/>
    </header>

    <main class="mx-2 mt-8">
        <ul class="flex flex-col gap-4" ref="buttonsList">
            <li v-for="{ id } in buttons">
                <button-item :id="Number(id)"/>
            </li>
        </ul>
    </main>
</template>
