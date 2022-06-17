<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { setLocale } from "@vee-validate/i18n";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log(values, null, 2);
      this.$router.push({ name: "second" });
    },
  },
};
setLocale("ka");
</script>

<template>
  <div class="mx-52">
    <div class="flex justify-between mt-20 p-2">
      <img to="/1" src="../components/images/redberry.png" alt="img" />

      <p class="font-extrabold text-3xl">1/4</p>
    </div>
    <div class="mt-2 border-black border-b-2"></div>
    <div class="mt-10 flex">
      <Form @submit="onSubmit">
        <div class="flex flex-col w-[33rem]">
          <label for="first_name" class="font-extrabold text-xl mb-3"
            >სახელი*</label
          >
          <Field
            class="border-2 border-black px-4 py-2"
            name="first_name"
            type="first_name"
            v-model="this.$store.state.first_name"
            rules="required|min:2"
            placeholder="იოსებ"
          />
          <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="first_name" />
        </div>
        <div class="flex flex-col my-10 w-[33rem]">
          <label for="გვარი" class="font-extrabold text-xl mb-3">გვარი*</label>
          <Field
            class="border-2 border-black px-4 py-2"
            name="last_name"
            type="last_name"
            v-model="this.$store.state.last_name"
            rules="required|min:2"
            placeholder="ჯუღაშვილი"
          />
          <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="last_name" />
        </div>
        <div class="flex flex-col w-[33rem]">
          <label for="email" class="font-extrabold text-xl mb-3">მეილი*</label>
          <Field
            class="border-2 border-black px-4 py-2"
            name="email"
            type="email"
            v-model="this.$store.state.email"
            rules="required|email|redberry"
            placeholder="fbi@redberry.ge"
          />
          <ErrorMessage class="ml-5 mt-1 text-[#F15524]" name="email" />
        </div>
        <footer class="mt-32 text-[#623123] mr-72">
          <div class="border-black border-b-2"></div>
          <p class="mt-7 text-lg">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </footer>
        <div class="flex justify-center mt-40 flex justify-center">
          <button>
            <img src="../components/images/right.png" alt="img" />
          </button>
        </div>
      </Form>

      <div>
        <img src="../components/images/human.png" alt="img" />
      </div>
    </div>
  </div>
</template>
