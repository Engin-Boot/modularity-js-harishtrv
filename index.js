var testColorToNumber=require("./testColorToNumber");
var testNumberToPair=require("./testNumberToPair");

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
