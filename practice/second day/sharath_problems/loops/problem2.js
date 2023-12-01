// given a number n you need to print from 1 to n in a single line

// ex: let say number is 5
// output: 1 2 3 4 5

function printInSingleLine(n) {
  var i = 1;
  var bag = "";

  while (i <= n) {
    bag = bag + i + "";

    i++;
  }
  console.log("givrn number in single line", bag);
}

printInSingleLine(5);
