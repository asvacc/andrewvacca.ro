<template>
    <ul class="flex items-center">
        <li>
            <RouterLink activeClass="text-amber-400"
                class="transition-colors border-b-2 hover:border-b-amber-400 border-b-transparent" to="/">
                Home</RouterLink>
        </li>
        <li>
            <RouterLink activeClass="text-amber-400"
                class="transition-colors border-b-2 hover:border-b-amber-400 border-b-transparent" to="/portfolio">
                Portfolio</RouterLink>
        </li>
        <li>
            <RouterLink activeClass="text-amber-400"
                class="transition-colors border-b-2 hover:border-b-amber-400 border-b-transparent" to="/resume">
                Resume</RouterLink>
        </li>
        <li>
            <RouterLink activeClass="text-amber-400"
                class="transition-colors border-b-2 hover:border-b-amber-400 border-b-transparent" to="/contact">
                Contact</RouterLink>
        </li>
    </ul>
</template>