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
          class="pl-4 pr-96 py-3 border-black border-2"
          type="text"
          placeholder="დდ/თთ/წწ"
          onfocus="(this.type = 'date')"
          v-model="this.$store.state.data.antibodies.test_date"
        />
      </div>
      <div class="mt-8">
        <Field
          name="number"
          class="pl-4 pr-96 py-3 border-black border-2"
          type="number"
          placeholder="ანტისხეულების რაოდენობა"
          v-model="this.$store.state.data.antibodies.number"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    ErrorMessage,
  },
};
</script>
