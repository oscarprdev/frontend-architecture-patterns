import { Building2 } from "lucide-vue-next";
import type { Component } from "vue";

export interface MenuItem {
  label: string;
  icon: Component;
  path: string;
  component: () => Promise<Component>;
}

export const hotelsMenuItem: MenuItem = {
  label: "Hotels",
  icon: Building2,
  path: "/hotels",
  component: () => import("./views/HotelsApp.vue").then((m) => m.default),
};

export const hotelsComponent = () =>
  import("./views/HotelsApp.vue").then((m) => m.default);
