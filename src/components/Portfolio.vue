<script setup>
import { ref, onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projectsStore';
import Project from './Project.vue'

const store = useProjectsStore()
const apiEndpoint = 'https://3uoijyddwlqllx6lrfnrappxhe0jisnv.lambda-url.us-east-2.on.aws';
const projects = ref([]);
const error = ref('');
const password = ref('');

onMounted(() => {
    if(store.isExpired)
    {
        store.$reset()
    }

    projects.value = store.projects;
})

async function submit(event) {
    projects.value = await getProjects();
    store.projects = projects.value;
}

async function getProjects() {
    try {
        error.value = null;
        if (!password.value)
        {
            error.value = "Enter password.";
            return;
        }


        const response = await fetch(apiEndpoint + `?password=${password.value}`);
        if (response.status == 200)
        {
            store.setExpiry();
            return await response.json();
        }
        else
            throw new Error("Incorrect password.");
    } catch (e) {
        error.value = e.message;
        store.$reset()
        return [];
    }
}
</script>

<template>
    <div>
        <div>
            <form v-if="projects == null || projects.length < 1" @submit.prevent="submit"
                class="flex flex-col items-center text-xl">
                <label>Please enter your password to access:</label>
                <div class="flex mt-6 space-x-2">
                    <input type="text" class="px-4 py-3 text-base border-2 border-gray-700 rounded-lg"
                        v-model="password" />
                    <button type="submit" class="btn btn-sm">Enter</button>
                </div>
                <p v-show="error" v-text="error" class="w-full mt-2 text-center text-red-500 text-md"></p>
            </form>
        </div>
        <div class="grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Project v-for="(item, index) in projects" :key="item.id" :project="item" />
        </div>
    </div>
</template>