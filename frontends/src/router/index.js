import Vue from "vue";
import Router from "vue-router";
import CreateBook from "@/components/Book/CreateBook";
import EditBook from "@/components/Book/EditBook";
import ListBook from "@/components/Book/ListBook";
import DeleteBook from "@/components/Book/DeleteBook";

import Home from "@/components/Home";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/book/new",
      name: "CreateBook",
      component: CreateBook
    },
    {
      path: "/books",
      name: "ListBook",
      component: ListBook
    },
    {
      path: "/books/:bookId/edit",
      name: "EditBook",
      component: EditBook
    },
    {
      path: "/books/:bookId/delete",
      name: "DeleteBook",
      component: DeleteBook
    }
  ],
  mode: "history"
});
