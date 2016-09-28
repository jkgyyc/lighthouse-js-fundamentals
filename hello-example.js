function ageCalculator(name, yearOfBirth, currentYear)
{
  return name "is " + currentYear - yearOfBirth + " years old.";
  // ^ or console.log?
}

  var name = "Miranda";
  var yearOfBirth = 1983;
  var currentYear = 2015;

ageCalculator();


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));