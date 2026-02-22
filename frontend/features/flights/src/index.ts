import { Plane } from "lucide-vue-next";
import type { Component } from "vue";

export interface MenuItem {
  label: string;
  icon: Component;
  path: string;
  component: () => Promise<Component>;
}

export const flightsMenuItem: MenuItem = {
  label: "Flights",
  icon: Plane,
  path: "/flights",
  component: () => import("./views/FlightsApp.vue").then((m) => m.default),
};

export const inboundFlightsComponent = () =>
  import("./views/InboundFlightsContainer.vue").then((m) => m.default);
export const outboundFlightsComponent = () =>
  import("./views/OutboundFlightsContainer.vue").then((m) => m.default);
