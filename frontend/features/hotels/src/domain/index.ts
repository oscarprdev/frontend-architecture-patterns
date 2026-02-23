export {
  accommodationSchema,
  attendeeSchema,
} from "./attendee.schema";
export type { Accommodation, Attendee } from "./attendee.schema";
export { toDomainAttendee } from "./attendee.mapper";
export type { AttendeeQueryDto, AttendeesByMeetingDto } from "./attendee.dto";
export {
  type HotelsAttendeesByMeetingQuery,
  type HotelsQueries,
  hotelsQueries,
} from "./hotels-queries";
