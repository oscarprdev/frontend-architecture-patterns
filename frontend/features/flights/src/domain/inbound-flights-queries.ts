import type { ComputedRef, Ref } from "vue";
import type { AttendeesByMeetingDto } from "./attendee.dto";
import { useAttendeesByMeeting } from "../infra";

export interface AttendeesByMeetingQuery {
  result: Ref<AttendeesByMeetingDto | undefined>;
  loading: Ref<boolean>;
  error: ComputedRef<string | null>;
}

export type InboundFlightsAttendeesByMeetingQuery = AttendeesByMeetingQuery;

export type InboundFlightsAttendeesByMeetingQueryFn = (
  meetingId: Ref<string>,
) => InboundFlightsAttendeesByMeetingQuery;

export interface InboundFlightsQueries {
  attendeesByMeeting: InboundFlightsAttendeesByMeetingQueryFn;
}

export const inboundFlightsQueries: InboundFlightsQueries = {
  attendeesByMeeting: useAttendeesByMeeting,
};
