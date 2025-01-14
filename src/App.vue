<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Header />
  <main>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
  </main>
  <Footer/>
</template>

<style>
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
        transition: translateY(0);
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translateY(15px);
    }
    </style>