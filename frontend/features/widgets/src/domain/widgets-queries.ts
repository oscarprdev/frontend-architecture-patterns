import type { ComputedRef, Ref } from "vue";
import type { AttendeeByIdDto } from "./attendee.dto";
import { useAttendeeById } from "../infra";

export interface WidgetsAttendeeByIdQuery {
  result: Ref<AttendeeByIdDto | undefined>;
  loading: Ref<boolean>;
  error: ComputedRef<string | null>;
}

export type WidgetsAttendeeByIdQueryFn = (
  attendeeId: Ref<string>,
) => WidgetsAttendeeByIdQuery;

export interface WidgetsQueries {
  attendeeById: WidgetsAttendeeByIdQueryFn;
}

export const widgetsQueries: WidgetsQueries = {
  attendeeById: useAttendeeById,
};
