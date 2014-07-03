
var consoleLogThunk = function(msg) {
  return function(){
	console.log(msg);	
  };
};
 
var generator = function*() {
  yield consoleLogThunk("Yo");
  yield consoleLogThunk(" Dawg");
  yield consoleLogThunk(" !!!");
};
 
var delegator_function = function*() {
	yield consoleLogThunk("I yielded before delegated yield");
  	yield* generator();
	yield consoleLogThunk("I yielded after delegated yield");

};
 
var k = delegator_function();
k.next().value();
k.next().value();
k.next().value();
k.next().value();
k.next().value();
console.log(k.next()); // If you call k.next().value() then it will throw an error as value is undefined which is not a function