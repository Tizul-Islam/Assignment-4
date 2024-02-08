function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }

  let lastCharacter = ["a", "y", "i", "e", "o", "u", "w"];
  let lastLetter = name[name.length - 1].toLowerCase();

  if (lastCharacter.includes(lastLetter)) {
    return "Bad Name";
  } else {
    return "Good Name";
  }
}


console.log(checkName("Salman"));
console.log(checkName("Jafo"));
console.log(checkName(111));
