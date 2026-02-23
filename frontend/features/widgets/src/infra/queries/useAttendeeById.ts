import { computed, type Ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import type { WidgetsAttendeeByIdQuery } from "../../domain";
import { GetAttendeeByIdDocument } from "../generated/graphql";

export function useAttendeeById(attendeeId: Ref<string>): WidgetsAttendeeByIdQuery {
  const enabled = computed(() => !!attendeeId.value.trim());

  const { result, loading, error } = useQuery(
    GetAttendeeByIdDocument,
    () => ({ attendeeId: attendeeId.value }),
    () => ({ enabled: enabled.value, fetchPolicy: "network-only" }),
  );

  const mappedResult = computed(() =>
    result.value ? { attendee: result.value.attendee ?? undefined } : undefined,
  );

  return {
    result: mappedResult,
    loading,
    error: computed(() => error.value?.message ?? null),
  };
}
