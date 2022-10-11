document.getElementById("clear").style.visibility = "hidden";

const calc = () => {
  document.getElementById("clear").style.visibility = "visible"; // hide
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
  });

  let inputValue = document
    .getElementById("string")
    .value.trim()
    .toLowerCase()
    .split("");

  const cont = {};

  inputValue.forEach((element) => {
    cont[element] = (cont[element] || 0) + 1;
  });

  for (let letters in cont) {
    const result = `${letters} : ${cont[letters]}<br>`;
    document.getElementById("result").innerHTML += result;
  }
};

const clears = () => {
  document.getElementById("clear").style.visibility = "hidden";
  document.getElementById("string").value = " ";
  document.getElementById("result").innerHTML = " ";
};
