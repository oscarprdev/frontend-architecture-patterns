import { computed, type Ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import type { HotelsAttendeesByMeetingQuery } from "../../domain/hotels-queries-types";
import { GetAttendeesByMeetingDocument } from "../generated/graphql";

export function useAttendeesByMeeting(
  meetingId: Ref<string>
): HotelsAttendeesByMeetingQuery {
  const enabled = computed(() => !!meetingId.value.trim());

  const { result, loading, error } = useQuery(
    GetAttendeesByMeetingDocument,
    () => ({ meetingId: meetingId.value }),
    () => ({ enabled: enabled.value, fetchPolicy: 'network-only' }),
  );

  return {
    result,
    loading,
    error: computed(() => error.value?.message ?? null),
  };
}
