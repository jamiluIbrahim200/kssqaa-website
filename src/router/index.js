import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";
// import appConfig from "../../app.config";
// import store from "@/state/store";
// import appConfig from "@/app.config";

const router = createRouter({
  history: createWebHistory(),
  routes,

  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: "history",
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

// API based Authentication
// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  next();
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);

  if (!authRequired) return next();
  // if auth is required and the user is logged in...



  // eslint-disable-next-line
  async function validateUser() {
    try {
      const response = ''
      const abilities = response?.data.info ? response?.data.info.abilities : [];
      if (routeTo.meta.acc) {
        const acc = routeTo.meta.acc.some((item)=> abilities.includes(item)) 
        // const acc = abilities.includes(routeTo.meta.acc);
        return acc ? next() : redirectToLogin();
      } else {
        next();
      }
    } catch (err) {
      if (err.response.status === 401) {
        redirectToLogin();
      }
      return 0;
    }
  }
  function redirectToLogin() {
    // Pass the original route to the login component
    next({ name: "login", query: { redirectFrom: routeTo.fullPath } });
  }
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              // Complete the redirect.

              next(...args);
              reject(new Error("Redirected"));
            } else {
              resolve();
            }
          });
        } else {
          // Otherwise, continue resolving the route.
          resolve();
        }
      });
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return;
  }
  document.title = routeTo.meta.title; // Set the document title from the meta info.
  // If we reach this point, continue resolving the route.
  next();
});

export default router;
