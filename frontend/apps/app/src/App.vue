<script setup lang="ts">
import { RouterView } from "vue-router";
import { WidgetsDrawer } from "@frontend-app/widgets";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen bg-neutral-50">
    <Sidebar />
    <main class="flex-1 overflow-auto ml-64">
      <RouterView />
    </main>
    <WidgetsDrawer />
  </div>
</template>
