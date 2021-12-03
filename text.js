const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("[name='text']");
const result = document.querySelector(".result");
let helper = {
  sarcasticMood: [],
  temp: [],
};
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    if (input.checked) {
      helper.sarcasticMood = textArea.value.split("");
      switch (input.value) {
        case "sarcastic":
          helper.temp = [...helper.sarcasticMood];
          helper.temp.forEach((alphabet, index) => {
            if (index % 2 === 0) {
              helper.temp[index] = alphabet.toUpperCase();
            } else {
              helper.temp[index] = alphabet.toLowerCase();
            }
          });
          result.innerText = helper.temp.join("");
          if (!result.classList.toggle("sarcastic")) {
            input.checked = !input.checked;
            result.innerText = textArea.value;
          }
          result.classList.remove("bold", "unable");
          break;
        case "bold":
          result.innerText = textArea.value;
          if (!result.classList.toggle("bold")) {
            input.checked = !input.checked;
          }
          result.classList.remove("sarcastic", "unable");
          break;
        case "unable":
          result.innerText = helper.sarcasticMood.join("...");
          if (!result.classList.toggle("unable")) {
            input.checked = !input.checked;
            result.innerText = textArea.value;
          }
          result.classList.remove("sarcastic", "bold");
          break;
      }
    }
  });
});
