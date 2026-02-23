<script setup lang="ts">
import { Badge } from "@frontend-app/ui";
import type { Accommodation } from "../domain";

defineProps<{
  accommodation?: Accommodation | null;
}>();
</script>

<template>
  <Badge :variant="accommodation ? 'default' : 'outline'">
    {{ accommodation ? "Assigned" : "Unassigned" }}
  </Badge>
</template>
