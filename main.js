getData();

// Selectors

const nameInput = document.querySelector("#name");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const addBtn = document.querySelector("#add-btn");
const container = document.querySelector("#container");

// Event Listener

addBtn.addEventListener("click", addCharacter);

// Functions

function getData() {
  fetch("https://localhost:7292/api/characters")
    .then((res) => res.json())
    .then(displayData)
    .catch((err) => console.log(err));
}

function displayData(data) {
  container.innerHTML = "";
  data.forEach((d) => {
    const element = `<h1>${d.name}</h1>`;
    container.innerHTML += element;
  });
}

function addCharacter(e) {
  const newCharacter = {
    name: nameInput.value,
    height: heightInput.value,
    weight: weightInput.value,
  };

  fetch("https://localhost:7292/api/characters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCharacter),
  }).then((res) => getData);
}
