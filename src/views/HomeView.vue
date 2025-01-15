<template>
  <div class="container">
    <div class="grid items-center sm:gap-12 lg:gap-16 md:grid-cols-2 ">
      <Transition appear>
        <div>
          <h1 class="text-lg sm:text-3xl lg:text-4xl">Andrew Vaccaro, Software Engineer</h1>
          <p
            class="mt-6 text-5xl leading-[1] sm:leading-tight lg:leading-tight sm:text-6xl sm:mt-8 lg:mt-16 lg:text-7xl">
            <span class="text-amber-400">Software Engineer</span> with an eye for design.</p>
        </div>
      </Transition>
      <div class="md:min-h-[31.25rem] flex flex-col md:items-end items-center justify-center">
        <img class="mt-8 sm:mt-0" title="Me" alt="Me" src="/me.svg" />
      </div>
    </div>

    <div class="flex justify-center md:justify-start">
      <RouterLink class="mt-12 md:mt-16 lg:mt-20 btn" to="/contact">Contact</RouterLink>
    </div>
  </div>
</template>
