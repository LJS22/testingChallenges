const testChallenges = require("./testChallenges.js");

//CHALLENGE 1
test("should sum up all of the numbers in the array", () => {
    let array = [1, 2, 3, 4, 5];
    expect(testChallenges.sumArrayContent(array)).toStrictEqual(15);
})

//CHALLENGE 2
test("should check two strings and return true if they match and false otherwise", () => {
    let string1 = "Hello";
    let string2 = "Hello";
    expect(testChallenges.stringChecker(string1, string2)).toBeTruthy();
})
test("should check two strings and return true if they match and false otherwise", () => {
    let string1 = "Hello";
    let string2 = "hello";
    expect(testChallenges.stringChecker(string1, string2)).toBeFalsy();
})

//CHALLENGE 3
test("should return all the initials of name input", () => {
    expect(testChallenges.nameInitialiser("Luke Jordan Stobbart")).toBe("LJS");
})
test("should return all the initials of name input", () => {
    expect(testChallenges.nameInitialiser("Isabel Carter")).toBe("IC");
})

//CHALLENGE 4
test("should return two arrays from one, one of odd and one of even numbers", () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(testChallenges.splittingOddAndEven(array)).toStrictEqual({ even: [2, 4, 6, 8], odd: [1, 3, 5, 7] });
})

//CHALLENGE 5
test("should return three values, total character number, total vowels, total consonants from one string", () => {
    let string = "hello code nation";
    expect(testChallenges.characterCounter(string)).toStrictEqual([17, 7, 10]);
})