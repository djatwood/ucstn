<script>
  import Header from "./sections/header.svelte";
  import Services from "./sections/services.svelte";
  import Contact from "./sections/contact.svelte";

  export let services;
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .content-width {
    @apply w-full max-w-screen-2xl p-12 mx-auto box-border;
  }
</style>

<main class="bg-gray-50">
  <Header />
  <Services {services} />
  <Contact />
</main>
