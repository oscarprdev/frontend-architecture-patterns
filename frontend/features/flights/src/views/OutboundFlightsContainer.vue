<script setup lang="ts">
import { ref } from "vue";
import { useOutboundFlights } from "../application";
import { outboundFlightsQueries } from "../domain";
import AttendeesSearchBar from "./AttendeesSearchBar.vue";
import AttendeesTable from "./AttendeesTable.vue";

const DEFAULT_MEETING_ID = "1";
const { attendees, loading, error, setMeetingId } = useOutboundFlights(
  outboundFlightsQueries,
)(DEFAULT_MEETING_ID);
const searchInput = ref(DEFAULT_MEETING_ID);

function onSearch() {
  if (!searchInput.value.trim()) return;
  setMeetingId(searchInput.value.trim());
}
</script>

<template>
  <div class="space-y-8">
    <section class="rounded-xl bg-white border border-neutral-200 p-6 shadow-sm">
      <div class="flex flex-col gap-1 mb-4">
        <h2 class="text-lg font-semibold text-neutral-900">Outbound Flights</h2>
        <p class="text-neutral-500 text-sm">
          Attendees departing after the meeting. Search by meeting ID to load
          their flight assignments.
        </p>
      </div>
      <AttendeesSearchBar
        v-model="searchInput"
        :loading="loading"
        @search="onSearch"
      />
    </section>

    <div
      v-if="error"
      class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
    >
      {{ error }}
    </div>

    <section class="rounded-xl bg-white border border-neutral-200 overflow-hidden shadow-sm">
      <AttendeesTable :attendees="attendees" :loading="loading" />
    </section>
  </div>
</template>
