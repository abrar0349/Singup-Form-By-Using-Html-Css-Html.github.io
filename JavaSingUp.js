const mainArr = [{
fullName: "Abrar khan",
userAge: 24,
userEmail: "abrar0349khan@gmail.com",
userPass: "12345",
userConfirPass: "12345",
userPhoneNo: "0315XXXX" }]

//Sing Up form Coding

// console.log(mainArr.find((elem) => elem.userEmail))

function mainFunc(){
let userNameInput = document.getElementById("name").value;
let userLastnameInput = document.getElementById("lastName").value;
let userAgeInput = document.getElementById("age").value;
let userEmailInput = document.getElementById("email").value;
let userPassInput = document.getElementById("password").value;
let userConfirmPassInput = document.getElementById("confirmPassword").value;
let userPhoneNOInput = document.getElementById("phone").value;


if(userNameInput != "" && userLastnameInput != "" && userAgeInput != "" && userEmailInput != "" && userPassInput != "" && userConfirmPassInput != "" && userPhoneNOInput != ""){

// console.log("first condition run or not")

if(userPassInput == userConfirmPassInput){

// mainArr.push()
var khanData = {fullName: userNameInput + " " + userLastnameInput, userAge: userAgeInput, userEmail: userEmailInput , userPass: userPassInput, userConfirPass: userConfirmPassInput, userPhoneNo: userPhoneNOInput}

if(khanData){
    var userString = JSON.stringify(khanData);
    window.location.href = "login.html?khanData=" + encodeURIComponent(userString);
}

console.log(mainArr.map((elem) => elem)) 


history.replaceState(null,null,"http://127.0.0.1:5500/login.html")
} else {

document.getElementById("errorShow").innerText = "Password didn't match"

}

} else {

document.getElementById("errorShow").innerText = "Please fill all the Input"


}

 }

//Login form Coding

let userEmailForCollData = document.getElementById("myEmail")
let userPassForCollData = document.getElementById("myPass")

function loginbtn(){

let user = mainArr.find((element) => {
if(element.userEmail == userEmailForCollData.value && element.userPass == userPassForCollData.value){
return element
}
});

if(user){

var userString = JSON.stringify(user);
window.location.href = "prolfile.html?user=" + encodeURIComponent(userString);

// document.getElementById("userName").innerHTML = user.fullName

// document.getElementById("detail").innerText = `My Name is ${user.fullName} and My age is ${user.userAge} if you want to contect me then that's my gmail ${user.userEmail}`

}else{

document.getElementById('PasNotMatch').innerText = "Invalid username or password"

}
}

function SinupBacBtn(){
window.location.href = "singup.html"
history.replaceState(null,null,"login.html")
}

console.log(mainArr.length)










