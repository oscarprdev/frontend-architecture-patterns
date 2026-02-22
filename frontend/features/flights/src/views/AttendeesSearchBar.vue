<script setup lang="ts">
import { Button, Input, Label } from '@frontend-app/ui';

defineProps<{
  modelValue: string;
  loading: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
  search: [];
}>();

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

function onSearch() {
  emit('search');
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label for="meeting-id">Meeting ID</Label>
    <div class="flex gap-2">
      <Input
        id="meeting-id"
        :model-value="modelValue"
        placeholder="Enter meeting ID..."
        :disabled="loading"
        class="flex-1 max-w-xs"
        @input="onInput"
        @keydown.enter="onSearch"
      />
      <Button :disabled="loading" @click="onSearch">
        {{ loading ? 'Searching...' : 'Search' }}
      </Button>
    </div>
  </div>
</template>
