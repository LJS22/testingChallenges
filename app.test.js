const app = require("./app.js");
test("should sort array items into alphabetical error", () => {
    expect(app.alphabetise(["a", "c", "b", "d"])).toStrictEqual(["a", "b", "c", "d"]);
});
test("should split string into array of substrings", () => {
    expect(app.splitting("luke")).toStrictEqual(["l", "u", "k", "e"]);
});
test("should split string and alphabetise the elements", () => {
    expect(app.splitString("abacus")).toStrictEqual(["a", "a", "b", "c", "s", "u"]);
});
test("should shorten name to only first three letters", () => {
    expect(app.shortenName("Benjamin")).toBe("Ben");
});
test("should add the fruit input onto the end of the array", () => {
    expect(app.fruitStuff("orange")).toStrictEqual(["apple", "pear", "banana", "orange"]);
});
test("should return the longest of the two words", () => {
    expect(app.longWords("Luke Stobbart")).toBe("Stobbart");
});