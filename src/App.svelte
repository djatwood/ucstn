<script>
  import Header from "./sections/header.svelte";
  import About from "./sections/about.svelte";
  import Products from "./sections/products.svelte";
  import Contact from "./sections/contact.svelte";
  import Footer from "./sections/footer.svelte";

  export let services;
</script>

<div class="bg-gray-50">
  <Header />
  <About />
  <Products {services} />
  <Contact />
  <Footer />
</div>

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
    @apply text-5xl;
  }

  section {
    @apply py-12;
  }
  .content-width {
    @apply w-full max-w-screen-2xl px-12 mx-auto box-border;
  }

  p {
    @apply text-lg text-gray-700 mb-3;
  }
  p:last-of-type {
    @apply mb-0;
  }
</style>
