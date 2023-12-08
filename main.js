import { backgroundModule } from "./js/background.js";
import { formModule } from "./js/form.js";

function main() {
  window.addEventListener("DOMContentLoaded", () => {
    backgroundModule();
    formModule();
  });
}

main();
