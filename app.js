let dateOfBirth = document.querySelector("#date_of_birth");
let luckyNumber = document.querySelector("#lucky_number");
let check_btn = document.querySelector("#check_button");
let outputBox = document.querySelector(".outputBox");

let compareValues = function (sum, luckyNumber) {
  if (sum % luckyNumber == 0) {
    outputBox.innerText = "Your Birthday is Lucky😘";
  } else {
    outputBox.innerText = "Your Birthday is not Lucky😓";
  }
};

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText = "please enter both of the fields😠";
  }
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}


check_btn.addEventListener("click",checkBirthDateIsLucky);
    
