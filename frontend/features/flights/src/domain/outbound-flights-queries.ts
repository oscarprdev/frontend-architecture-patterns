import type { Ref } from "vue";
import type { AttendeesByMeetingQuery } from "./inbound-flights-queries";
import { useAttendeesByMeeting } from "../infra";

export type OutboundFlightsAttendeesByMeetingQuery = AttendeesByMeetingQuery;

export type OutboundFlightsAttendeesByMeetingQueryFn = (
  meetingId: Ref<string>,
) => OutboundFlightsAttendeesByMeetingQuery;

export interface OutboundFlightsQueries {
  attendeesByMeeting: OutboundFlightsAttendeesByMeetingQueryFn;
}

export const outboundFlightsQueries: OutboundFlightsQueries = {
  attendeesByMeeting: useAttendeesByMeeting,
};
