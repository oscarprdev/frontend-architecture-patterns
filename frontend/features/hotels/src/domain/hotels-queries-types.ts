import type { ComputedRef, Ref } from "vue";
import type { AttendeesByMeetingDto } from "./attendee.dto";

export interface HotelsAttendeesByMeetingQuery {
  result: Ref<AttendeesByMeetingDto | undefined>;
  loading: Ref<boolean>;
  error: ComputedRef<string | null>;
}

export type HotelsAttendeesByMeetingQueryFn = (
  meetingId: Ref<string>,
) => HotelsAttendeesByMeetingQuery;

export interface HotelsQueries {
  attendeesByMeeting: HotelsAttendeesByMeetingQueryFn;
}
