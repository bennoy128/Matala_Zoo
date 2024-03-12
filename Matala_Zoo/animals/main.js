// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Emily Johnson",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "Michael Williams",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Jessica Brown",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "Christopher Jones",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Ashley Davis",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "Matthew Miller",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Amanda Wilson",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "David Moore",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Sarah Taylor",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "James Anderson",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "Robert Jackson",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Elizabeth White",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "Daniel Harris",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Melissa Martin",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "William Thompson",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Linda Garcia",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
  {
    name: "Joseph Martinez",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU",
  },
  {
    name: "Karen Robinson",
    coins: 50,
    thumbImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaIRUm-26Qnk1LYbqm-NvJucbk6OSgP86dg&usqp=CAU",
  },
];

let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 240,
    height: 120,
    color: "brown",
    habitat: "land",
    picture: "./images_for_Zoo/lion.jpeg",
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 200,
    color: "grey",
    habitat: "land",
    picture: "./images_for_Zoo/elephant.jpeg",
  },
  {
    name: "Giraffe",
    isPredator: false,
    weight: 600,
    height: 430,
    color: "brown",
    habitat: "land",
    picture: "./images_for_Zoo/giraffe.jpeg",
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 320,
    height: 120,
    color: "brown",
    habitat: "land",
    picture: "./images_for_Zoo/tiger.jpeg",
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 65,
    height: 110,
    color: "brown",
    habitat: "land",
    picture: "./images_for_Zoo/monkey.jpeg",
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 120,
    height: 140,
    color: "brown",
    habitat: "land",
    picture: "./images_for_Zoo/kangaroo.jpeg",
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 45,
    height: 65,
    color: "brown",
    habitat: "sea",
    picture: "./images_for_Zoo/penguin1.jpeg",
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 250,
    height: 140,
    color: "brown",
    habitat: "land",
    picture: "./images_for_Zoo/zebra.jpeg",
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    picture: "./images_for_Zoo/cheetah.jpeg",
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
  console.log(animals);
}
generateDataset();

//********************** */
function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
