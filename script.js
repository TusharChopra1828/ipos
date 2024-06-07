/* Database Connection */
// const app = require('express')();
// const http = require('http').Server(app);
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://chopratushar941:Alpha1828@nzwebsite.yhhi6co.mongodb.net/?retryWrites=true&w=majority&appName=Nzwebsite");
// const User = require('./models/userModel');

// http.listen(3000, function (){
//     console.log('Server is running');
// });


/*=============== Switch between different pages ===============*/
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}


/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon)
          
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'
 
            // Add icon
            iconEye.classList.add('ri-eye-line')
            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'
 
            // Remove icon
            iconEye.classList.remove('ri-eye-line')
            // Add icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
 };
 
 showHiddenPass('input-pass','input-icon')

 /*=============== Login Functionality ===============*/

//  const captureId = document.getElementById("input-email");
//  const email = captureId.getElementsByTagName("input");
//  const capturePassword = document.getElementById("input-pass");
//  const password = capturePassword.getElementsByTagName("input");
//  const correctEmail = "alpha@gmail.com";
//  const correctPassword = "123456";

//  validate.addEventListener('click', () => {
//     if (email == correctEmail && password == correctPassword) {
//         console.log(alert("Login Successful"));
//     }
//     else {
//         console.log(alert("Incorrect Id or Password"));
//     }
//  });\

function handleLoginClick(){
    const captureId = document.getElementById("input_email").value;
    const capturePassword = document.getElementById("input_pass").value;
    console.log('here', captureId, capturePassword);
    const correctEmail = "alpha@gmail.com";
    const correctPassword = "123456";
    if (captureId === correctEmail && capturePassword === correctPassword) { // Compare values, not elements
        window.location.replace("admindashboard.html");
        alert("Login Successful");
        
        return ;
    }
    else {
        alert("Incorrect Id or Password");
    }
}

// const captureId = document.getElementById("input-email").value;
// // const email = captureId.getElementsByTagName("input"); // Access the value of the first input element
// const capturePassword = document.getElementById("input-pass").value;
// // const password = capturePassword.getElementsByTagName("input"); // Access the value of the first input element
// const correctEmail = "alpha@gmail.com";
// const correctPassword = "123456";
// const validate = document.getElementById("validate");
// console.log('@here',captureId, capturePassword);
// validate.addEventListener('click', () => {
//     if (captureId === correctEmail && capturePassword === correctPassword) { // Compare values, not elements
//         alert("Login Successful");
//         window.location.replace("admindashboard.html");
//         return;
//     }
//     else {
//         alert("Incorrect Id or Password");
//     }
// });

/* Capture detail from form */
function resetform(){
    document.getElementById("capturename").value = "";
    document.getElementById("capturenumber").value = "";
    document.getElementById("captureemail").value = "";
    document.getElementById("captureaddress").value = "";
    document.getElementById("captureproduct").value = "";
    document.getElementById("capturequantity").value = "";
}
function submitdetails() {
    let a = document.getElementById("capturename").value;
    let b = document.getElementById("capturenumber").value;
    let c = document.getElementById("captureemail").value;
    let d = document.getElementById("captureaddress").value;
    let e = document.getElementById("captureproduct").value;
    let f = document.getElementById("capturequantity").value;
    console.log(a, b, c, d, e, f);
    resetform()
}

