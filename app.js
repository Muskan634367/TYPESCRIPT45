// lower case
var personName = "Muskan";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecases:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
