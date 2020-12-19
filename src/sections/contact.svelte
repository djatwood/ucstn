<style lang="postcss">
  label {
    @apply flex flex-col text-lg mb-4 text-gray-700;
  }
  input,
  textarea {
    @apply px-4 py-2 border border-gray-200 mt-1 text-lg rounded-md;
  }
</style>

<section class="flex flex-col justify-center">
  <div class="content-width">
    <h2 class="text-5xl text-gray-800 font-bold mb-6">Request a quote</h2>

    <div class="grid gap-8 lg:grid-cols-2">
      <form class="flex flex-col lg:row-span-2" action="">
        <label>Full Name <input type="text" name="name" /> </label>
        <label>Email <input type="email" name="email" /> </label>
        <label>Message <textarea name="message" cols="30" rows="10" /> </label>
        <input type="submit" value="Submit" />
      </form>

      <div>
        <h3 class="text-2xl text-gray-800 font-bold mb-2">Extra Information</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
          enim sapien. Maecenas aliquam sodales tempus. Mauris eget cursus
          neque, nec interdum risus. Praesent pretium varius lacinia. Sed metus
          elit, hendrerit vitae consectetur sit amet, dapibus ut quam. Curabitur
          sit amet ligula porttitor, ornare ante non, molestie nisl. Proin lorem
          ipsum, egestas in pulvinar in, faucibus vitae justo.
        </p>
      </div>

      <div>
        <img
          class="w-full h-full object-cover object-center"
          src="https://via.placeholder.com/950x500"
          alt="" />
      </div>
    </div>
  </div>
</section>
