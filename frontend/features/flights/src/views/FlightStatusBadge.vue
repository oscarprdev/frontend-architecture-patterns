<script setup lang="ts">
import { Badge } from '@frontend-app/ui';
import type { Flight } from '../domain';

defineProps<{
  transport?: Flight | null;
}>();
</script>

<template>
  <Badge :variant="transport ? 'default' : 'outline'">
    {{ transport ? 'Assigned' : 'Unassigned' }}
  </Badge>
</template>
