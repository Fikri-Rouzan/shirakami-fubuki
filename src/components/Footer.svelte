<script lang="ts">
  import { APP_CONFIG } from "../lib/config";
</script>

<footer
  class="border-t border-fubuki-border bg-fubuki-bg py-10 text-fubuki-muted text-sm mt-auto"
>
  <div
    class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4"
  >
    <!-- Logo -->
    <span class="text-fubuki-text"
      >© {new Date().getFullYear()} {APP_CONFIG.botName} Bot
    </span>

    <p class="text-xs text-fubuki-muted/60">Independent fan-made project.</p>
  </div>
</footer>
