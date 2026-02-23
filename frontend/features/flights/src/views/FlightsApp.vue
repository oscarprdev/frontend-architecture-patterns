<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="max-w-5xl mx-auto px-8 py-10">
    <div class="flex flex-col gap-6 mb-8">
      <h1 class="text-2xl font-semibold text-neutral-900 tracking-tight">
        Flights
      </h1>
      <div
        class="inline-flex rounded-xl border border-neutral-200 bg-white p-1 shadow-sm"
        role="group"
      >
        <RouterLink
          to="/flights/inbound"
          class="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          :class="
            $route.path.endsWith('/inbound')
              ? 'bg-neutral-900 text-white shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
          "
        >
          Inbound
        </RouterLink>
        <RouterLink
          to="/flights/outbound"
          class="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          :class="
            $route.path.endsWith('/outbound')
              ? 'bg-neutral-900 text-white shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
          "
        >
          Outbound
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>
