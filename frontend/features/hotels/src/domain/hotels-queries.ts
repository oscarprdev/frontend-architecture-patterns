import { useAttendeesByMeeting } from "../infra";
import type { HotelsQueries } from "./hotels-queries-types";

export { type HotelsAttendeesByMeetingQuery, type HotelsQueries } from "./hotels-queries-types";

export const hotelsQueries: HotelsQueries = {
  attendeesByMeeting: useAttendeesByMeeting,
};
