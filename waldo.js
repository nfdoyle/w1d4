// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  /*for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {*/
  arr.forEach(function(name) {
    console.log(name);
    if (name === "Waldo") {
      found(arr.indexOf(name));   // execute callback
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him in index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/*var names = ['Steve', 'Tony', 'Bruce', 'Thor', 'etc.'];

names.forEach(function(name) {
  console.log(name);
})
*/