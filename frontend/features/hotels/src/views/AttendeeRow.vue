<script setup lang="ts">
import type { Attendee } from "../domain";
import HotelStatusBadge from "./HotelStatusBadge.vue";

defineProps<{
  attendee: Attendee;
}>();
</script>

<template>
  <tr class="hover:bg-neutral-50/50 transition-colors">
    <td class="px-6 py-4 text-sm font-medium text-neutral-900">
      {{ attendee.user.name }}
    </td>
    <td class="px-6 py-4 text-sm text-neutral-600">
      {{ attendee.user.email }}
    </td>
    <td class="px-6 py-4 text-sm text-neutral-600">
      <template v-if="attendee.accommodation">
        <span class="font-medium text-neutral-800">{{ attendee.accommodation.name }}</span>
        <span class="text-neutral-500 text-xs block mt-1">
          {{ attendee.accommodation.address }}
        </span>
        <span class="text-neutral-500 text-xs block mt-0.5">
          {{ attendee.accommodation.checkIn }} – {{ attendee.accommodation.checkOut }}
        </span>
      </template>
      <span v-else class="text-neutral-400 italic">—</span>
    </td>
    <td class="px-6 py-4">
      <HotelStatusBadge :accommodation="attendee.accommodation" />
    </td>
  </tr>
</template>
