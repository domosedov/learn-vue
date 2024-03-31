<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { onServerPrefetch } from "vue";
import { useRoute } from "vue-router";

const { id } = useRoute().params;

const { data, suspense } = useQuery({
  queryKey: ["todo", id],
  queryFn: async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.json() as Promise<{ id: number; title: string }>;
  },
});

onServerPrefetch(async () => {
  await suspense();
});
</script>

<template>
  <h1>Single todo</h1>
  <div v-if="data">{{ data.title }}</div>
</template>
