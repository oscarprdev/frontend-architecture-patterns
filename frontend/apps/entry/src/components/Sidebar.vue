<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigateToFlights = () => {
  router.push('/flights')
}

const isFlightsActive = computed(() => route.path === '/flights')
</script>

<template>
  <aside class="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
    <div class="p-6">
      <h1 class="text-xl font-bold mb-8">Microfrontend Shell</h1>
      <nav>
        <ul class="space-y-2">
          <li>
            <button
              @click="navigateToFlights"
              class="w-full text-left px-4 py-2 rounded hover:bg-gray-800 transition-colors"
              :class="{ 'bg-gray-800': isFlightsActive }"
            >
              Flights
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
