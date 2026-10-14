<script lang="ts">
  import { link } from "svelte-spa-router";
  import { ArrowLeft } from "lucide-svelte";
</script>

<div class="text-center my-auto py-12 space-y-6 max-w-md mx-auto">
  <!-- GIF animation -->
  <div class="w-48 h-48 sm:w-56 sm:h-56 mx-auto">
    <img
      src="/assets/confused.gif"
      alt="404 Not Found"
      class="w-full h-full object-contain rounded-2xl drop-shadow-md"
    />
  </div>

  <div class="space-y-2">
    <h1 class="text-6xl font-extrabold text-fubuki-blue tracking-tight">404</h1>
    <h2 class="text-xl font-bold text-fubuki-text">Page Not Found, Friend!</h2>
    <p class="text-fubuki-muted text-sm leading-relaxed">
      Looks like this page doesn't exist or has been moved.
    </p>
  </div>

  <a
    href="/"
    use:link
    class="inline-flex items-center gap-2 bg-fubuki-card hover:bg-fubuki-card-hover border border-fubuki-border text-fubuki-text font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
  >
    <ArrowLeft size={18} />
    <span>Back to Home</span>
  </a>
</div>
