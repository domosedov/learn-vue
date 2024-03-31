<template>
  <nav>
    <ul class="flex items-center gap-2">
      <li>
        <NuxtLink
          to="/"
          class="bg-blue-500 text-white p-2 duration-200 rounded-sm inline-block aria-[current=page]:bg-green-500"
          >Home =>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/dashboard"
          class="bg-blue-500 text-white p-2 duration-200 rounded-sm inline-block aria-[current=page]:bg-green-500"
        >
          Dashboard
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
