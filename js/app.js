const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HiDDEN_CLASSNAME = "hidden"
const link = document.querySelector("a")
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  loginForm.classList.add(HiDDEN_CLASSNAME);
  paintGreetings(username)
};

function paintGreetings(username){
  greeting.classList.remove(HiDDEN_CLASSNAME)
  greeting.innerText = `Hello ${username}`
}

const savedUsername = localStorage.getItem(USERNAME_KEY) 

if(savedUsername ===null){
  loginForm.classList.remove(HiDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername)
}