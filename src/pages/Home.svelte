<script lang="ts">
  import { link } from "svelte-spa-router";
  import { Terminal, ExternalLink, FileText } from "lucide-svelte";
  import { APP_CONFIG } from "../lib/config";
  import { FEATURES, COMMANDS } from "../lib/data";
</script>

<div class="space-y-20 py-12">
  <!-- Hero section -->
  <section class="grid md:grid-cols-2 gap-12 items-center py-6">
    <!-- Text & CTA -->
    <div class="space-y-6 text-center md:text-left">
      <h1
        class="text-4xl sm:text-5xl font-extrabold text-fubuki-text tracking-tight leading-tight"
      >
        Bring Shirakami Fubuki to Your Community
      </h1>

      <p class="text-fubuki-muted text-base sm:text-lg leading-relaxed">
        {APP_CONFIG.description}
      </p>

      <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
        <a
          href={APP_CONFIG.discordInviteUrl}
          class="bg-fubuki-blue hover:bg-fubuki-blue-hover text-fubuki-bg font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-fubuki-blue/20 inline-flex items-center gap-2"
        >
          <span>Add to Discord</span>
          <ExternalLink size={18} />
        </a>
        <a
          href="/terms-of-service"
          use:link
          class="bg-fubuki-card hover:bg-fubuki-card-hover text-fubuki-text font-semibold px-6 py-3 rounded-xl transition-all border border-fubuki-border inline-flex items-center gap-2"
        >
          <FileText size={18} />
          <span>View Terms of Service</span>
        </a>
      </div>
    </div>

    <!-- Fubuki GIF -->
    <div class="flex justify-center">
      <div class="relative group">
        <!-- Glow effect -->
        <div
          class="absolute -inset-1 bg-linear-to-r from-fubuki-blue to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"
        ></div>

        <!-- GIF -->
        <img
          src="/assets/fubuki.gif"
          alt="Shirakami Fubuki"
          class="relative w-72 sm:w-80 md:w-full max-w-sm rounded-2xl border border-fubuki-border shadow-2xl object-cover"
        />
      </div>
    </div>
  </section>

  <!-- Feature grid -->
  <section class="grid md:grid-cols-3 gap-6">
    {#each FEATURES as feature}
      <div
        class="bg-fubuki-card/60 border border-fubuki-border p-6 rounded-2xl space-y-3"
      >
        <div
          class="p-2.5 w-fit rounded-lg bg-fubuki-border {feature.colorClass}"
        >
          <svelte:component this={feature.icon} size={22} />
        </div>
        <h3 class="text-lg font-bold text-fubuki-text">{feature.title}</h3>
        <p class="text-fubuki-muted text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    {/each}
  </section>

  <!-- Commands showcase -->
  <section
    class="bg-fubuki-card/40 border border-fubuki-border rounded-2xl p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center"
  >
    <!-- Fubuki GIF -->
    <div class="md:col-span-5 flex justify-center">
      <div class="relative group w-full max-w-xs">
        <!-- Glow effect -->
        <div
          class="absolute -inset-1 bg-linear-to-r from-fubuki-blue to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"
        ></div>
        <img
          src="/assets/idea.gif"
          alt="Fubuki Interactive"
          class="relative w-full rounded-xl border border-fubuki-border shadow-xl object-cover"
        />
      </div>
    </div>

    <!-- Command list -->
    <div class="md:col-span-7 space-y-6">
      <div class="flex items-center gap-3">
        <Terminal class="text-fubuki-blue" size={22} />
        <h2 class="text-xl font-bold text-fubuki-text">Available Commands</h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 text-sm">
        {#each COMMANDS as cmd}
          <div class="bg-fubuki-bg p-4 rounded-xl border border-fubuki-border">
            <code class="text-fubuki-blue font-mono font-bold">{cmd.name}</code>
            <p class="text-fubuki-muted text-xs mt-1">
              {cmd.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
