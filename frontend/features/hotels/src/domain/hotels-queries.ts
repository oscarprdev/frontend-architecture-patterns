import type { ComputedRef, Ref } from "vue";
import type { AttendeesByMeetingDto } from "./attendee.dto";
import { useAttendeesByMeeting } from "../infra";

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

export const hotelsQueries: HotelsQueries = {
  attendeesByMeeting: useAttendeesByMeeting,
};
