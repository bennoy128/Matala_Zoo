document.addEventListener("DOMContentLoaded", function () {
  const localAnimals = JSON.parse(localStorage.getItem("animals"));
  let colors = [];
  for (let i in localAnimals) {
    if (colors.includes(localAnimals[i].color) == false) {
      colors.push(localAnimals[i].color);
    }
  }
  const colorSelect = document.querySelector("#color-selector");
  for (let i in colors) {
    const option = document.createElement("option");
    option.value = colors[i];
    option.text = colors[i];
    colorSelect.appendChild(option);
  }
});
// ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
// וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
// במידה ואין פילטרים מסומנים, הציגו את כל החיות
function renderAvailableAnimals() {
  const localAnimals = JSON.parse(localStorage.getItem("animals"));
  let animalsContainer = document.getElementById("animal-cards");
  animalsContainer.innerHTML = "";

  const isPredator = localStorage.getItem("isPredator");
  const colorsTmp = localStorage.getItem("color");
  const weightTmp = localStorage.getItem("weight");
  const heightTmp = localStorage.getItem("height");
  const habitatTmp = localStorage.getItem("habitat");

  function renderAnimals() {
    localAnimals.forEach((animal) => {
      if (
        (isPredator == undefined ||
          isPredator == "" ||
          String(isPredator) == String(animal.isPredator)) &&
        (colorsTmp == undefined ||
          colorsTmp == "" ||
          String(colorsTmp) == animal.color) &&
        (weightTmp == undefined ||
          weightTmp == "" ||
          String(weightTmp) == animal.weight) &&
        (heightTmp == undefined ||
          heightTmp == "" ||
          String(heightTmp) == animal.height) &&
        (habitatTmp == undefined ||
          habitatTmp == "" ||
          String(habitatTmp) == animal.habitat)
      ) {
        renderAnimal(animal);
      }
    });
  }

  function renderAnimal(animal) {
    const animalCard = document.createElement("div");
    animalCard.className = "animal-card";

    animalCard.innerHTML = `
        <h2>${animal.name} </h2>
        <img src="${animal.picture}" alt="${animal.name}" style="height:250px;">
        <p>Habitat: ${animal.habitat}</p>
        <p>Weight: ${animal.weight}</p>
        `;

    animalsContainer.appendChild(animalCard);
    animalCard.addEventListener("click", () => {
      visitAnimal(animal);
    });
  }

  renderAnimals();
}

renderAvailableAnimals();

function visitAnimal(animal) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  localStorage.setItem("currentAnimal", JSON.stringify(animal));
  window.location.href = "animal.html";
}

function setFilter(filterKey, filterValue) {
  localStorage.setItem(filterKey, filterValue);
  renderAvailableAnimals();
}

/**
 * ממשו את הלוגיקה של השמת פילטר
 * הפילטרים הקיימים הם
 * isPredator: true | false
 * habitat: "land" | "sea"
 * weight: value > user selected weight
 * height: value > user selected height
 * color: dropdown of all available colors
 */
// ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
// רנדרו רק את החיות שעומדות בתנאים של הפילטרים
