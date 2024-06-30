<script setup>
import Search from "@/components/Search.vue";
</script>

<template>
  <nav class="bg-blue-dark-active flex justify-center">
    <div class="container grid md:flex gap-y-5 justify-items-center md:justify-between lg:grid-cols-2 py-3">
      <img src="../../src/assets/media/marketo.png" alt="marketo" class="lg:justify-self-start">
      <section class="grid gap-y-5 items-center justify-items-center md:flex lg:grid-cols-2 justify-end gap-x-16">
        <Search></Search>
        <div class="lg:flex gap-x-16 text-blue-light hidden">
          <a href="" class="">Home</a>
          <a href="">Product</a>
          <a href="">AboutUs</a>
        </div>
      </section>
    </div>
  </nav>
</template>