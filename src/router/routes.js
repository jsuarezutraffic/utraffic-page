const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/nosotros", component: () => import("pages/NosotrosPage.vue") },
      { path: "/contacto", component: () => import("pages/ContactoPage.vue") },
      {
        path: "/quehacemos",
        component: () => import("pages/QueHacemosPage.vue"),
      },
      {
        path: "/animaciones",
        component: () => import("pages/AnimacionesPrueba.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
