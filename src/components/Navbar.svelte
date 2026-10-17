<script lang="ts">
  import { readable } from "svelte/store";
  import { link } from "svelte-spa-router";
  import { Menu, X, ExternalLink } from "lucide-svelte";
  import { APP_CONFIG } from "../lib/config";
  import { NAV_LINKS } from "../lib/routes";

  let isMobileMenuOpen = false;

  const currentPath = readable(
    window.location.hash.replace(/^#/, "") || "/",
    (set) => {
      const update = () => set(window.location.hash.replace(/^#/, "") || "/");
      window.addEventListener("hashchange", update);
      return () => window.removeEventListener("hashchange", update);
    },
  );

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMenu() {
    isMobileMenuOpen = false;
  }
</script>

<header
  class="sticky top-0 z-50 bg-fubuki-bg/80 backdrop-blur-md border-b border-fubuki-border"
>
  <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
    <a
      href="/"
      use:link
      on:click={closeMenu}
      class="text-fubuki-text font-extrabold text-lg tracking-tight hover:text-fubuki-blue transition-colors"
    >
      {APP_CONFIG.botName}
    </a>

    <!-- Desktop menu -->
    <nav class="hidden md:flex items-center gap-8">
      {#each NAV_LINKS as nav}
        <a
          href={nav.href}
          use:link
          class="text-sm transition-colors {$currentPath === nav.href
            ? 'text-fubuki-blue font-bold'
            : 'text-fubuki-muted font-medium hover:text-fubuki-text'}"
        >
          {nav.label}
        </a>
      {/each}

      <a
        href={APP_CONFIG.discordInviteUrl}
        class="bg-fubuki-blue hover:bg-fubuki-blue-hover text-fubuki-bg font-bold text-sm px-4 py-2 rounded-lg transition-all inline-flex items-center gap-2"
      >
        <span>Add to Discord</span>
        <ExternalLink size={14} />
      </a>
    </nav>

    <!-- Mobile hamburger toggle button -->
    <button
      on:click={toggleMenu}
      aria-label="Toggle Menu"
      class="md:hidden text-fubuki-muted hover:text-fubuki-text p-2 rounded-lg focus:outline-none cursor-pointer"
    >
      {#if isMobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  <!-- Mobile menu -->
  {#if isMobileMenuOpen}
    <div
      class="md:hidden fixed inset-x-0 top-16 bg-fubuki-card/95 backdrop-blur-xl border-b border-fubuki-border p-6 shadow-2xl z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {#each NAV_LINKS as nav}
        <a
          href={nav.href}
          use:link
          on:click={closeMenu}
          class="text-base font-semibold py-2 border-b border-fubuki-border/50 transition-colors {$currentPath ===
          nav.href
            ? 'text-fubuki-blue'
            : 'text-fubuki-text'}"
        >
          {nav.mobileLabel}
        </a>
      {/each}

      <a
        href={APP_CONFIG.discordInviteUrl}
        on:click={closeMenu}
        class="bg-fubuki-blue hover:bg-fubuki-blue-hover text-fubuki-bg font-bold text-center py-3 rounded-lg transition-colors mt-2 inline-flex items-center justify-center gap-2"
      >
        <span>Add to Discord</span>
        <ExternalLink size={16} />
      </a>
    </div>
  {/if}
</header>
