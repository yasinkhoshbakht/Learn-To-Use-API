let container = document.querySelector(".container");
async function getData() {
  let url = "https://jsonplaceholder.typicode.com/users";
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    let userList = await response.json();
    renderInUi(userList, container);
  } catch (error) {
    console.error(error);
  }
}
function renderInUi(list, container) {
  list.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("user");
    let userName = document.createElement("div");
    userName.classList.add("user-name");
    userName.innerText = item.name;
    let username = document.createElement("div");
    username.classList.add("user-username");
    username.innerText = item.username;
    let userEmail = document.createElement("div");
    userEmail.classList.add("user-email");
    userEmail.innerText = item.email;
    div.appendChild(userName);
    div.appendChild(username);
    div.appendChild(userEmail);
    container.appendChild(div);
  });
}
getData();
