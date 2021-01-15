<script>
  const href = "contact";

  function scroll(e) {
    e.preventDefault();
    document.getElementById(href).scrollIntoView({ behavior: "smooth" });
  }
</script>

<section class="flex flex-col justify-center p-0">
  <div class="content-width flex flex-col items-center">
    <h1 class="mb-4 text-7xl leading-snug text-center">
      Universal Contract Services
    </h1>
    <p class="text-3xl text-center">Contract services you can trust</p>
    <a
      on:click={scroll}
      href="#{href}"
      class="px-6 py-3 mt-4 bg-black rounded-md text-xl text-center">
      Request a quote
    </a>
    <img src="/img/header-wide.svg" alt="" />
  </div>
</section>

<style>
  .content-width {
    @apply pt-28;
  }

  img {
    max-height: 600px;
  }
  a {
    background: #ffd5cd;
  }
</style>
