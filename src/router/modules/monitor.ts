export default [
  {
    path: "/monitor",
    name: "Monitor",
    component: () => import("@/views/monitor/index.vue"),
    meta: {
      title: "实时识别",
      showLink: true,
      rank: 200
    }
  }
] as Array<RouteConfigsTable>;
