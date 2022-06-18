import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize({
    en: {
      names: {
        first_name: "First name",
        last_name: "Last name",
        email: "Email",
        had_covid: "Had Covid",
        had_antibody_test: "Had Antibody Test",
        test_date: "Test date",
      },
      messages: {
        required: "The {field} field is required",
        min: "The {field} must contain at least 2 symbols",
        email: "The {field} field must be email format",
      },
    },
    ka: {
      names: {
        first_name: "სახელი",
        last_name: "გვარი",
        email: "მეილი",
        had_covid: "კოვიდი",
        had_antibody_test: "ანტისხეულების ტესტი",
        test_date: "ტესტირების თარიღი",
      },
      messages: {
        required: "{field}ს ველი სავალდებულოა",
        min: "{field}ს ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან",
        email: "თქვენ მიერ შეყვანილი {field} არასწორია",
      },
    },
  }),
});
