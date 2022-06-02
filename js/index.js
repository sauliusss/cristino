const progressBarGroupDOM = document.querySelector(".progress-bar-group");
const optionsDOM = progressBarGroupDOM.querySelectorAll("group");

for (const optionDOM of optionsDOM) {
  optionDOM.addEventListener("click", () => {
    progressBarGroupDOM.dataset.group = optionDOM.dataset.group;
  });
}
