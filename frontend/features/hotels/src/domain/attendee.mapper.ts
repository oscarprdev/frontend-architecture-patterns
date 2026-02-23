import type { AttendeeQueryDto } from "./attendee.dto";
import { attendeeSchema } from "./attendee.schema";

export function toDomainAttendee(raw: AttendeeQueryDto) {
  return attendeeSchema.parse({
    id: raw.id,
    userId: raw.userId,
    meetingId: raw.meetingId,
    user: { name: raw.user.name, email: raw.user.email },
    accommodation: raw.accommodation
      ? {
          id: raw.accommodation.id,
          name: raw.accommodation.name,
          address: raw.accommodation.address,
          checkIn: raw.accommodation.checkIn,
          checkOut: raw.accommodation.checkOut,
        }
      : undefined,
  });
}
