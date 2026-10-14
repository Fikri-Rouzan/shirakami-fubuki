<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "./lib/routes";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<div
  class="min-h-screen bg-fubuki-bg text-fubuki-text flex flex-col font-sans selection:bg-fubuki-blue selection:text-fubuki-bg"
>
  <Navbar />

  <main class="grow max-w-5xl w-full mx-auto px-6 flex flex-col">
    <Router {routes} />
  </main>

  <Footer />
</div>
