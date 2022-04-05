import Vue from "vue";
import Router from "vue-router";

import Index from "@/pages/Index";
import City from "@/pages/City";
import Detail from "@/pages/Detail";
import List from "@/pages/List";
import Search from "@/pages/Search";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/:username",
      name: "Index",
      component: Index,
      props: true
    },
    {
      path: "/city",
      name: "City",
      component: City
    },
    {
      path: "/detail/",
      name: "Detail",
      component: Detail,
    },
    {
      path: "/list",
      name: "List",
      component: List
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    }
  ]
});
