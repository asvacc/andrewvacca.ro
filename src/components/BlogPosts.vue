<script setup>
import { ref } from 'vue'

import BlogEntries from '../../public/static/blogs.json';
const entries = ref(BlogEntries)

</script>

<template>
    <RouterLink v-for="entry in entries" :key="entry.slug" :to="`/blog/${entry.slug}`">
        <article class="p-8 transition-shadow bg-gray-100 shadow-lg hover:shadow-2xl">
            <div>
                <h2 class="mb-6 text-2xl sm:text-3xl">{{ entry.title }}</h2>
                <p class="text-base">{{ entry.description }}</p>
                <p class="text-base mt-7">{{ entry.date }}</p>
            </div>
        </article>
    </RouterLink>
</template>