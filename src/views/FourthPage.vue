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
                  type="radio"
                  rules="required"
                  value="twice_a_week"
                  @input="
                    updateData('non_formal_meetings', $event.target.value)
                  "
                />
                <label class="ml-5" for="non_formal_meetings"
                  >კვირაში ორჯერ</label
                >
              </div>
              <div>
                <Field
                  name="non_formal_meetings"
                  class="my-3 scale-125"
                  type="radio"
                  rules="required"
                  value="once_a_week"
                  @input="
                    updateData('non_formal_meetings', $event.target.value)
                  "
                />
                <label class="ml-5" for="non_formal_meetings"
                  >კვირაში ერთხელ</label
                >
              </div>
              <div>
                <Field
                  name="non_formal_meetings"
                  class="my-3 scale-125"
                  type="radio"
                  value="once_in_a_two_weeks"
                  @input="
                    updateData('non_formal_meetings', $event.target.value)
                  "
                />
                <label class="ml-5" for="non_formal_meetings"
                  >ორ კვირაში ერთხელ</label
                >
              </div>
              <div>
                <Field
                  name="non_formal_meetings"
                  class="my-3 scale-125"
                  type="radio"
                  rules="required"
                  value="once_in_a_month"
                  @input="
                    updateData('non_formal_meetings', $event.target.value)
                  "
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
                  value="0"
                  type="radio"
                  rules="required"
                  @input="
                    updateData(
                      'number_of_days_from_office',
                      $event.target.value
                    )
                  "
                />
                <label class="ml-5" for="number_of_days_from_office">0</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  value="1"
                  type="radio"
                  rules="required"
                  @input="
                    updateData(
                      'number_of_days_from_office',
                      $event.target.value
                    )
                  "
                />
                <label class="ml-5" for="number_of_days_from_office">1</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  value="2"
                  type="radio"
                  rules="required"
                  @input="
                    updateData(
                      'number_of_days_from_office',
                      $event.target.value
                    )
                  "
                />
                <label class="ml-5" for="number_of_days_from_office">2</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  value="3"
                  type="radio"
                  rules="required"
                  @input="
                    updateData(
                      'number_of_days_from_office',
                      $event.target.value
                    )
                  "
                />
                <label class="ml-5" for="number_of_days_from_office">3</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  value="4"
                  type="radio"
                  rules="required"
                  @input="
                    updateData(
                      'number_of_days_from_office',
                      $event.target.value
                    )
                  "
                />
                <label class="ml-5" for="number_of_days_from_office">4</label>
              </div>
              <div>
                <Field
                  name="number_of_days_from_office"
                  class="my-3 scale-125"
                  value="5"
                  type="radio"
                  rules="required"
                  @input="
                    updateData(
                      'number_of_days_from_office',
                      $event.target.value
                    )
                  "
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
              :value="what_about_meetings_in_live"
              @input="
                updateData('what_about_meetings_in_live', $event.target.value)
              "
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
              :value="tell_us_your_opinion_about_us"
              @input="
                updateData('tell_us_your_opinion_about_us', $event.target.value)
              "
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
import { mapState } from "vuex";
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
      this.$store.dispatch("updateField", {
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
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
      non_formal_meetings: (state) => state.data.non_formal_meetings,
      number_of_days_from_office: (state) => state.number_of_days_from_office,
      what_about_meetings_in_live: (state) => state.what_about_meetings_in_live,
      tell_us_your_opinion_about_us: (state) =>
        state.tell_us_your_opinion_about_us,
    }),
  },
};
</script>
