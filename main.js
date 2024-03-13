import { backgroundModule } from "./src/js/background.js";
import { formModule } from "./src/js/form.js";

function main() {
  window.addEventListener("DOMContentLoaded", () => {
    backgroundModule();
    formModule();
  });
}

main();
