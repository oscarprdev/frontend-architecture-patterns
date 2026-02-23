import type { Component } from "vue";
import { reactive, readonly } from "vue";

const state = reactive({
  isOpen: false,
  component: null as Component | null,
  props: {} as Record<string, unknown>,
  title: "",
});

export function useWidgets() {
  function open(
    component: Component,
    props?: Record<string, unknown>,
    title = "",
  ) {
    state.component = component;
    state.props = props ?? {};
    state.title = title;
    state.isOpen = true;
  }

  function close() {
    state.isOpen = false;
  }

  return { state: readonly(state), open, close };
}
