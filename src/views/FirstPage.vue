<script>
import { Form } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import BasicInput from "@/UI/BasicInput.vue";
import RightButton from "@/UI/RightButton.vue";
import { mapState } from "vuex";
export default {
  components: {
    RedberryHeader,
    Form,
    BasicInput,
    RightButton,
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "second" });
    },
  },
  computed: {
    ...mapState("dataModule", ["data"]),
  },

  data() {
    return {
      options: [
        {
          id: "first_name",
          name: "first_name",
          type: "text",
          value: this.first_name,
          rules: "required|min:2",
          placeholder: "იოსებ",
          label: "სახელი*",
        },
        {
          id: "last_name",
          name: "last_name",
          type: "text",
          value: this.last_name,
          rules: "required|min:2",
          placeholder: "ჯუღაშვილი",
          label: "გვარი*",
        },
        {
          id: "email",
          name: "email",
          type: "text",
          value: this.email,
          rules: "required|redberry",
          placeholder: "fbi@redberry.ge",
          label: "მეილი*",
        },
      ],
    };
  },
};
</script>
<template>
  <Form as="div" class="lg:mx-52" v-slot="{ meta }">
    <RedberryHeader :page="1" />
    <div class="mt-10 flex">
      <form>
        <basic-input
          :key="option.id"
          v-for="option in options"
          :name="option.name"
          :type="option.type"
          :value="option.value"
          :rules="option.rules"
          :placeholder="option.placeholder"
          :label="option.label"
        />
        <footer class="lg:mt-32 text-[#623123] lg:mr-72 mob:mt-20 mob:mx-10">
          <div class="border-black border-b-2"></div>
          <p class="mt-7 text-lg">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </footer>
      </form>
      <div class="mob:hidden">
        <img width="700" src="@/components/images/human.png" alt="img" />
      </div>
    </div>
    <div class="flex justify-center lg:mb-32 mob:my-10">
      <right-button
        :onClick="onSubmit"
        :isDisabled="!meta.valid"
        :class="!meta.valid ? 'opacity-40' : 'opacity-100'"
      />
    </div>
  </Form>
</template>
