<script setup>
import { ref, onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projectsStore';
import Project from './Project.vue'

const store = useProjectsStore()
const apiEndpoint = 'https://3uoijyddwlqllx6lrfnrappxhe0jisnv.lambda-url.us-east-2.on.aws'
const projects = ref([])
const loading = ref(false)
const error = ref('')
const password = ref('')

onMounted(() => {
    if(store.isExpired)
    {
        store.$reset()
    }

    projects.value = store.projects;
})

async function submit(event) {
    loading.value = true;
    projects.value = await getProjects();
    loading.value = false;
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
                    <button type="submit" class="btn btn-sm">
                        <span v-show="!loading">Enter</span>
                        <svg v-show="loading" width="24" height="24" stroke="currentColor" class="text-white size-4"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" stroke-linecap="round">
                                    <animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline"
                                        values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1"
                                        keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                                        repeatCount="indefinite" />
                                    <animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline"
                                        values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1"
                                        keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                                        repeatCount="indefinite" />
                                </circle>
                                <animateTransform attributeName="transform" type="rotate" dur="2s"
                                    values="0 12 12;360 12 12" repeatCount="indefinite" />
                            </g>
                        </svg>
                    </button>
                </div>
                <Transition appear>
                    <p v-show="error" v-text="error" class="w-full mt-2 text-center text-red-500 text-md"></p>
                </Transition>
            </form>
        </div>
        <div class="grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Project v-for="(item, index) in projects" :key="item.id" :style="'transition-delay: ' + index*25 + 'ms'" :project="item" />
        </div>
    </div>
</template>