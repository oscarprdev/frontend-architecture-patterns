import { computed, ref } from "vue";
import { useAttendeesByMeeting } from "../infra";
import { toDomainAttendee } from "../domain";

export function useOutboundFlights(initialMeetingId = "1") {
  const meetingId = ref(initialMeetingId);
  const { result, loading, error } = useAttendeesByMeeting(meetingId);

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
}
