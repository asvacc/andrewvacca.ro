<template>
    <ul class="flex items-center">
        <li>
            <RouterLink activeClass="text-[#4568DC]"
                class="transition-colors border-b-2 hover:border-b-[#4568DC] border-b-transparent" to="/">
                Home</RouterLink>
        </li>
        <li>
            <RouterLink activeClass="text-[#4568DC]"
                class="transition-colors border-b-2 hover:border-b-[#4568DC] border-b-transparent" to="/portfolio">
                Portfolio</RouterLink>
        </li>
        <li>
            <RouterLink activeClass="text-[#4568DC]"
                class="transition-colors border-b-2 hover:border-b-[#4568DC] border-b-transparent" to="/blog">
                Blog</RouterLink>
        </li>
        <li>
            <RouterLink activeClass="text-[#4568DC]"
                class="transition-colors border-b-2 hover:border-b-[#4568DC] border-b-transparent" to="/contact">
                Contact</RouterLink>
        </li>
    </ul>
</template>