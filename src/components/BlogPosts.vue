<script setup>
import { ref } from 'vue'

import BlogEntries from '../../public/static/blogs.json';
const entries = ref(BlogEntries)

</script>

<template>
    <RouterLink v-for="entry in entries" :key="entry.slug" :to="`/blog/${entry.slug}`" class="relative group">
        <article class="p-8 transition-all transform bg-gray-100 shadow-lg group-hover:shadow-2xl md:pr-[6rem]">
            <div>
                <h2 class="mb-6 text-2xl sm:text-3xl">{{ entry.title }}</h2>
                <p class="text-base">{{ entry.description }}</p>
                <p class="text-base mt-7">{{ entry.date }}</p>
            </div>
        </article>
        <div
            class="hidden md:flex items-center justify-center flex-col absolute right-0 top-0 h-full w-[5rem] transition-opacity bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="relative text-white size-6 z-[1]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <div class="absolute size-full bg-gradient-to-br from-[#4568DC] to-[#B06AB3] opacity-0 group-hover:opacity-100 transition-opacity"></div> 
        </div>
    </RouterLink>
</template>