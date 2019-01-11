/***************************************************************
/***************************************************************
Implement a function countdownGenerator() that takes in a number
x and returns a function that counts down when it is called (see
starter code below).
@nfdoyle
***************************************************************/
var countdownGenerator = function (x) {
  /* your code here */
  var countdown = Number(x);

  return function() {
    /* your code here */
    var output;
    if (countdown > 0) {
      output = "T-minus " + countdown + "...";
    } else if (countdown === 0) {
      output = "Blast Off!";
      } else output = "Rocket's already gone, bub!";
    countdown--;
    console.log(output);
    return
    }
  }


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!