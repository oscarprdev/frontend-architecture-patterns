import { computed, type Ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GetAttendeesByMeetingDocument } from "../generated/graphql";

export function useAttendeesByMeeting(meetingId: Ref<string>) {
  const enabled = computed(() => !!meetingId.value.trim());

  const { result, loading, error } = useQuery(
    GetAttendeesByMeetingDocument,
    () => ({ meetingId: meetingId.value }),
    () => ({ enabled: enabled.value }),
  );

  return {
    result,
    loading,
    error: computed(() => error.value?.message ?? null),
  };
}
