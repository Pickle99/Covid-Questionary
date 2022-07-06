<template>
  <div class="mt-10">
    <h1 class="font-extrabold text-xl mb-3">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
      რაოდენობა*
    </h1>
    <div class="ml-5 mt-6">
      <div>
        <Field
          name="test_date"
          class="pl-4 lg:w-[33rem] py-3 border-black border-2 mob:w-72"
          type="date"
          placeholder="დდ/თთ/წწ"
          :value="antibodies.test_date"
          @input="updateData('test_date', $event.target.value)"
        />
      </div>
      <div class="mt-8">
        <Field
          name="number"
          class="pl-4 lg:w-[33rem] py-3 border-black border-2 mob:w-72"
          type="number"
          placeholder="ანტისხეულების რაოდენობა"
          :value="antibodies.number"
          @input="updateData('number', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import { mapState } from "vuex";
export default {
  components: {
    Field,
    ErrorMessage,
  },
  methods: {
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("formData/updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
  computed: {
    ...mapState("formData", ["antibodies"]),
  },
};
</script>
