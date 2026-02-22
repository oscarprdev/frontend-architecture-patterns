import { computed, ref } from "vue";
import type { InboundFlightsQueries } from "../domain";
import { toDomainAttendee } from "../domain";

export function useInboundFlights(
  inboundFlightsQueries: InboundFlightsQueries,
) {
  const { attendeesByMeeting } = inboundFlightsQueries;

  return (initialMeetingId = "1") => {
    const meetingId = ref(initialMeetingId);
    const { result, loading, error } = attendeesByMeeting(meetingId);

    const attendees = computed(
      () => result.value?.meeting?.attendees.map(toDomainAttendee) ?? [],
    );

    function setMeetingId(id: string) {
      meetingId.value = id;
    }

    return {
      attendees,
      loading,
      error,
      meetingId,
      setMeetingId,
    };
  };
}
