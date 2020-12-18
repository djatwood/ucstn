<script>
  export let services;
</script>

<section class="min-h-screen flex flex-col justify-center">
  <div class="content-width">
    <h2>Services</h2>

    <div class="grid grid-cols-4 gap-4">
      {#each services as { name, services }}
        <div class="p-6 bg-gray-200 rounded-md">
          <p>{name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
