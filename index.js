//Slider control links slider value to number value so they are synced
let characterAmountRange = document.getElementById("characterAmountRange");
let characterAmountNumber = document.getElementById("characterAmountNumber");
//Values for button elements
let includeUppercase = document.getElementById("includeUpperCase");
let includeLowercase = document.getElementById("includeLowerCase");
let includeNumbers = document.getElementById("includeNumbers");
let includeSymbols = document.getElementById("includeSymbols");
console.log(includeUppercase);
//Turning the strings to shorthand to use character code
const uppercaseCharCodes = arrayLowToHigh(65, 90);
const lowercaseCharCodes = arrayLowToHigh(97, 122);
const numbercaseCharCodes = arrayLowToHigh(48, 57);
const symbolcaseCharCodes = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64).concat(
    arrayLowToHigh(91, 96).concat(arrayLowToHigh(123, 126))
  )
);
const passwordDisplay = document.getElementById("passwordDisplay");
characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);
function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = lowercaseCharCodes;
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
  if (includeLowercase) charCodes = charCodes.concat(lowercaseCharCodes);
  if (includeNumbers) charCodes = charCodes.concat(numbercaseCharCodes);
  if (includeSymbols) charCodes = charCodes.concat(symbolcaseCharCodes);
  let passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  console.log(charCodes, "charCodes");
  return passwordCharacters.join("");
}
function arrayLowToHigh(low, high) {
  const looparray = [];
  for (let u = low; u <= high; u++) {
    looparray.push(u);
  }
  return looparray;
}
function syncCharacterAmount(e) {
  let value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
//set form to generate password
let form = document.getElementById("passGenForm");
//setting button default
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let characterAmount = characterAmountNumber.value;
  let includeUppercase1 = includeUppercase.checked;
  console.log(includeUppercase);
  let includeNumbers1 = includeNumbers.checked;
  let includeSymbols1 = includeSymbols.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase1,
    includeNumbers1,
    includeSymbols1
  );
  console.log(password);
  passwordDisplay.innerText = password;
});