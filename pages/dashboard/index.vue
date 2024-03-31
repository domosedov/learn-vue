<script setup lang="ts">
definePageMeta({});

useSeoMeta({
  title: "Dashboard",
  description: "Dashboard page",
  keywords: "dashboard, page",
});

onBeforeRouteLeave(() => {
  console.log("Leaving dashboard page");
});

onServerPrefetch(() => {
  console.log("=========Prefetching dashboard page=========");
});

const name = ref("John Doe");

const submit = (e: Event) => {
  e.preventDefault();
  console.log(name.value);
};

const todos = useTodosStore();
const countStore = useCountStore();

countStore.$subscribe((...args) => {
  console.log("Count changed", args);
});

countStore.$onAction((...count) => {
  console.log("Incremented to", count);
});

todos.changeLimit(10);
await useAsyncData(() => todos.fetchTodos()).then(() => true);
</script>

<template>
  <div>
    <h1>DASHBOARD PAGE</h1>
    <Counter />
    <form @submit="submit">
      <input type="text" v-model="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
  <p>LOL</p>
  <div class="flex items-center gap-2">
    <button
      type="button"
      class="bg-gray-50 text-gray-700 px-4 py-1 rounded border border-gray-300"
      @click="todos.changeFilter('active')"
    >
      Active
    </button>
    <button
      type="button"
      class="bg-gray-50 text-gray-700 px-4 py-1 rounded border border-gray-300"
      @click="todos.changeFilter('completed')"
    >
      Completed
    </button>
    <button
      type="button"
      class="bg-gray-50 text-gray-700 px-4 py-1 rounded border border-gray-300"
      @click="todos.changeFilter('all')"
    >
      All
    </button>
  </div>

  <ul v-for="todo in todos.filteredTodos">
    <li>{{ todo.title }}</li>
  </ul>
</template>
