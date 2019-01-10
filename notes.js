function greet (name) {
console.log('Hello ' + name);
}

console.log('Looking up greet: ', greet);

var sayHello = greet;

console.log('Looking up sayHello: ', sayHello);

sayHello("Geralt of Rivia");

var sayHello = function (name) {
  return "Hello, " + name + '!';
};

console.log(sayHello('Han Solo'));

//

function goToKitchenAndThen(doSomething) {
  console.log('Robot going to kitchen');
  doSomething();
}

function refillCoffee() {
  console.log('Robot filling coffee');
}

function cleanSink() {
  console.log('Robot cleaning sink');
}

goToKitchenAndThen(refillCoffee);

//

var names = ['Steve', 'Tony', 'Bruce', 'Thor', 'etc.'];

names.forEach(function(name) {
  console.log(name);
})

//

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

//

var items = [1, 2, 3, 4, 5, 6];

var odds = items.filter(function(nuber) {
  return number %2 !== 0;
})

console.log(odds);

/*
1. Functions can be values and therefore assigned to variables or passed into toher functions.
2. Functions cna be dfeiend iwth a name or without (anonomyous0
3. When we find ourselves needing more generic function lets take advantage of eing able to
pass functions into more generic functions. These generic functions Very common use cases of such HO functiosn are `forEach` and are called "Hiigher
Order Functions"which are funcs that operate on other fucns.
4.