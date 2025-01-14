<script setup>

defineProps({
    project: Object
})

</script>

<template>
    <Transition appear>
        <div class="flex flex-col items-start p-8 transition-shadow bg-gray-100 shadow-lg hover:shadow-2xl">
            <h2 class="text-3xl font-bold ">{{ project.title }}</h2>
            <p class="flex-grow mt-4 text-lg">{{ project.description }}</p>
            <p v-if="project.technology" class="mt-4 text-xs font-bold uppercase">Technology used:</p>
            <ul v-if="project.technology" class="flex flex-wrap gap-2 mt-1">
                <li v-for="(item, index) in project.technology" :key="item.id"
                    class="inline-block px-2 py-1 text-xs font-bold uppercase rounded-md bg-amber-400">{{ item }}
                </li>
            </ul>
            <a :href="project.url" target="_blank" class="w-full mt-5 text-center btn">Visit website</a>
        </div>
    </Transition>
</template>