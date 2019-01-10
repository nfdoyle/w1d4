/***************************************************************
/***************************************************************
Implement your own version of the built-in array map function.

Yours will take in two arguments. The first will be an array to
map and the second will be a callback function. The function will
return a new array based on the results of the callback function.
@nfdoyle
***************************************************************/

var words = ["ground", "control", "to", "major", "tom"];


function map(array, cb) {
  result = [];

  for (word in array) {
    result.push(cb(array[word]));
  }
console.log(result);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

/*
var data = ['hello', 5, 'things', {}];

function forEachBackward(thingsToPrint, doSomething) {
  for(var i = thingsToPrint.length - 1; i >= 0; i--) {
      // console.log(i, thingsToPrint[i]);
      doSomething(thingsToPrint[i]);
  }
}

var printItem = function(item) {
  console.log(item);
}

forEachBackward(data, printItem);
*/

/*
[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/