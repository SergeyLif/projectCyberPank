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
    labelForfiles.innerHTML = originalContent // Очистка формы после успешной отправки
  } else {
    alert("Пожалуйста заполните все поля");
  }
});

attachFiles.addEventListener("change", function (event) {

  let documents = event.target.files;
  let allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

  if (documents.length !== 0) {
    labelForfiles.textContent = "";
    for (let i = 0; i < documents.length; i++) {
      let currentDocument = documents[i];
      
      if (!allowedTypes.includes(currentDocument.type)) {
        alert('Type of file is not available');
        continue; // Пропускаем этот файл и продолжаем цикл
      }

      let filesBox = document.createElement("div");
      filesBox.insertAdjacentHTML(
        "afterbegin",
        `<span>${currentDocument.name} </span>`
      );
      let removeButton = document.createElement("button");
      removeButton.className = "remove-button";
      removeButton.textContent = "[x]";
      removeButton.onclick = () => filesBox.remove();
      filesBox.append(removeButton);
      labelForfiles.append(filesBox);
    }
  } else {
    labelForfiles.innerHTML = originalContent;
  }
});




// 1) Ховеры у кнопок мне не понравились. Если ты их увеличиваешь, то когда ховер отпадает они также должны плавно уменьшаться.
// 2) Не на всех кнопках есть cursor
// 3) Нет состояния дизейбленной кнопки для формы, когда она не валидна
// 4) Теперь я вижу, что можно добавить файл, но, если я добавлю не картинку, форма ломается и больше я не могу добавить новый файл
// 5) После отправки формы, в алерте не показывается файл, который отправили
// 6) Задать вопросы по собираю данных из <form> и зачем нам тогда аякс запросы, если form и так может отправить данные на сервер 