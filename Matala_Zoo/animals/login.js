let saveVisitorForView = [...JSON.parse(localStorage.getItem("visitors"))];
console.log(saveVisitorForView);
let visitorForView = [...saveVisitorForView];

const dialog = document.querySelector("#visitors-dialog");

const getVisitorHTMLCard = (visit) => {
  const template = `
      <div class="card" style="min-height: 285px;" >
        <img class="card-img-top" src="${visit.thumbImage}" alt="${visit.name}"/>
        <div class="card-body">
          <p class="card-text">${visit.name}</p>
          <p class="card-text">${visit.coins}&#128176;</p>
        </div>
      </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => handleVisitorClick(visit));
  return wrapper;
};

const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = " Close modal";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};
const getLoginModalBtn = (visit) => {
  const getLoginModalBtn = document.createElement("button");
  getLoginModalBtn.innerText = "Log In";
  getLoginModalBtn.addEventListener("click", () => {
    localStorage.setItem("LogUser", JSON.stringify(visit));

    window.location.href = "./zoo.html";
  });
  return getLoginModalBtn;
};
const handleVisitorClick = (visit) => {
  dialog.innerHTML = "";
  dialog.append(
    getCloseModalHTMLButton(),
    getVisitorHTMLCard(visit),
    getLoginModalBtn(visit)
  );

  dialog.showModal();
};

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitors";
  queryInput.className = "form-control my-4";
  queryInput.oninput = (e) => {
    visitorForView = saveVisitorForView.filter((visit) =>
      visit.name.includes(e.target.value)
    );
    renderProducts();
  };
  return queryInput;
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Visitor Found</h2>
    <p>We're sorry, but no visitor match your search.</p>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorForView = [...visitors];
  renderProducts();
};

const renderProducts = () => {
  const visitorCards = visitorForView.map(getVisitorHTMLCard);

  const visitorsPlaceholder = document.getElementById("view-visitor-form");
  visitorsPlaceholder.innerHTML = "";

  if (!visitorCards.length) {
    visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  visitorsPlaceholder.append(...visitorCards);
};

document
  .getElementById("choose-visitor")
  .insertAdjacentElement("afterend", getSearchBox());
window.addEventListener("load", renderProducts);

function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  //
  //נכנס אם האורח שבחר לעמוד גן החיות
  //window.location.href = "http://127.0.0.1:5501/animals/zoo.html";
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
}
