<script lang="ts">
  import { PRIVACY_SECTIONS } from "../lib/data";
</script>

<div class="max-w-3xl mx-auto py-12 space-y-8 text-fubuki-muted">
  <header class="border-b border-fubuki-border pb-6">
    <h1 class="text-3xl font-extrabold text-fubuki-text">Privacy Policy</h1>
  </header>

  <div class="space-y-6 text-sm leading-relaxed">
    {#each PRIVACY_SECTIONS as section}
      <section class="space-y-2">
        <h2 class="text-lg font-bold text-fubuki-text">{section.title}</h2>

        {#if section.codeHighlight}
          <p>
            {section.content.split(section.codeHighlight)[0]}
            <code class="text-fubuki-blue font-mono"
              >{section.codeHighlight}</code
            >
            {section.content.split(section.codeHighlight)[1]}
          </p>
        {:else}
          <p>{section.content}</p>
        {/if}

        {#if section.items}
          <ul class="list-disc list-inside space-y-1 pl-2">
            {#each section.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/if}
      </section>
    {/each}
  </div>
</div>
