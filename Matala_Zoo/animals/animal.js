function renderAnimal() {
  //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
  // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי

  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  const curAnimalCard = document.createElement("div");
  const container = document.getElementById("currentAnimal");
  curAnimalCard.className = "current-animal-card";

  curAnimalCard.innerHTML = `
      <h2>${currentAnimal.name} </h2>
      <img src="${currentAnimal.picture}" alt="${currentAnimal.name}" style="height:250px;">
      <p>Habitat: ${currentAnimal.habitat}</p>
      <p>Weight: ${currentAnimal.weight}</p>
      `;

  const feedButton = document.createElement("button");
  feedButton.innerHTML = "Feed Me!";
  curAnimalCard.appendChild(feedButton);
  container.appendChild(curAnimalCard);
  feedButton.onclick = feedAnimal;
  // feedButton.addEventListener("click", feedAnimal());
}
function renderRelatedAnimals() {
  // ממשו את הלוגיקה שמרנדרת כרטיסיות של החיות ששדה ההאביטט שלהם זהה לחיה שמוצגת
  // רנדרו אותן לתוך הדיב שמיועד להן עם האיידי related-animals
  // ממשו את אותה לוגיקה של כרטיסיית חיה כמו בכרטיסיות בעמוד zoo.html
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  const relatedAnimalsCon = document.createElement("div");
  const animals = JSON.parse(localStorage.getItem("animals"));
  for (let a in animals) {
    if (a.habitat === currentAnimal.habitat) {
      //  renderRelatedAnimals.push(animals[a]);
      const relatedAnimalCard = document.createElement("div");
      relatedAnimalCard.className = "current-animal-card";

      relatedAnimalCard.innerHTML = `
         <h2>${a.name} </h2>
         <img src="${a.picture}" alt="${a.name}" style="height:250px;">
         <p>Habitat: ${a.habitat}</p>
         <p>Weight: ${a.weight}</p>
         `;
      console.log("amir ");
      relatedAnimalsCon.appendChild(relatedAnimalCard);
    }
  }
}
renderAnimal();
renderRelatedAnimals();

function feedAnimal() {
  // ממשו את הלוגיקה של האכלת חיה
  // במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה
  const currentVisitors = JSON.parse(localStorage.getItem("visitors"));
  const existingAnimals = JSON.parse(localStorage.getItem("animals"));
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  const loggedInUser = JSON.parse(localStorage.getItem("LogUser"));

  if (loggedInUser.coins >= 10) {
    loggedInUser.coins -= 10;
    alert("Thank you for feeding me");
  } else {
    if (currentAnimal.isPredator) {
      alert("You got eaten trying to feed a predator without enough coins!");
      const tmpUsers = currentVisitors.filter(
        (visitor) => visitor.name !== loggedInUser.name
      );
      localStorage.setItem("visitors", JSON.stringify(tmpUsers));
      window.location.href = "./login.html";
    } else {
      const tmp = existingAnimals.filter(
        (animal) => animal.name !== currentAnimal.name
      );

      localStorage.setItem("animals", JSON.stringify(tmp));

      alert(
        "The animal ran away, because you tryed to eat it without enough coins"
      );
      window.location.href = "./zoo.html";
    }
  }
  localStorage.setItem("LogUser", JSON.stringify(loggedInUser));
}

function renderNavBar() {
  // const getButtonLogOut = () => {
  //   const logout = document.createElement("button");
  //   logout.className = "btn-log-out";
  //   logout.addEventListener("click", () => {
  //     window.location.href = "http://127.0.0.1:5501/animals/signup.html";
  //   });
  //   return logout;
  // };

  // const getButtonReset = () => {
  //   const Reset = document.createElement("button");
  //   Reset.className = "btn-Reset";
  //   Reset.addEventListener("click", () => {
  //     window.location.href = "http://127.0.0.1:5501/animals/signup.html";
  //   });
  //   return Reset;
  // };

  // const getButtonDashboard = () => {
  //   const myDashboard = document.createElement("button");
  //   myDashboard.className = "btn-my-deshboard";
  //   myDashboard.addEventListener("click", () => {
  //     window.location.href = "http://127.0.0.1:5501/animals/dashboard.html";
  //   });
  //   return myDashboard;
  // };
  //
  const localVisitor = JSON.parse(localStorage.getItem("visitors"));
  let navBar = document.getElementById("nav-bar");
  navBar.innerHTML = "";

  localVisitor.forEach((visitor) => {
    renderAnimal(visitor);
  });

  function renderAnimal(visitor) {
    const nav_bar = document.createElement("div");
    nav_bar.className = "nav-bar";

    nav_bar.innerHTML = `<div class="div">
    <p class="card-text">Visitor</p>
    <p class="card-text">${visitor.name}</p>
  </div>
  <div class="div">
    <p class="card-text">Coins</p>
    <p class="card-text">${visitor.coins}&#128176;</p>
  </div>
  <div class="buttons">
    <button id="btn-my-deshboard">My dashboard</button>
    <button id="btn-Reset">Reset</button>
    <button id="btn-log-out">Log out</button>
  </div> `;

    navBar.appendChild(nav_bar);
  }
}

renderNavBar();

function visitorGotEaten() {
  // ממשו את הלוגיקה של חיה שטורפת אורח
}

function animalEscaped() {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
}
