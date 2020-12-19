<script>
  import {
    ShieldIcon,
    ChevronUpIcon,
    ChevronDownIcon,
  } from "svelte-feather-icons";
  import { scale } from "svelte/transition";

  export let services;

  let servicesIsOpen = false;
</script>

<section class="flex flex-col justify-center py-20 px-32">
  <div class="content-width">
    <h2 class="text-5xl text-gray-800 font-bold mb-6">Services</h2>

    <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {#each services as { name, color, services }}
        <div
          class="flex flex-col justify-between px-10 py-6 rounded-md"
          style="background:#{color}">
          <ShieldIcon size="40" />
          <h3 class="text-2xl my-2 font-bold">{name}</h3>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat nibh id massa molestie tincidunt.
          </p>
        </div>
      {/each}
    </div>
    <div class="mt-10 flex justify-center">
      <button
        class="flex items-center"
        on:click={() => (servicesIsOpen = !servicesIsOpen)}>
        {#if servicesIsOpen}
          <ChevronUpIcon size="20" />
        {:else}
          <ChevronDownIcon size="20" />
        {/if}
        See details
      </button>
    </div>
    {#if servicesIsOpen}
      <div
        class="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mt-4"
        transition:scale={{ start: 0.9 }}>
        {#each services as { name, services }}
          <div>
            <h3 class="mb-2 font-bold text-lg text-gray-700">{name}</h3>
            <ul class="text-gray-600">
              {#each services as service}
                <li>{service}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
