import type { ComputedRef, Ref } from "vue";
import type { AttendeesByMeetingDto } from "./attendee.dto";
import { useAttendeesByMeeting } from "../infra";

export interface OutboundFlightsAttendeesByMeetingQuery {
  result: Ref<AttendeesByMeetingDto | undefined>;
  loading: Ref<boolean>;
  error: ComputedRef<string | null>;
}

export type OutboundFlightsAttendeesByMeetingQueryFn = (
  meetingId: Ref<string>,
) => OutboundFlightsAttendeesByMeetingQuery;

export interface OutboundFlightsQueries {
  attendeesByMeeting: OutboundFlightsAttendeesByMeetingQueryFn;
}

export const outboundFlightsQueries: OutboundFlightsQueries = {
  attendeesByMeeting: useAttendeesByMeeting,
};
