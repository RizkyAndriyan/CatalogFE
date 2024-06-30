<script setup>
import Navbar from '../components/Navbar.vue'
import Kategori from "../components/Kategori.vue";
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
</script>

<template>
<!--  navbar-->
  <section>
  <Navbar/>
  </section>

<!--  banner-->
  <section class="flex justify-center bg-blue-light">
    <div class="container flex justify-center">
      <Banner/>
    </div>
  </section>

<!--  kategori-->
  <section class="flex justify-center mt-10">
    <div class="container">
    <Kategori/>
    </div>
  </section>

<!--  card-->
  <section class="flex justify-center mt-5">
    <div class="container grid  grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-5">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </section>
</template>