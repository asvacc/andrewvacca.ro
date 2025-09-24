<script setup>
import { ref } from 'vue'

const menuToggle = ref(false);

function toggle() {
    menuToggle.value = !menuToggle.value
}

</script>

<template>
    <div class="block sm:hidden">
        <svg @click="toggle" class="block transition-colors cursor-pointer sm:hidden size-8 hover:text-[#4568DC]"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <Teleport to="body">
            <Transition>
                <div v-if="menuToggle"
                    class="fixed inset-0 top-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-[#4568DC] to-[#B06AB3] sm:hidden sm:fixed">
                    <svg @click="toggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor"
                        class="fixed block text-white transition-transform cursor-pointer top-12 right-12 size-12 hover:rotate-90">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <ul class="top-0 z-10 flex flex-col items-center mx-auto space-y-16 text-2xl text-white">
                        <li>
                            <RouterLink @click="toggle" activeClass="border-b-2 border-b-white"
                                class="block transition-colors border-b-2 border-transparent hover:border-b-white"
                                to="/">
                                Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink @click="toggle" activeClass="border-b-2 border-b-white"
                                class="block transition-colors border-b-2 border-transparent hover:border-b-white"
                                to="/portfolio">
                                Portfolio</RouterLink>
                        </li>
                        <li>
                            <RouterLink @click="toggle" activeClass="border-b-2 border-b-white"
                                class="block transition-colors border-b-2 border-transparent hover:border-b-white"
                                to="/blog">
                                Blog</RouterLink>
                        </li>
                        <li>
                            <RouterLink @click="toggle" activeClass="border-b-2 border-b-white"
                                class="block transition-colors border-b-2 border-transparent hover:border-b-white"
                                to="/contact">
                                Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>