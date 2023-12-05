export default [
  {
    path: "/display",
    name: "Display",
    component: () => import("@/views/display/index.vue"),
    meta: {
      title: "雷视融合",
      showLink: true,
      rank: 100
    }
  }
] as Array<RouteConfigsTable>;
