type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<Todo[]>([]);

  const todosPending = ref(false);

  const filter = ref<"all" | "completed" | "active">("all");

  const limit = ref(5);

  const todosCount = computed(() => todos.value.length);

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "completed":
        return todos.value.filter((todo) => todo.completed);
      case "active":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
  });

  function changeFilter(newFilter: typeof filter.value) {
    filter.value = newFilter;
  }

  function changeLimit(newLimit: typeof limit.value) {
    limit.value = newLimit;
  }

  async function fetchTodos() {
    todosPending.value = true;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit.value}`
    );
    const data = await response.json();
    todos.value = data;
    todosPending.value = false;
  }

  return {
    todos,
    todosCount,
    todosPending,
    fetchTodos,
    filter,
    changeFilter,
    filteredTodos,
    limit,
    changeLimit,
  };
});
