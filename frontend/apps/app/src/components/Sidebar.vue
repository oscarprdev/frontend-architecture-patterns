<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { flightsMenuItem, type MenuItem } from "@frontend-app/flights";

const menuItems: MenuItem[] = [flightsMenuItem];
const route = useRoute();
const router = useRouter();
</script>

<template>
  <aside
    class="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto"
  >
    <div class="p-6">
      <h1 class="text-xl font-bold mb-8">Microfrontend Shell</h1>
      <nav>
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.path">
            <button
              @click="router.push(item.path)"
              class="w-full text-left px-4 py-2 rounded hover:bg-gray-800 transition-colors flex items-center gap-2"
              :class="{ 'bg-gray-800': route.path.startsWith(item.path) }"
            >
              <component :is="item.icon" class="w-5 h-5 shrink-0" />
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
