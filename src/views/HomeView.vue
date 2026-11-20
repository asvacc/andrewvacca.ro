<template>
  <div class="container">
    <div class="grid items-center sm:gap-12 lg:gap-16 md:grid-cols-2 ">
      <Transition appear>
        <div class="text-center md:text-left">
          <h1 class="text-lg sm:text-3xl lg:text-4xl ">Andrew Vaccaro, Software Engineer</h1>
          <p
            class="mt-6 text-5xl leading-[1] sm:leading-tight lg:leading-tight sm:text-6xl sm:mt-8 lg:mt-16 lg:text-7xl">
            <span class="text-transparent bg-gradient-to-r from-[#f40752] to-[#f9ab8f] bg-clip-text">Software
              Engineer</span> with an eye for design.
          </p>
          <RouterLink class="mt-12 md:mt-16 lg:mt-20 btn" to="/contact">Contact</RouterLink>
        </div>
      </Transition> 
      <div class="flex flex-col items-center justify-center md:items-end">
        <img class="w-[400px] h-[400px] rounded-full object-contain mt-8 sm:mt-14" height="400" width="400" title="Me" alt="Me" src="/me.svg" />
      </div>
    </div>
  </div>
</template>
