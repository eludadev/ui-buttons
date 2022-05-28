<script>
import { RouterView } from 'vue-router'

export default {
    components: {
        RouterView,
    },
}
</script>

<template>
    <header
        class="px-3 py-2 fixed top-0 backdrop-blur-lg flex items-center justify-between w-full z-[99]"
    >
        <router-link to="/" title="Home"
            ><h1 class="font-light text-xl text-stone-50 hover:text-stone-400">
                css<span class="font-bold">buttons</span>
            </h1></router-link
        >
        <div class="flex items-center gap-2">
            <a
                class="w-8 h-8 p-1 fill-stone-50 hover:fill-stone-400"
                href="https://github.com/eludadev/css-buttons"
                target="_blank"
                title="Github"
            >
                <svg
                    class="w-full h-full"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
                    />
                </svg>
            </a>
            <a
                class="w-8 h-8 p-1 fill-stone-50 stroke-stone-50 hover:fill-stone-400 hover:stroke-stone-400"
                href="https://twitter.com/eludadev"
                target="_blank"
                title="Author"
            >
                <svg
                    class="w-full h-full"
                    viewBox="0 0 85 83"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.88282 46.9712C-6.247 46.9712 8.25408 83 43.1224 83C78.2746 82.9381 94.189 46.9712 79.3619 46.9712H6.88282Z"
                    />
                    <path
                        d="M80.3769 30.9203C80.3769 30.9203 72.3473 22.1046 57.3909 26.7438C57.3909 26.7438 61.5944 16.5699 78.1035 14.1067"
                        stroke-width="5.14266"
                        stroke-linecap="round"
                        fill="none"
                    />
                    <path
                        d="M18.4259 29.979C19.8938 29.979 21.0838 27.9607 21.0838 25.4709C21.0838 22.9812 19.8938 20.9628 18.4259 20.9628C16.958 20.9628 15.768 22.9812 15.768 25.4709C15.768 27.9607 16.958 29.979 18.4259 29.979Z"
                        stroke-width="11.1725"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M3.96167 16.7583C3.96167 16.7583 9.44391 5.23398 20.0038 3.85812"
                        stroke-width="6.30113"
                        stroke-linecap="round"
                    />
                </svg>
            </a>
        </div>
    </header>
    <section class="mt-12">
        <router-view />
    </section>
</template>
