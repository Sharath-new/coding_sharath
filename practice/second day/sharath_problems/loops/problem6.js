// given a number you need to the tables of the given number

// example:- given number is 3
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// ..
// ..
// 3 * 10 = 30

function printTables(num) {
  var i = 1;
  while (i <= num) {
    console.log(num * i);
    i++;
  }
}

printTables(5);
