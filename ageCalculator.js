function ageCalculator(name, yearOfBirth, currentYear) {
  var age = (currentYear - yearOfBirth);
  var sentence = name + " is " + age + " years old.";
  return sentence

}

console.log(ageCalculator("Suzie", 1984, 2016))
console.log(ageCalculator("Jack", 2004, 2016))
console.log(ageCalculator("Ali", 2016, 2016))