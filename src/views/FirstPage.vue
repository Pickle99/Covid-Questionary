<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import { mapState } from "vuex";
export default {
  components: {
    RedberryHeader,
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    onSubmit() {
      this.$store.state.count++;
      this.$router.push({ name: "second" });
    },
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      first_name: (state) => state.data.first_name,
      last_name: (state) => state.data.last_name,
      email: (state) => state.data.email,
    }),
  },
};
</script>
<template>
  <div class="mx-52">
    <RedberryHeader />
    <div class="mt-10 flex">
      <Form @submit="onSubmit" id="form">
        <div class="flex flex-col w-[33rem]">
          <label for="first_name" class="font-extrabold text-xl mb-3"
            >სახელი*</label
          >
          <Field
            class="border-2 border-black px-4 py-2"
            name="first_name"
            type="first_name"
            :value="first_name"
            @input="updateData('first_name', $event.target.value)"
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
            :value="last_name"
            @input="updateData('last_name', $event.target.value)"
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
            :value="email"
            @input="updateData('email', $event.target.value)"
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
      </Form>

      <div>
        <img width="700" src="../components/images/human.png" alt="img" />
      </div>
    </div>
    <div class="flex justify-center mb-32" type="submit">
      <input
        class="mx-40"
        type="image"
        form="form"
        src="src/components/images/right.png"
        alt="img"
      />
    </div>
  </div>
</template>
