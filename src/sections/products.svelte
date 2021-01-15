<script>
  import { ChevronUpIcon, ChevronDownIcon } from "svelte-feather-icons";
  import { scale } from "svelte/transition";

  export let services;

  let servicesIsOpen = false;
</script>

<section class="flex flex-col justify-center">
  <div class="content-width">
    <h2>Products</h2>

    <div class="product-grid">
      {#each services as { name, img }}
        <div
          class="flex flex-col justify-center items-center px-10 py-8 rounded-md text-center cursor-pointer"
          style="background:#90ee90"
          on:click={() => (servicesIsOpen = !servicesIsOpen)}
        >
          <img class="icon w-9/12" src="/img/{img}" alt={name} />
          <h3 class="text-3xl my-2 font-bold">{name}</h3>
        </div>
      {/each}
    </div>
    <div class="my-6 flex justify-center">
      <button
        class="flex items-center"
        on:click={() => (servicesIsOpen = !servicesIsOpen)}>
        {#if servicesIsOpen}
          <ChevronUpIcon size="20" />
        {:else}
          <ChevronDownIcon size="20" />
        {/if}
        Click to
        {servicesIsOpen ? "close" : "view"}
        all products
      </button>
    </div>
    {#if servicesIsOpen}
      <div class="product-grid mt-4" transition:scale={{ start: 0.9 }}>
        {#each services as { name, services }}
          <div class="px-8">
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

<style lang="postcss">
  .product-grid {
    @apply grid gap-8 sm:grid-cols-2 lg:grid-cols-4;
  }

  .icon {
    max-width: 150px;
  }
</style>
