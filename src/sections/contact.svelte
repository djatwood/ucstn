<section id="contact" class="flex flex-col justify-center">
  <div class="content-width">
    <h2 class="mb-2">Request a quote</h2>
    <p>
      Or give us a call at <a class="hover:underline" href="tel:(615) 227-1594"
        >(615) 227-1594</a
      >
    </p>

    <div class="grid gap-8 lg:grid-cols-2 mt-4">
      <div>
        <form class="flex flex-col" method="POST">
          <label>Full Name <input type="text" name="name" /></label>
          <label>Email <input type="email" name="email" /></label>
          <label>Message <textarea name="message" cols="30" rows="10" /></label>
          <input type="hidden" name="form-name" value="Contact" />
          <input class="submit" type="submit" value="Submit" />
        </form>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <a href="dbe.pdf" target="_blank">
            <img
              class="dbe-seal"
              src="/img/dbe-seal.png"
              alt="We are a certified Minority Owned Business"
            />
          </a>
        </div>

        <div class="w-full h-72 lg:h-full mt-12 bg-gray-300 rounded" />
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
    background: #90ee90;
  }

  .dbe-seal {
    max-width: 150px;
  }
</style>
