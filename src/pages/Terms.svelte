<script lang="ts">
  import { TERMS_SECTIONS } from "../lib/data";
</script>

<div class="max-w-3xl mx-auto py-12 space-y-8 text-fubuki-muted">
  <header class="border-b border-fubuki-border pb-6">
    <h1 class="text-3xl font-extrabold text-fubuki-text">Terms of Service</h1>
  </header>

  <div class="space-y-6 text-sm leading-relaxed">
    {#each TERMS_SECTIONS as section}
      <section class="space-y-2">
        <h2 class="text-lg font-bold text-fubuki-text">{section.title}</h2>
        <p>{section.content}</p>
      </section>
    {/each}
  </div>
</div>
