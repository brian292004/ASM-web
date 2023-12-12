
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Please do not leave it blank");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Logged in successfully");
      window.location.href = "home.html";
    } else {
      alert("Login failed");
    }
  }
});
const formLogin = document.querySelectorAll('.form-text input')
const formLabel = document.querySelectorAll('.form-text label')
for(let i=0;i<2;i++){
    formLogin[i].addEventListener("mouseover",function(){
        formLabel[i].classList.add("focus")    
    })
    formLogin[i].addEventListener("mouseout",function(){
        if(formLogin[i].value ==""){
            formLabel[i].classList.remove("focus")
        }
            
    })
}