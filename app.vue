<script setup>
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout :name="'main'">
    <NuxtPage />
  </NuxtLayout>
  <VueQueryDevtools />
</template>
