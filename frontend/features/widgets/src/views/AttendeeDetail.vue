<script setup lang="ts">
import { computed, toRef } from "vue";
import { Badge, Separator } from "@frontend-app/ui";
import { widgetsQueries } from "../domain";
import { toDomainAttendee } from "../domain";
import type { Attendee } from "../domain";

const props = defineProps<{
  attendeeId: string;
}>();

const attendeeIdRef = toRef(props, "attendeeId");
const { result, loading, error } = widgetsQueries.attendeeById(attendeeIdRef);

const attendee = computed<Attendee | null>(() => {
  const raw = result.value?.attendee;
  return raw ? toDomainAttendee(raw) : null;
});
</script>

<template>
  <div v-if="loading" class="p-6 space-y-4">
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-neutral-200 animate-pulse shrink-0" />
      <div class="space-y-2 flex-1">
        <div class="h-4 bg-neutral-200 rounded animate-pulse w-3/4" />
        <div class="h-3 bg-neutral-200 rounded animate-pulse w-1/2" />
      </div>
    </div>
    <div class="h-3 bg-neutral-200 rounded animate-pulse" />
    <div class="h-3 bg-neutral-200 rounded animate-pulse w-5/6" />
    <div class="h-3 bg-neutral-200 rounded animate-pulse w-4/6" />
  </div>

  <div
    v-else-if="error"
    class="m-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
  >
    {{ error }}
  </div>

  <div v-else-if="attendee" class="p-6 space-y-6">
    <!-- Identity -->
    <section>
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-semibold shrink-0">
          {{ attendee.user.name.charAt(0).toUpperCase() }}
        </div>
        <div>
          <p class="text-base font-semibold text-neutral-900">{{ attendee.user.name }}</p>
          <p class="text-sm text-neutral-500">{{ attendee.user.email }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div class="rounded-lg bg-neutral-50 border border-neutral-200 px-3 py-2.5">
          <p class="text-xs text-neutral-400 uppercase tracking-wide font-medium mb-0.5">Attendee ID</p>
          <p class="text-neutral-700 font-mono text-xs truncate">{{ attendee.id }}</p>
        </div>
        <div class="rounded-lg bg-neutral-50 border border-neutral-200 px-3 py-2.5">
          <p class="text-xs text-neutral-400 uppercase tracking-wide font-medium mb-0.5">Meeting ID</p>
          <p class="text-neutral-700 font-mono text-xs truncate">{{ attendee.meetingId }}</p>
        </div>
      </div>
    </section>

    <Separator />

    <!-- Transport -->
    <section>
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Transport</h3>
        <Badge :variant="attendee.transport ? 'default' : 'outline'">
          {{ attendee.transport ? 'Assigned' : 'Unassigned' }}
        </Badge>
      </div>
      <template v-if="attendee.transport">
        <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4 space-y-3 text-sm">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md bg-neutral-900 text-white text-xs font-semibold">
              {{ attendee.transport.type }}
            </span>
          </div>
          <div class="flex items-center gap-2 text-neutral-700">
            <span class="font-medium">{{ attendee.transport.from }}</span>
            <svg class="w-4 h-4 text-neutral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span class="font-medium">{{ attendee.transport.to }}</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs text-neutral-500">
            <div>
              <p class="font-medium text-neutral-400 uppercase tracking-wide mb-0.5">Departure</p>
              <p>{{ attendee.transport.departureDate }}</p>
            </div>
            <div>
              <p class="font-medium text-neutral-400 uppercase tracking-wide mb-0.5">Arrival</p>
              <p>{{ attendee.transport.arrivalDate }}</p>
            </div>
          </div>
        </div>
      </template>
      <p v-else class="text-sm text-neutral-400 italic">No transport assigned.</p>
    </section>

    <Separator />

    <!-- Accommodation -->
    <section>
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-sm font-semibold text-neutral-700 uppercase tracking-wide">Accommodation</h3>
        <Badge :variant="attendee.accommodation ? 'default' : 'outline'">
          {{ attendee.accommodation ? 'Assigned' : 'Unassigned' }}
        </Badge>
      </div>
      <template v-if="attendee.accommodation">
        <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4 space-y-2 text-sm">
          <p class="font-semibold text-neutral-800">{{ attendee.accommodation.name }}</p>
          <p class="text-neutral-500 text-xs">{{ attendee.accommodation.address }}</p>
          <div class="grid grid-cols-2 gap-2 text-xs text-neutral-500 pt-1">
            <div>
              <p class="font-medium text-neutral-400 uppercase tracking-wide mb-0.5">Check-in</p>
              <p>{{ attendee.accommodation.checkIn }}</p>
            </div>
            <div>
              <p class="font-medium text-neutral-400 uppercase tracking-wide mb-0.5">Check-out</p>
              <p>{{ attendee.accommodation.checkOut }}</p>
            </div>
          </div>
        </div>
      </template>
      <p v-else class="text-sm text-neutral-400 italic">No accommodation assigned.</p>
    </section>
  </div>

  <div v-else class="p-6 text-sm text-neutral-400 italic">
    No attendee data available.
  </div>
</template>
