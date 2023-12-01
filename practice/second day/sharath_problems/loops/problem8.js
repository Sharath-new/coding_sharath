// given a number num you need to print whether the number is prime or not

// example
// num = 13
// print given number is prime
// num = 10
// print given number is not prime

function checkPrime(num) {
  var i = 1;
  while (num % i == 0 ) {
    if(i<num==0)
     i++
  }
  console.log("given the it is prime number" );
}

checkPrime(13);
