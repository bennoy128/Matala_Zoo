function showVisitedAnimals() {
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר בהן
}
function showFeededAnimals() {
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי האכיל אותן
}
function showFavoriteAnimal() {
  //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
}

function renderNavBar() {
  const getButtonLogOut = () => {
    const logout = document.createElement("button");
    logout.className = "btn-log-out";
    logout.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:5501/animals/signup.html";
    });
    return logout;
  };

  const getButtonReset = () => {
    const Reset = document.createElement("button");
    Reset.className = "btn-Reset";
    Reset.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:5501/animals/signup.html";
    });
    return Reset;
  };

  const getButtonDashboard = () => {
    const myDashboard = document.createElement("button");
    myDashboard.className = "btn-my-deshboard";
    myDashboard.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:5501/animals/dashboard.html";
    });
    return myDashboard;
  };
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

document.body.insertAdjacentElement("afterbegin", renderNavBar());
window.addEventListener("load", renderNavBar);
