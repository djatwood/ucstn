<section id="contact" class="flex flex-col justify-center">
  <div class="content-width">
    <h2>Request a quote</h2>

    <div class="grid gap-8 lg:grid-cols-2">
      <form class="flex flex-col lg:row-span-2" netlify>
        <label>Full Name <input type="text" name="name" /> </label>
        <label>Email <input type="email" name="email" /> </label>
        <label>Message <textarea name="message" cols="30" rows="10" /> </label>
        <input class="submit border-0" type="submit" value="Submit" />
      </form>

      <div>
        <h3 class="text-2xl text-gray-800 font-bold mb-2">About us</h3>
        <p>
          Universal Contract Services is a Minority Owned Independent Supplier
          of goods based in Middle Tennessee seeking to provide Paper Products
          to Correctional Facilities, and Federal, State, and City Governments
          as well as Medical Centers. Our #1 priority is to provide courteous,
          professional services with competitive prices. With over 20 years of
          combined sales and government procurement experience we are sure our
          customers have selected the best choice to purchase their goods from
          Universal Contract Service. Please feel free to Request a Quote, we
          would love to have your business.
        </p>
      </div>

      <div class="flex justify-end items-end">
        <a class="flex justify-end" href="dbe.pdf" target="_blank">
          <img
            class="dbe-seal"
            src="/img/dbe-seal.png"
            alt="We are a certified Minority Owned Business"
          />
        </a>
      </div>
    </div>
  </div>
</section>

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
