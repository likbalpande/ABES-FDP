// --------------- Individual EVENT handling of FORM ELEMENTS

// function validateEmail(e) {
//     const val = e.target.value;
//     const res = val.split("@");
//     if (res[1] == "abes.org") {
//         document.body.style.backgroundColor = "green";
//     } else {
//         document.body.style.backgroundColor = "red";
//     }
// }

// function validateRoll(e) {
//     const val = e.target.value;
//     if (val >= 24000 && val < 25000) {
//         alert("Roll Number is Valid");
//     } else {
//         alert("Invalid Roll Number");
//     }
// }

// --------------- FORM handling on submit

// function handleForm(e) {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const rollNumber = e.target[1].value;
//     let isEmailCorrect = false;
//     let isRollNumberCorrect = false;
//     // email validation
//     const res = email.split("@");
//     if (res[1] == "abes.org") {
//         isEmailCorrect = true;
//     }

//     // roll number validation
//     if (rollNumber >= 24000 && rollNumber < 25000) {
//         isRollNumberCorrect = true;
//     }

//     if (isRollNumberCorrect && isEmailCorrect) {
//         alert("Form Submitted!");
//         // submission code (API)
//         // window.open("./register.html");
//         // submitForm();
//         return true;
//     } else {
//         alert("Form validation failed");
//         return false;
//     }
// }
