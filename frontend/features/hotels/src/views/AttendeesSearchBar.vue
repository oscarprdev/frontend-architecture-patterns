<script setup lang="ts">
import { Button, Input, Label } from "@frontend-app/ui";

defineProps<{
  modelValue: string;
  loading: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
  search: [];
}>();

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}

function onSearch() {
  emit("search");
}
</script>

<template>
  <div class="flex flex-wrap items-end gap-4">
    <div class="flex flex-col gap-1.5 min-w-[200px]">
      <Label for="meeting-id" class="text-sm font-medium text-neutral-700">Meeting ID</Label>
      <Input
        id="meeting-id"
        :model-value="modelValue"
        placeholder="e.g. 1"
        :disabled="loading"
        class="w-full"
        @input="onInput"
        @keydown.enter="onSearch"
      />
    </div>
    <Button :disabled="loading" @click="onSearch" class="h-10">
      {{ loading ? "Searching..." : "Search" }}
    </Button>
  </div>
</template>
