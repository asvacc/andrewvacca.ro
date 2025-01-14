<script setup>
import Nav from '../components/Navigation.vue';
import NavLinks from '../components/NavLinks.vue';
import MobileMenu from '../components/MobileMenu.vue';
</script>

<template>
    <header class="mt-16 mb-20 sm:mt-24 md:mb-16">
        <Nav>
            <NavLinks class="hidden sm:space-x-3 md:space-x-12 sm:flex" />
            <MobileMenu />
        </Nav>
    </header>
</template>