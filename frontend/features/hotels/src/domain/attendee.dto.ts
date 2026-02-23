/** Single attendee in the attendees-by-meeting query result (before domain mapping) */
export interface AttendeeQueryDto {
  id: string;
  userId: string;
  meetingId: string;
  user: { name: string; email: string };
  accommodation?: {
    id: string;
    name: string;
    address: string;
    checkIn: string;
    checkOut: string;
  } | null;
}

/** Raw shape returned by the attendees-by-meeting query */
export interface AttendeesByMeetingDto {
  meeting?: {
    attendees: AttendeeQueryDto[];
  };
}
