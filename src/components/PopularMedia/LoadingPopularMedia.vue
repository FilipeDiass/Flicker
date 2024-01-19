<template>
  <section class="my-5 flex h-fit w-full flex-col gap-5 overflow-hidden p-2.5">
    <div class="flex h-fit w-full flex-wrap items-center justify-between gap-5">
      <h1 class="font-primary text-2xl text-white lg:text-3xl">
        <slot />
      </h1>
      <picture class="flex h-full w-36 items-center justify-center lg:w-44">
        <a href="https://www.themoviedb.org/" target="_blank" class="size-full">
          <img src="/TheMovieDB.svg" alt="Logo TheMovieDB" class="size-full" />
        </a>
      </picture>
    </div>
    <div class="flex w-full flex-grow items-center justify-start gap-6">
      <picture
        v-for="(item, i) in 10"
        :key="i"
        class="h-60 w-36 flex-shrink-0 animate-pulse cursor-pointer overflow-hidden rounded bg-slate-950 lg:w-40"
      >
      </picture>
    </div>
  </section>
</template>
