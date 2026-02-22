import { type DeepReadonly, type Ref, type UnwrapRef } from "vue";
import { onMounted, onUnmounted, readonly, ref } from "vue";
import type { PresentationUsecase } from "./presentation-use-case";

export type UsecaseState = { [key: string]: any };

export function useUseCaseState<S extends UsecaseState>(
  usecase: PresentationUsecase<S>,
): DeepReadonly<Ref<UnwrapRef<S>>> {
  const state = ref(usecase.state) as Ref<UnwrapRef<S>>;

  const stateSubscription = (newState: S) => {
    (Object.keys(newState) as (keyof S)[]).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(state.value as S, key)) {
        (state.value as S)[key] = newState[key];
      }
    });
  };

  onMounted(() => {
    usecase.subscribe(stateSubscription);
  });

  onUnmounted(() => {
    usecase.unsubscribe(stateSubscription);
  });

  return readonly(state);
}
