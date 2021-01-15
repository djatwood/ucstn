<script>
  const href = "contact";

  function scroll(e) {
    e.preventDefault();
    document.getElementById(href).scrollIntoView({ behavior: "smooth" });
  }
</script>

<section class="flex flex-col justify-center p-0 overflow-hidden">
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
    <img
      class="relative mt-8 mb-20 w-screen max-w-none sm:max-w-full"
      src="/img/header-wide.svg"
      alt=""
    />
  </div>
</section>

<style>
  .content-width {
    @apply pt-28;
  }

  img {
    max-height: 500px;
    width: 120vw;
  }
  a {
    background: #90ee90;
  }
</style>
