import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import moment from 'moment';

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref([])
    const expiresOn = ref('')
    
    const isExpired = computed(() => {
        return moment().isAfter(expiresOn.value)
    })

    function $reset() {
        projects.value = []
        expiresOn.value = '';
    }

    function setExpiry(){
        expiresOn.value = moment().add(30, 'minutes');
    }

    return { projects, expiresOn, setExpiry, isExpired, $reset };
    },
    {
        persist: true,
    },
)