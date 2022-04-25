const routes = [
  {
    path: "/",
    component: () => import("layouts/PetniLayout.vue"),
    children: [
      {
        path: "",
        name: "match",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/emergency",
        name: "emergency",
        component: () => import("pages/EmergencyHospital.vue"),
      },
      {
        path: "/collect",
        name: "collect",
        component: () => import("pages/CollectionList.vue"),
      },
    ],
  },
  {
    path: "/entry",
    name: "entry",
    component: () => import("../components/global/EntryAnimation.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
