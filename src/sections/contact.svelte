<style lang="postcss">
  label {
    @apply flex flex-col text-lg mb-4 text-gray-700;
  }
  input,
  textarea {
    @apply w-full px-4 py-2 border border-gray-200 mt-1 text-lg rounded-md;
  }

  .submit {
    background: #ffd5cd;
  }

  .dbe-seal {
    max-width: 150px;
  }
</style>

<section class="flex flex-col justify-center">
  <div class="content-width">
    <h2>Request a quote</h2>

    <div class="grid gap-8 lg:grid-cols-2">
      <form class="flex flex-col lg:row-span-2" action="">
        <label>Full Name <input type="text" name="name" /> </label>
        <label>Email <input type="email" name="email" /> </label>
        <label>Message <textarea name="message" cols="30" rows="10" /> </label>
        <input class="submit border-0" type="submit" value="Submit" />
      </form>

      <div>
        <h3 class="text-2xl text-gray-800 font-bold mb-2">About us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          enim sapien. Maecenas aliquam sodales tempus. Mauris eget cursus
          neque, nec interdum risus. Praesent pretium varius lacinia. Sed metus
          elit, hendrerit vitae consectetur sit amet, dapibus ut quam. Curabitur
          sit amet ligula porttitor, ornare ante non, molestie nisl. Proin lorem
          ipsum, egestas in pulvinar in, faucibus vitae justo.
        </p>
      </div>

      <div class="flex justify-end items-end">
        <a class="flex justify-end" href="dbe.pdf" target="_blank">
          <img
            class="dbe-seal"
            src="/img/dbe-seal.png"
            alt="We are a certified Minority Owned Business" />
        </a>
        <!-- <img
          class="w-full h-full object-cover object-center"
          src="/img/extra-wide.svg"
          alt="" /> -->
      </div>
    </div>
  </div>
</section>
