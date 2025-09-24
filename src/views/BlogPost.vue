<script setup>
import { ref, watch } from 'vue'
import BlogEntries from '../../public/static/blogs.json';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
    slug: String
})

const content = ref('');

watch(() => props.slug, getPostMarkdown, { immediate: true })


async function getPostMarkdown() {
    let entry = BlogEntries.find(mEntry => mEntry.slug == props.slug);
    if(entry)
    {
        const response = await fetch(`../../public/static/blogs/${entry.slug}.md`);
        const markdown = await response.text();
        content.value = DOMPurify.sanitize(marked.parse(markdown));
    }
     else 
     {
        router.push('/blog')
    }
}
</script>

<template>
    <div class="container">
        <RouterLink class="inline-flex items-center mb-8 transition-colors gap-x-2 hover:text-[#4568DC]" to="/blog">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            Return To Blog
        </RouterLink>
        <article class="max-w-full prose" v-html="content"></article>
    </div>
</template>