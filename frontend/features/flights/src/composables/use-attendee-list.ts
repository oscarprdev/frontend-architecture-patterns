import { ref } from "vue";
import { useAttendeesQuery } from "../services";

const DEFAULT_MEETING_ID = "1";

export function useAttendeeList(initialMeetingId = DEFAULT_MEETING_ID) {
  const meetingId = ref(initialMeetingId);
  const { attendees, loading, error } = useAttendeesQuery(meetingId);

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
