const os = require("os");
const fs = require("fs");
const _ = require("lodash");

// let array = _.drop([1,2,3,4,5], 2)
// console.log(array)
// let newArray = _.flattenDeep([1,[2,3,4,[5]]])
// console.log(newArray)


// let userDetails = os.userInfo().username;
// fs.appendFile("oh-hi.txt", Hello ${userDetails}, (err) => {
//     if (err) {
//         console.log("oops");
//     }
// })

function alphabetise(myArray) {
    let sortedArray = myArray.sort();
    return sortedArray
}
function splitting(myString) {
    let splitString = myString.split("");
    return splitString
}
function splitString(anotherString) {
    let thisString = anotherString.split("").sort();
    return thisString
}
function shortenName(yetAnotherString) {
    let newArray = yetAnotherString.split("").slice(0, 3).join("");
    return newArray
}
function fruitStuff(fruit) {
    let array1 = ["apple", "pear", "banana"];
    array1.push(fruit);
    return array1
}
function longWords(string) {
    let anArray = string.split(" ");
    if (anArray[0].length > anArray[1].length) {
        return anArray[0]
    } else {
        return anArray[1]
    }
}
module.exports = { alphabetise, splitting, splitString, shortenName, fruitStuff, longWords }