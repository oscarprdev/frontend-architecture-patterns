<script setup lang="ts">
import { useWidgets, AttendeeDetail } from "@frontend-app/widgets";
import type { Attendee } from "../domain";
import FlightStatusBadge from "./FlightStatusBadge.vue";

defineProps<{
  attendee: Attendee;
}>();

const { open } = useWidgets();
</script>

<template>
  <tr
    class="hover:bg-neutral-50/50 transition-colors cursor-pointer"
    @click="open(AttendeeDetail, { attendeeId: attendee.id }, 'Attendee Details')"
  >
    <td class="px-6 py-4 text-sm font-medium text-neutral-900">
      {{ attendee.user.name }}
    </td>
    <td class="px-6 py-4 text-sm text-neutral-600">
      {{ attendee.user.email }}
    </td>
    <td class="px-6 py-4 text-sm text-neutral-600">
      <template v-if="attendee.transport">
        <span class="font-medium text-neutral-800">{{ attendee.transport.type }}:</span>
        {{ attendee.transport.from }} → {{ attendee.transport.to }}
        <span class="text-neutral-500 text-xs block mt-1">
          {{ attendee.transport.departureDate }} – {{ attendee.transport.arrivalDate }}
        </span>
      </template>
      <span v-else class="text-neutral-400 italic">—</span>
    </td>
    <td class="px-6 py-4">
      <FlightStatusBadge :transport="attendee.transport" />
    </td>
  </tr>
</template>
