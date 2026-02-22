<script setup lang="ts">
import type { Attendee } from "../domain";
import FlightStatusBadge from "./FlightStatusBadge.vue";

defineProps<{
  attendee: Attendee;
}>();
</script>

<template>
  <tr class="border-b border-neutral-200 last:border-0">
    <td class="px-4 py-3 text-sm text-neutral-900">{{ attendee.user.name }}</td>
    <td class="px-4 py-3 text-sm text-neutral-600">
      {{ attendee.user.email }}
    </td>
    <td class="px-4 py-3 text-sm text-neutral-600">
      <template v-if="attendee.transport">
        {{ attendee.transport.type }}: {{ attendee.transport.from }} →
        {{ attendee.transport.to }}
        <span class="text-neutral-500 text-xs block mt-0.5">
          {{ attendee.transport.departureDate }} –
          {{ attendee.transport.arrivalDate }}
        </span>
      </template>
      <span v-else class="text-neutral-400">—</span>
    </td>
    <td class="px-4 py-3">
      <FlightStatusBadge :transport="attendee.transport" />
    </td>
  </tr>
</template>
