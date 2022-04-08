let allUsers = [];
let checkRange = document.querySelector("#first-range");

const getAllUsers = () => {
  return fetch("https://randomuser.me/api/?results=500")
    .then((response) => response.json())
    .then((results) => results.results)
    .then((data) => {
      allUsers = data;
    })
    .catch((error) => console.log(error));
};

const filterUsersByAgeRange = (lowerLimit, upperLimit) => {
  let usersByAgeRange = allUsers.filter(
    (user) => user.dob.age > lowerLimit && user.dob.age < upperLimit
  );
  return usersByAgeRange;
};

const showAllUser = (user) => {
  const allUsersElement = document.querySelector("#user-list");
  let userElement = document.createElement("div");
  userElement.classList.add("user-list-item");
  createNewElement(userElement, "flex-2", user.name.first);
  createNewElement(userElement, "flex-2", user.name.last);
  createNewElement(userElement, "flex-1", user.dob.age);
  createNewElement(userElement, "flex-2", user.phone);
  createNewElement(userElement, "flex-3", user.email);
  allUsersElement.appendChild(userElement);
};

const pullAllData = async () => {
  await getAllUsers();
  console.log(allUsers);
  allUsers.map((user) => showAllUser(user));
};

const filterUsers = () => {
  const allUsersElement = document.querySelector("#user-list");
  allUsersElement.innerText = "";

  let filteredUsers = [];
  let lowerLimit, upperLimit;

  var ranges = document.getElementsByName("age-range");
  for (var range of ranges) {
    if (range.checked) {
      lowerLimit = range.value.split("-")[0];
      upperLimit = range.value.split("-")[1];
    }
  }
  if (upperLimit === undefined) {
    upperLimit = Number.MAX_VALUE;
  }

  filteredUsers = filterUsersByAgeRange(lowerLimit, upperLimit);
  filteredUsers.map((user) => showAllUser(user));
};



const createNewElement = (appendedElement, className, text) => {
  const element = document.createElement("div");
  element.classList.add(className);
  element.innerText = text;
  appendedElement.appendChild(element);
};

pullAllData();
