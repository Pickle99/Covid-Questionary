<template>
  <div class="lg:mx-52">
    <RedberryHeader />
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
          <Form @submit="onSubmit" id="form">
            <div class="flex flex-col mt-10">
              <h1 class="font-extrabold lg:text-xl mb-3 mob:text-center">
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
              </h1>
              <div class="flex flex-col ml-5">
                <radio-input
                  :key="option.id"
                  v-for="option in options"
                  :name="option.name"
                  :value="option.value"
                  :label="option.label"
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
                  :key="optionSecond.id"
                  v-for="optionSecond in optionsAnother"
                  :name="optionSecond.name"
                  :value="optionSecond.value"
                  :label="optionSecond.label"
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
                :value="data.what_about_meetings_in_live"
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
                :value="data.tell_us_your_opinion_about_us"
                @input="
                  updateData(
                    'tell_us_your_opinion_about_us',
                    $event.target.value
                  )
                "
              />
            </div>
            <div class="mt-10 flex justify-end w-[38rem] mob:-mx-72">
              <button
                class="rounded-3xl text-white bg-[#208298] px-6 py-3"
                type="submit"
              >
                დასრულება
              </button>
            </div>
          </Form>
        </div>
        <div class="lg:-mt-48 mob:hidden">
          <img width="2300" src="@/components/images/rider.png" alt="img" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mb-40 mt-40" type="submit">
    <button @click="back">
      <img src="@/components/images/left.png" />
    </button>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
import { mapState } from "vuex";
import RadioInput from "@/UI/RadioInput.vue";
export default {
  methods: {
    back() {
      this.$router.push({ name: "third" });
      this.$store.state.count--;
    },
    onSubmit() {
      this.$router.push({ name: "success" });
    },
    updateData(fieldName, updatedValue) {
      this.$store.dispatch("dataModule/updateField", {
        data: this.data,
        fieldName,
        updatedValue,
      });
    },
  },
  components: {
    RedberryHeader,
    Form,
    Field,
    ErrorMessage,
    RadioInput,
  },
  computed: {
    ...mapState("dataModule", ["data"]),
  },
  data() {
    return {
      options: [
        {
          id: "1",
          name: "non_formal_meetings",
          value: "twice_a_week",
          label: "კვირაში ორჯერ",
        },
        {
          id: "2",
          name: "non_formal_meetings",
          value: "once_a_week",
          label: "კვირაში ერთხელ",
        },
        {
          id: "3",
          name: "non_formal_meetings",
          value: "once_in_a_two_weeks",
          label: "ორ კვირაში ერთხელ",
        },
        {
          id: "4",
          name: "non_formal_meetings",
          value: "once_in_a_month",
          label: "თვეში ერთხელ",
        },
      ],
      optionsAnother: [
        {
          id: "1",
          name: "number_of_days_from_office",
          value: "0",
          label: "0",
        },
        {
          id: "2",
          name: "number_of_days_from_office",
          value: "1",
          label: "1",
        },
        {
          id: "3",
          name: "number_of_days_from_office",
          value: "2",
          label: "2",
        },
        {
          id: "4",
          name: "number_of_days_from_office",
          value: "3",
          label: "3",
        },
        {
          id: "5",
          name: "number_of_days_from_office",
          value: "4",
          label: "4",
        },
        {
          id: "6",
          name: "number_of_days_from_office",
          value: "5",
          label: "5",
        },
      ],
    };
  },
};
</script>
