import { defineRule } from "vee-validate"; // npm install vee-validate --save
import { required, email, min } from "@vee-validate/rules"; // npm install @vee-validate/rules

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

defineRule("redberry", (value) => {
  if (!value.endsWith("@redberry.ge")) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
