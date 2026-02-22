<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="p-8">
    <div class="flex flex-col gap-4 mb-6">
      <h1 class="text-3xl font-bold text-neutral-900">Flights</h1>
      <div class="inline-flex rounded-lg border border-neutral-200 bg-neutral-50 p-0.5" role="group">
        <RouterLink
          to="/flights/inbound"
          class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
          :class="$route.path.endsWith('/inbound')
            ? 'bg-white text-neutral-900 shadow-sm'
            : 'text-neutral-600 hover:text-neutral-900'"
        >
          Inbound
        </RouterLink>
        <RouterLink
          to="/flights/outbound"
          class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
          :class="$route.path.endsWith('/outbound')
            ? 'bg-white text-neutral-900 shadow-sm'
            : 'text-neutral-600 hover:text-neutral-900'"
        >
          Outbound
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>
