<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { flightsMenuItem, type MenuItem } from "@frontend-app/flights";
import { hotelsMenuItem } from "@frontend-app/hotels";

const menuItems: MenuItem[] = [flightsMenuItem, hotelsMenuItem];
const route = useRoute();
const router = useRouter();
</script>

<template>
  <aside
    class="w-64 bg-neutral-900 text-white h-screen fixed left-0 top-0 overflow-y-auto border-r border-neutral-800"
  >
    <div class="p-6">
      <h1 class="text-lg font-semibold tracking-tight mb-8 text-neutral-200">
        Meeting Planner
      </h1>
      <nav>
        <ul class="space-y-1">
          <li v-for="item in menuItems" :key="item.path">
            <button
              @click="router.push(item.path)"
              class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-3"
              :class="
                route.path.startsWith(item.path)
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200'
              "
            >
              <component :is="item.icon" class="w-5 h-5 shrink-0 opacity-90" />
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
