<script setup lang="ts">
import type { Attendee } from '../domain';
import AttendeeRow from './AttendeeRow.vue';

defineProps<{
  attendees: Attendee[];
  loading: boolean;
}>();
</script>

<template>
  <div>
    <table class="w-full min-w-[640px]">
      <thead>
        <tr class="border-b border-neutral-200 bg-neutral-50/80">
          <th class="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Name
          </th>
          <th class="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Email
          </th>
          <th class="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Flight / Transport
          </th>
          <th class="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider w-28">
            Status
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-neutral-100">
        <template v-if="loading">
          <tr v-for="i in 5" :key="i">
            <td colspan="4" class="px-6 py-5">
              <div class="h-4 bg-neutral-200 rounded animate-pulse max-w-[200px]" />
            </td>
          </tr>
        </template>
        <template v-else-if="attendees.length === 0">
          <tr>
            <td colspan="4" class="px-6 py-16 text-center">
              <p class="text-neutral-500 text-sm">No attendees to display.</p>
              <p class="text-neutral-400 text-sm mt-1">Enter a meeting ID and search to load attendees.</p>
            </td>
          </tr>
        </template>
        <template v-else>
          <AttendeeRow v-for="attendee in attendees" :key="attendee.id" :attendee="attendee" />
        </template>
      </tbody>
    </table>
  </div>
</template>
