import type { AttendeeQueryDto } from "./attendee.dto";
import { attendeeSchema, type Attendee } from "./attendee.schema";

export function toDomainAttendee(raw: AttendeeQueryDto): Attendee {
  return attendeeSchema.parse({
    id: raw.id,
    userId: raw.userId,
    meetingId: raw.meetingId,
    user: { name: raw.user.name, email: raw.user.email },
    transport: raw.transport
      ? {
          id: raw.transport.id,
          type: raw.transport.type,
          from: raw.transport.from,
          to: raw.transport.to,
          departureDate: raw.transport.departureDate,
          arrivalDate: raw.transport.arrivalDate,
        }
      : undefined,
  });
}
