<template>
  <Form v-slot="{ meta }" as="div" class="lg:mx-52">
    <RedberryHeader :page="4" />
    <div class="mob:flex mob:flex-col mob:justify-center mob:w-full">
      <div class="lg:w-[30rem]">
        <p class="mt-8 mob:text-sm mob:text-center">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის.
        </p>
        <p class="mt-10 lg:text-sm mob:text-center">
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
      </div>
      <div class="flex">
        <div class="lg:w-[150rem]">
          <form>
            <div class="flex flex-col mt-10">
              <h1 class="font-extrabold lg:text-xl mb-3 mob:text-center">
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
              </h1>
              <div class="flex flex-col ml-5">
                <radio-input
                  name="non_formal_meetings"
                  value="twice_a_week"
                  label="კვირაში ორჯერ"
                />
                <radio-input
                  name="non_formal_meetings"
                  value="once_a_week"
                  label="კვირაში ერთხელ"
                />
                <radio-input
                  name="non_formal_meetings"
                  value="once_in_a_two_weeks"
                  label="ორ კვირაში ერთხელ"
                />
                <radio-input
                  name="non_formal_meetings"
                  value="once_in_a_month"
                  label="თვეში ერთხელ"
                />

                <ErrorMessage
                  class="ml-5 mt-1 text-[#F15524]"
                  name="non_formal_meetings"
                />
              </div>
            </div>
            <div class="flex flex-col mt-10">
              <h1 class="font-extrabold lg:text-xl mb-3 mob:text-center">
                კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
              </h1>
              <div class="flex flex-col ml-5">
                <radio-input
                  name="number_of_days_from_office"
                  value="0"
                  label="0"
                />
                <radio-input
                  name="number_of_days_from_office"
                  value="1"
                  label="1"
                />
                <radio-input
                  name="number_of_days_from_office"
                  value="2"
                  label="2"
                />
                <radio-input
                  name="number_of_days_from_office"
                  value="3"
                  label="3"
                />
                <radio-input
                  name="number_of_days_from_office"
                  value="4"
                  label="4"
                />
                <radio-input
                  name="number_of_days_from_office"
                  value="5"
                  label="5"
                />
                <ErrorMessage
                  class="ml-5 mt-1 text-[#F15524]"
                  name="number_of_days_from_office"
                />
              </div>
            </div>
            <div class="mob:w-full mob:flex mob:flex-col mob:items-center">
              <h1 class="font-extrabold lg:text-xl mb-3 mt-10 mob:text-center">
                რას ფიქრობ ფიზიკურ შეკრებებზე?
              </h1>

              <Field
                name="what_about_meetings_in_live"
                type="text"
                class="my-3 lg:w-[38rem] lg:h-[10rem] border-black border-2 mob:w-80 mob:h-24"
                :value="what_about_meetings_in_live"
                @input="
                  updateData('what_about_meetings_in_live', $event.target.value)
                "
              />
            </div>
            <div class="mob:w-full mob:flex mob:flex-col mob:items-center">
              <h1 class="font-extrabold lg:text-xl mb-3 mt-10 mob:text-center">
                რას ფიქრობ არსებულ გარემოზე:
                <h1>რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</h1>
              </h1>
              <Field
                name="tell_us_your_opinion_about_us"
                type="text"
                class="my-3 lg:w-[38rem] lg:h-[10rem] border-black border-2 mob:w-80 mob:h-24"
                :value="tell_us_your_opinion_about_us"
                @input="
                  updateData(
                    'tell_us_your_opinion_about_us',
                    $event.target.value
                  )
                "
              />
            </div>
            <div class="mt-10 flex justify-end w-[38rem] mob:-mx-72"></div>
          </form>
          <div class="flex justify-end">
            <button
              :class="
                !meta.valid
                  ? 'opacity-40 rounded-3xl text-white bg-[#208298] px-6 py-3'
                  : 'opacity-100 rounded-3xl text-white bg-[#208298] px-6 py-3'
              "
              :disabled="!meta.valid"
              @click="onSubmit"
            >
              დასრულება
            </button>
          </div>
        </div>
        <div class="lg:-mt-48 mob:hidden">
          <img width="2300" src="@/assets/images/rider.png" alt="img" />
        </div>
      </div>
    </div>
  </Form>
  <div class="flex justify-center mb-40 mt-40" type="submit">
    <left-button :back="back" />
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import { mapGetters, mapState } from "vuex";
import RadioInput from "@/UI/RadioInput.vue";
import LeftButton from "@/UI/LeftButton.vue";
import axios from "axios";
export default {
  components: {
    LeftButton,
    RedberryHeader,
    Form,
    Field,
    ErrorMessage,
    RadioInput,
  },
  methods: {
    back() {
      this.$router.push({ name: "third" });
      this.$store.state.count--;
    },
    onSubmit() {
      axios
        .post("https://covid19.devtest.ge/api/create", this.processedData)
        .then(() => this.$router.push({ name: "success" }))
        .catch((error) => console.log(error));
    },
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("updateField", {
        fieldName,
        updatedValue,
      });
    },
  },
  computed: {
    ...mapState([
      "what_about_meetings_in_live",
      "tell_us_your_opinion_about_us",
    ]),
    ...mapGetters(["processedData"]),
  },
};
</script>
