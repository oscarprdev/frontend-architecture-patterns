<script setup lang="ts">
import { ref } from "vue";
import { useOutboundFlights } from "../application";
import AttendeesSearchBar from "./AttendeesSearchBar.vue";
import AttendeesTable from "./AttendeesTable.vue";

const DEFAULT_MEETING_ID = "1";
const { attendees, loading, error, setMeetingId } =
  useOutboundFlights(DEFAULT_MEETING_ID);
const searchInput = ref(DEFAULT_MEETING_ID);

function onSearch() {
  if (!searchInput.value.trim()) return;
  setMeetingId(searchInput.value.trim());
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col gap-2">
      <h2 class="text-xl font-semibold text-neutral-900">Outbound Flights</h2>
      <p class="text-neutral-600 text-sm">
        Attendees departing after the meeting. Search by meeting ID to load
        their flight assignments.
      </p>
    </div>

    <AttendeesSearchBar
      v-model="searchInput"
      :loading="loading"
      @search="onSearch"
    />

    <div
      v-if="error"
      class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
    >
      {{ error }}
    </div>

    <AttendeesTable :attendees="attendees" :loading="loading" />
  </div>
</template>
