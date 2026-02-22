import type { ComputedRef, Ref } from "vue";
import type { AttendeesByMeetingDto } from "./attendee.dto";

/** Return type of the attendees-by-meeting query composable */
export interface AttendeesByMeetingQuery {
  result: Ref<AttendeesByMeetingDto | undefined>;
  loading: Ref<boolean>;
  error: ComputedRef<string | null>;
}

/** Function that creates an attendees-by-meeting query given a meetingId ref */
export type AttendeesByMeetingQueryFn = (
  meetingId: Ref<string>,
) => AttendeesByMeetingQuery;
