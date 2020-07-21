//CHALLENGE 1
const sumArrayContent = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//CHALLENGE 2
const stringChecker = (string1, string2) => {
    if (string1 === string2) {
        return true;
    } else {
        return false;
    }
}

//CHALLENGE 3
const nameInitialiser = (name) => {
    let nameArray = name.split(" ");
    let initialsArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        initialsArray.push(nameArray[i].charAt(0))
    }
    let initials = initialsArray.join("")
    return initials;
}

//CHALLENGE 4
const splittingOddAndEven = (array) => {
    let numbers = {
        even: [],
        odd: []
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            numbers.even.push(array[i]);
        } else {
            numbers.odd.push(array[i]);
        }
    }
    return numbers;
}

//CHALLENGE 5
const characterCounter = (string) => {
    let charCount;
    let vowelCount = 0;
    let consCount = 0;
    const vowelList = "AEIOUaeiou";
    let array = []
    for (let i = 0; i < string.length; i++) {
        if (vowelList.indexOf(string[i]) !== -1) {
            vowelCount++;
        } else {
            consCount++
        }
    }
    charCount = vowelCount + consCount;
    array.push(charCount, vowelCount, consCount);
    return array;
}

module.exports = {
    sumArrayContent,
    stringChecker,
    nameInitialiser,
    splittingOddAndEven,
    characterCounter
}