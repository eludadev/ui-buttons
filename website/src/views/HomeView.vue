<script>
    import ButtonItem from '@/components/ButtonItem.vue'

    import buttonsBannerUrl from '@/assets/buttons-banner.png'


    export default {
        components: {
            ButtonItem
        },
        data() {
            return {
                buttonsBannerUrl
            }
        },
        methods: {
            makeLinkUrl(id) {
                return `https://github.com/eludadev/css-buttons/tree/main/buttons/button-${id}/vanilla`
            },
            makeLinkTitle(id) {
                return `Source code for button ${id}`
            }
        }
    }
</script>

<template>
    <header class="relative w-full h-56">
        <img class="w-3/4 sm:w-1/2 lg:w-96 absolute
        top-1/2 transform -translate-y-1/2
        left-1/2 transform -translate-x-1/2
        " :src="buttonsBannerUrl"
        alt="100 Buttons"/>
    </header>

    <main class="mx-2">
        <p class="text-stone-50">Collection of 100 free and royalty-free <strong class="font-bold">HTML and CSS button</strong> code examples.</p>
        <ul class="mt-8 mb-4 flex flex-col gap-4 
        mx-auto
        sm:flex-row sm:flex-wrap sm:justify-center" ref="buttonsList">
            <li v-for="i in 100" :key="i">
                <Suspense>
                    <template #default>
                        <a :href="makeLinkUrl(i)" target="_blank" :title="makeLinkTitle(i)" :aria-label="makeLinkTitle(i)" class=""><button-item :id="i" class="sm:w-80"/></a>
                    </template>
                </Suspense>
            </li>
        </ul>
    </main>
</template>
