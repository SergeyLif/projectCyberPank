export function formModule() {
  let form = document.forms["form"];
  let attachFiles = form["files"];
  let labelForfiles = document.querySelector("#screenshots");
  let originalContent = labelForfiles.innerHTML; // сохраняем контент перед событием

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let currentTarget = event.target;

    let name = currentTarget["name"].value;
    let email = currentTarget["email"].value;
    let files = currentTarget["files"].files.length;
    let agreementCheckbox = currentTarget["agreement"].checked;

    let result = `
    Ваше имя: ${name}
    Ваш email: ${email}
    Вы прикрепили: ${files} файл
  `;

    if (name && email.includes("@") && agreementCheckbox) {
      alert(result);
      form.reset();
      labelForfiles.innerHTML = originalContent; // Очистка формы после успешной отправки
    } else {
      alert("Пожалуйста заполните все поля");
    }
  });

  attachFiles.addEventListener("change", function (event) {
    let documents = event.target.files;
    let allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (documents.length !== 0) {
      labelForfiles.textContent = "";
      for (let i = 0; i < documents.length; i++) {
        let currentDocument = documents[i];

        if (!allowedTypes.includes(currentDocument.type)) {
          alert("Type of file is not available");
          continue; // Пропускаем этот файл и продолжаем цикл
        }

        let filesBox = document.createElement("div");
        filesBox.insertAdjacentHTML(
          "afterbegin",
          `<span>${currentDocument.name} </span>`
        );
        filesBox.className = "competition__files-box";
        let removeButton = document.createElement("button");
        removeButton.className = "competition_remove-button";
        removeButton.textContent = "[x]";
        removeButton.onclick = () => filesBox.remove();
        filesBox.append(removeButton);
        labelForfiles.append(filesBox);
      }
    } else {
      labelForfiles.innerHTML = originalContent;
    }
  });
}
