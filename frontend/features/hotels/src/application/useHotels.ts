import { computed, ref } from "vue";
import type { HotelsQueries } from "../domain";
import { toDomainAttendee } from "../domain";

export function useHotels(hotelsQueries: HotelsQueries) {
  const { attendeesByMeeting } = hotelsQueries;

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
