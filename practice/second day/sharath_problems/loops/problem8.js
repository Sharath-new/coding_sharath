// given a number num you need to print whether the number is prime or not

// example
// num = 13
// print given number is prime
// num = 10
// print given number is not prime

function checkPrime(num) {
  var i = 1;
  var numberOfFactor = 0;
  while (i <= num) {
    if (num % i == 0) {
      numberOfFactor++;
    }
    i++;
  }
  if (numberOfFactor == 2) {
    console.log("Given number is prime");
  } else {
    console.log("Given number is not prime");
  }
}

checkPrime(2);
