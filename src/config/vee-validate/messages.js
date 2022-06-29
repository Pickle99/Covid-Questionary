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
        covid_sickness_date: "Covid Sickness Date",
        had_vaccine: "Had vaccine",
        vaccination_stage: "Vaccination stage",
        non_formal_meetings: "Non formal meetings",
        number_of_days_from_office: "Number of days from office",
        i_am_waiting: "What are you waiting for",
      },
      messages: {
        required: "The {field} field is required",
        min: "The {field} must contain at least 0:{min} symbols",
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
        covid_sickness_date: "კოვიდით ინფიცირების თარიღი",
        had_vaccine: "ხართ თუ არა ვაქცინირებული",
        vaccination_stage: "ვაქცინაციის ეტაპი",
        non_formal_meetings: "არა ფორმალური შეხვედრები",
        number_of_days_from_office: "ოფისიდან მუშაობის დღეები",
        i_am_waiting: "რაც ელოდები",
      },
      messages: {
        required: "{field}ს ველი სავალდებულოა",
        min: "{field}ს ველი უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან",
        email: "თქვენ მიერ შეყვანილი {field} არასწორია",
      },
    },
  }),
});
