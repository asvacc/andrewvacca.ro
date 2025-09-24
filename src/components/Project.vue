<script setup>

defineProps({
    project: Object
})

</script>

<template>
    <Transition appear>
        <div class="flex flex-col transition-shadow bg-gray-100 shadow-lg hover:shadow-2xl">
            <div class="flex flex-col items-start flex-grow p-8 pb-0">
                <h2 class="text-3xl font-bold ">{{ project.title }}</h2>
                <p class="flex-grow mt-4 text-lg">{{ project.description }}</p>
                <p v-if="project.technology" class="mt-4 text-xs font-bold uppercase">Technology used:</p>
                <ul v-if="project.technology" class="flex flex-wrap gap-2 mt-1">
                    <li v-for="(item, index) in project.technology" :key="item.id"
                        class="inline-block px-2 py-1 text-white text-xs font-bold uppercase bg-[#4568DC]">{{
                        item }}
                    </li>
                </ul>
            </div>
            <a :href="project.url" target="_blank" class="w-full mt-6 text-center btn">Visit website</a>
        </div>
    </Transition>
</template>