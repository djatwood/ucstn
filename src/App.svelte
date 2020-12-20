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

  body {
    font-family: "Noto Sans JP", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-gray-800 font-bold;
    font-family: "Roboto", sans-serif;
  }
  h2 {
    @apply text-5xl  mb-6;
  }

  section {
    @apply py-12;
  }
  .content-width {
    @apply w-full max-w-screen-2xl p-12 mx-auto box-border;
  }

  p {
    @apply text-lg text-gray-700;
  }
  p:not(:last-child) {
    @apply mb-3;
  }
</style>

<main class="bg-gray-50">
  <Header />
  <Services {services} />
  <Contact />
</main>
