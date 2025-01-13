"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const response = document.getElementById("p");
let age;


function checkAgeAndRespond() {

    age = parseInt(ageInputEl.value);
    
    if (age >= 21) {
        document.write("You can vote and purchase alcohol.");  
    } else if (age >=18) {
        document.write("You can vote and purchase alcohol.");  
    } else {
        document.write("You cannot vote and you cannot purchase alcohol.");  
    }
};



submissionBtn.addEventListener("click", function)
    {  checkAgeAndRespond(); };
   

function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
};

ageInputEl.addEventListener("keydown", validateInput);
