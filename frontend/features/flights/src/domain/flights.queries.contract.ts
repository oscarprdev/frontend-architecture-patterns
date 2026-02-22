import type { AttendeesByMeetingQueryFn } from "./attendees-by-meeting.contract";

/** Queries required by the inbound flights use-case */
export interface InboundFlightsQueries {
  attendeesByMeeting: AttendeesByMeetingQueryFn;
}

/** Queries required by the outbound flights use-case */
export interface OutboundFlightsQueries {
  attendeesByMeeting: AttendeesByMeetingQueryFn;
}
