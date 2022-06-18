<template>
  <div class="mx-52">
    <RedberryHeader />
    <div class="w-[30rem]">
      <p class="mt-8">
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის.
      </p>
      <p class="mt-10">
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
        ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
    </div>
    <div class="flex">
      <div class="w-[150rem]">
        <Form @submit="onSubmit" id="form">
          <div class="flex flex-col mt-10">
            <h1 class="font-extrabold text-xl mb-3">
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
              შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
            </h1>
            <div class="flex flex-col ml-5">
              <div class="flex items-center">
                <Field
                  name="non_formal_meetings"
                  class="scale-125"
                  value="twice_a_week"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.non_formal_meetings"
                />
                <label class="ml-5" for="non_formal_meetings"
                  >კვირაში ორჯერ</label
                >
              </div>
              <div>
                <Field
                  name="non_formal_meetings"
                  class="my-3 scale-125"
                  value="once_a_week"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.non_formal_meetings"
                />
                <label class="ml-5" for="non_formal_meetings"
                  >კვირაში ერთხელ</label
                >
              </div>
              <div>
                <Field
                  name="non_formal_meetings"
                  class="my-3 scale-125"
                  value="once_in_a_two_weeks"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.non_formal_meetings"
                />
                <label class="ml-5" for="non_formal_meetings"
                  >ორ კვირაში ერთხელ</label
                >
              </div>
              <div>
                <Field
                  name="non_formal_meetings"
                  class="my-3 scale-125"
                  value="once_in_a_month"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.non_formal_meetings"
                />
                <label class="ml-5" for="non_formal_meetings"
                  >თვეში ერთხელ</label
                >
              </div>
              <ErrorMessage
                class="ml-5 mt-1 text-[#F15524]"
                name="non_formal_meetings"
              />
            </div>
          </div>
          <div class="flex flex-col mt-10">
            <h1 class="font-extrabold text-xl mb-3">
              კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
            </h1>
            <div class="flex flex-col ml-5">
              <div class="flex items-center">
                <Field
                  name="number_of_days_from_office"
                  class="scale-125"
                  v-bind:value="0"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.number_of_days_from_office"
                />
                <label class="ml-5" for="number_of_days_from_office">0</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  v-bind:value="1"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.number_of_days_from_office"
                />
                <label class="ml-5" for="number_of_days_from_office">1</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  v-bind:value="2"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.number_of_days_from_office"
                />
                <label class="ml-5" for="number_of_days_from_office">2</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  v-bind:value="3"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.number_of_days_from_office"
                />
                <label class="ml-5" for="number_of_days_from_office">3</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  v-bind:value="4"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.number_of_days_from_office"
                />
                <label class="ml-5" for="number_of_days_from_office">4</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  v-bind:value="5"
                  type="radio"
                  rules="required"
                  v-model="this.$store.state.data.number_of_days_from_office"
                />
                <label class="ml-5" for="number_of_days_from_office">5</label>
              </div>
              <ErrorMessage
                class="ml-5 mt-1 text-[#F15524]"
                name="number_of_days_from_office"
              />
            </div>
          </div>
          <div>
            <h1 class="font-extrabold text-xl mb-3 mt-10">
              რას ფიქრობ ფიზიკურ შეკრებებზე?
            </h1>

            <Field
              name="what_about_meetings_in_live"
              type="text"
              class="my-3 w-[38rem] h-[10rem] border-black border-2"
              v-model="this.$store.state.data.what_about_meetings_in_live"
            />
          </div>
          <div>
            <h1 class="font-extrabold text-xl mb-3 mt-10">
              რას ფიქრობ არსებულ გარემოზე:
              <h1>რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</h1>
            </h1>
            <Field
              name="tell_us_your_opinion_about_us"
              type="text"
              class="my-3 w-[38rem] h-[10rem] border-black border-2"
              v-model="this.$store.state.data.tell_us_your_opinion_about_us"
            />
          </div>
          <div class="mt-10 flex justify-end w-[38rem]">
            <button
              class="rounded-3xl text-white bg-[#208298] px-6 py-3"
              type="submit"
            >
              დასრულება
            </button>
          </div>
        </Form>
      </div>
      <div class="-mt-48">
        <img width="2300" src="../components/images/rider.png" alt="img" />
      </div>
    </div>
  </div>
  <div class="flex justify-center mb-40 mt-40" type="submit">
    <input
      type="image"
      @click="back"
      src="src/components/images/left.png"
      alt="img"
    />
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RedberryHeader from "@/components/RedberryHeader.vue";
export default {
  methods: {
    back() {
      this.$router.push({ name: "third" });
      this.$store.state.count--;
    },
    onSubmit(values) {
      console.log(values, null, 2);
      this.$router.push({ name: "success" });
    },
  },
  components: {
    RedberryHeader,
    Form,
    Field,
    ErrorMessage,
  },
};
</script>
