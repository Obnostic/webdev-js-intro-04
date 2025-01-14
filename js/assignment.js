"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const response = document.getElementById("p");
let age;


function checkAgeAndRespond() {

    age = parseInt(ageInputEl.value);
/*    console.log (age); */
    if (age >= 21) {
        console.log("You can vote and purchase alcohol.");  
    } else if (age >= 18  && age < 21) {
        console.log("You can vote, but you cannot purchase alcohol.");  
    } else {
        console.log("You cannot vote and you cannot purchase alcohol.");  
    }
}



submissionBtn.addEventListener("click", checkAgeAndRespond); 
   

function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
