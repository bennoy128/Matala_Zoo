function createNewVisitor(event) {
  // ביטול התנהגות דיפולטיבית של שליחת טופס
  event.preventDefault();

  let userName = document.getElementById("name").value;
  const user = {
    name: userName,
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  };
  console.log(user);

  localStorage.setItem("user1", JSON.stringify(user));

  let visitorForView = [...JSON.parse(localStorage.getItem("visitors"))];
  visitorForView.push(user);
  console.log(visitorForView);
  //החזרתי את השורה הבאה רק כדי להראות בצורה חלקה שמערך חדש נשמר
  localStorage.setItem("visitors", JSON.stringify(visitorForView));
  console.log(visitors);
  //שומר את המערך החדש ללוקל סטורג
  // if(visitorExists)
  // {localStorage.setItem("visitors", JSON.stringify(visitorForView));}
  // console.log(visitors);

  let animalForView = [...JSON.parse(localStorage.getItem("animals"))];
  console.log(animalForView);

  const dialog = document.querySelector("#user-dialog");

  const validateFormInputs = () => {
    // בודק האם האינפוטים קיימים ויש בהם ערך
    // _______________________________________________________________
    // מחזיר האם תקין או לא (בוליאני)c
    function validateForm() {
      let inputValue = document.getElementById("fname").value;

      // Specify the allowed characters in the array
      let allowedChars = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];

      // Check if input contains characters not in the allowedChars array
      for (let i = 0; i < inputValue.length; i++) {
        if (allowedChars.indexOf(inputValue[i]) === -1) {
          alert(
            "user name contains characters not allowed. Please enter only letters."
          );
          return false; // prevent form submission
        }
      }

      // If validation passes, allow form submission
      return true;
    }
  };

  const visitorExists = (name) => {
    // מקבל שם  ומחזיר תשובה האם השם האורח קיים
    const checkNameOfVisitor = name;
    let getTheNamesOfVisitors = [
      ...JSON.parse(localStorage.getItem("visitors")),
    ];
    if (checkNameOfVisitor !== getTheNamesOfVisitors) {
      return;
    } else {
      const Dialog = document.querySelector(".user-dialog");
      const closeDialog = document.querySelector(".button-close-dialog");
      // const openDialog = document.querySelector(".open-button");
      // openDialog.addEventListener("click", () => {
      Dialog.showmodal();
      // });
      closeDialog.addEventListener("click", () => {
        Dialog.close();
      });

      //      return "this user exist :(";   ---במקום----
    }
  };

  const makeVisitor = (name) => {
    // מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
  };

  //בסוף הלוגיקה נקפוץ לדף הרשמה
  window.location.href = "http://127.0.0.1:5502/animals/login.html";
}

// מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
// שימו לב כי האיידי של createForm
// זהה לאיידי של הטופס בעמוד signup.html
// אין לשנות אותו

const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
