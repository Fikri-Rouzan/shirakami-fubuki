import Home from "../pages/Home.svelte";
import Terms from "../pages/Terms.svelte";
import Privacy from "../pages/Privacy.svelte";
import NotFound from "../pages/NotFound.svelte";

export const routes = {
  "/": Home,
  "/terms": Terms,
  "/privacy": Privacy,
  "*": NotFound,
};
