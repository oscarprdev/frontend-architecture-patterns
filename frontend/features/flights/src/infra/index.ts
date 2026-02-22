export {
  GetAttendeesByMeetingDocument,
  type GetAttendeesByMeetingQuery,
  type GetAttendeesByMeetingQueryVariables,
} from "./generated/graphql";
export type { TransportType as GraphQLTransportType } from "./generated/graphql";
export { useAttendeesByMeeting } from "./queries/useAttendeesByMeeting";

export type GraphQLAttendee = NonNullable<
  import("./generated/graphql").GetAttendeesByMeetingQuery["meeting"]
>["attendees"][number];
