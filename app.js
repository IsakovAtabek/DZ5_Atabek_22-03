function reverseString (string) {
    var reversedString = ''
    for(var i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    return reversedString
}

console.log(reverseString('dededfe'));

function middleNumber (numbers) {
    var stringed = String(numbers)
    var summ = 0
    for(var i = 0; i < stringed.length; i++){
        summ += +stringed[i]
    }
    return summ / stringed.length
}

console.log(middleNumber(123));