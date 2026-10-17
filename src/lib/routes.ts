import Home from "../pages/Home.svelte";
import Terms from "../pages/Terms.svelte";
import Privacy from "../pages/Privacy.svelte";
import NotFound from "../pages/NotFound.svelte";

export interface NavLink {
  label: string;
  href: string;
  mobileLabel: string;
}

export const routes = {
  "/": Home,
  "/terms-of-service": Terms,
  "/privacy-policy": Privacy,
  "*": NotFound,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", mobileLabel: "Home" },
  {
    label: "Terms",
    href: "/terms-of-service",
    mobileLabel: "Terms of Service",
  },
  { label: "Privacy", href: "/privacy-policy", mobileLabel: "Privacy Policy" },
];
