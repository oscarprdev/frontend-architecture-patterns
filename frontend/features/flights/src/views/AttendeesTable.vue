<script setup lang="ts">
import type { Attendee } from '../services';
import AttendeeRow from './AttendeeRow.vue';

defineProps<{
  attendees: Attendee[];
  loading: boolean;
}>();
</script>

<template>
  <div class="rounded-lg border border-neutral-200 overflow-hidden">
    <table class="w-full min-w-[600px]">
      <thead class="bg-neutral-50 border-b border-neutral-200">
        <tr>
          <th class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
            Name
          </th>
          <th class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
            Email
          </th>
          <th class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
            Flight / Transport
          </th>
          <th class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="loading">
          <tr v-for="i in 5" :key="i" class="border-b border-neutral-200 last:border-0">
            <td colspan="4" class="px-4 py-3">
              <div class="h-4 bg-neutral-200 rounded animate-pulse max-w-[200px]" />
            </td>
          </tr>
        </template>
        <template v-else-if="attendees.length === 0">
          <tr>
            <td colspan="4" class="px-4 py-8 text-center text-neutral-500 text-sm">
              No attendees to display. Enter a meeting ID and search to load attendees.
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
