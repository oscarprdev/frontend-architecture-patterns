import { computed, type Ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import type { HotelsAttendeesByMeetingQuery } from "../../domain";
import { GetAttendeesByMeetingDocument } from "../generated/graphql";

export function useAttendeesByMeeting(
  meetingId: Ref<string>,
): HotelsAttendeesByMeetingQuery {
  const enabled = computed(() => !!meetingId.value.trim());

  const { result, loading, error } = useQuery(
    GetAttendeesByMeetingDocument,
    () => ({ meetingId: meetingId.value }),
    () => ({ enabled: enabled.value, fetchPolicy: "network-only" }),
  );

  const mappedResult = computed(() =>
    result.value ? { meeting: result.value.meeting ?? undefined } : undefined,
  );

  return {
    result: mappedResult,
    loading,
    error: computed(() => error.value?.message ?? null),
  };
}
