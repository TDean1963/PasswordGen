//Slider control links slider value to number value so they are synced

let characterAmountRange = document.getElementById("characterAmountRange")
let characterAmountNumber = document.getElementById("characterAmountNumber")

//Values for button elements
let includeUppercase = document.getElementById('inccludeUppercase')
let includeLowercase = document.getElementById('inccludeLowercase')
let includeNumbers = document.getElementById('includeNumbers')
let includeSymbols = document.getElementById('includeSymbols')

//Turning the strings to shorthand to use character code
const uppercaseCharCodes = arrayLowToHigh(65, 90)
const lowercaseCharCodes = arrayLowToHigh(97, 122)
const numbercaseCharCodes = arrayLowToHigh(48, 57)
const symbolcaseCharCodes = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64).concat(arrayLowToHigh(91, 96).concatarrayLowToHigh(123, 126)))

const passwordDisplay = document.getElementById('passwordDisplay')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = lowercaseCharCodes
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
    if (includeLowercase) charCodes = charCodes.concat(lowercaseCharCodes)
    if (includeNumbers) charCodes = charCodes.concat(numbersCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(symbolsCharCodes)

    let passwordCharacters = []
    for (let i=0; i < characterAmount; i++){
        characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(charCodes))
    }
    return passwordCharacters.join('')
}
console.log(charCodes, "charCodes")

function arrayLowToHigh(low, high){
    const looparray = []
    for (let u = low, u<= high; u++){
        array.push(u)
    }
    return looparray
}

function syncCharacterAmount(e) {
    let value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

//set form to generate password

let form = document.getElementById(passGenForm)
//setting button default
form.addEventListener('submit', e=> {
    e.preventDefault
    let = characterAmount = characterAmount.value
    let includeUppercase = includeUppercaseElement.checked
    let includeNumbers = includeNumbersElement.checked
    let includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

