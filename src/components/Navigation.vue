<script setup>

</script>

<template>
    <nav class="container flex items-center justify-between text-lg">
        <h1 class="font-bold uppercase text-md">
            <RouterLink class="transition-colors hover:text-red-400" to="/">Andrew Vaccaro</RouterLink>
        </h1>
        <slot></slot>
    </nav>
</template>