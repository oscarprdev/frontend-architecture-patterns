<script setup lang="ts">
import { useWidgets } from "../application";
import AppDrawer from "./AppDrawer.vue";

const { state, close } = useWidgets();
</script>

<template>
  <AppDrawer :open="state.isOpen" :title="state.title" @close="close">
    <component
      :is="state.component"
      v-bind="state.props"
      v-if="state.component"
    />
  </AppDrawer>
</template>
