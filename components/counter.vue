<script setup lang="ts">
const countStore = useCountStore();

onBeforeMount(() => {
  console.log("Counter component is about to mount");
});

onMounted(() => {
  console.log("Counter component mounted");
});

onBeforeUnmount(() => {
  console.log("Counter component is about to unmount");
});

onUnmounted(() => {
  console.log("Counter component unmounted");
});

onBeforeUpdate(() => {
  console.log("Counter component is about to update");
});

onUpdated(() => {
  console.log("Counter component updated");
});
</script>

<template>
  <div class="bg-yellow-500 border border-dashed border-yellow-700">
    <h1>Counter</h1>
    <p>{{ countStore.count }}</p>
    <button @click="countStore.increment">Increment</button>
    <button @click="countStore.decrement">Decrement</button>
  </div>
</template>
