<script setup>
import Nav from '../components/Navigation.vue';
import NavLinks from '../components/NavLinks.vue';
</script>
<template>
    <footer class="pt-12 pb-12 mt-20 border-t md:mt-28 lg:mt-32 border-t-gray-100">
        <Nav class="flex-col sm:flex-row">
            <NavLinks class="flex-col mt-4 space-x-0 sm:mt-0 sm:space-x-4 sm:flex-row md:space-x-12" />
        </Nav>
    </footer>
</template>