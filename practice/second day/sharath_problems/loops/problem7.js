// given the number you need to print the reverse of it.

// example:- let say the given number is 12345
// you need to print 54321

function printReverseOfNumber(num) {
  var bag = "";

  while (num > 0) {
    var lastNum = num % 10;

    bag = bag + lastNum;

    num = Math.floor(num / 10);
  }

  console.log(bag);
}

printReverseOfNumber(12549);
