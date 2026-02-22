import { computed, type Ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import type { Attendee } from "./types";
import {
  GetAttendeesByMeetingDocument,
  type GetAttendeesByMeetingQuery,
} from "./generated/graphql";

type GraphQLAttendee = NonNullable<
  GetAttendeesByMeetingQuery["meeting"]
>["attendees"][number];

function toDomainAttendee(a: GraphQLAttendee): Attendee {
  return {
    id: a.id,
    userId: a.userId,
    meetingId: a.meetingId,
    user: { name: a.user.name, email: a.user.email },
    transport: a.transport
      ? {
          id: a.transport.id,
          type: a.transport.type,
          from: a.transport.from,
          to: a.transport.to,
          departureDate: a.transport.departureDate,
          arrivalDate: a.transport.arrivalDate,
        }
      : undefined,
  };
}

export function useAttendeesQuery(meetingId: Ref<string>) {
  const enabled = computed(() => !!meetingId.value.trim());

  const { result, loading, error } = useQuery(
    GetAttendeesByMeetingDocument,
    () => ({ meetingId: meetingId.value }),
    () => ({ enabled: enabled.value }),
  );

  const attendees = computed<Attendee[]>(() => {
    const data = result.value;
    const raw = data?.meeting?.attendees ?? [];
    return raw.map(toDomainAttendee);
  });

  const errorMessage = computed(() => error.value?.message ?? null);

  return { attendees, loading, error: errorMessage };
}
