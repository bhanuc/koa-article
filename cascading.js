var koa = require('koa')();

koa.use(function* (next) {
			// do something before yielding/passing to the next generator function in line.
		console.log(“A”); // We will use console.log to better understand the execution flow.
	Yield next;
			//do something when the execution returns upstream( from last to first)
		console.log(“B”);
});
koa.use(function* (next) {
			// do something before yielding/passing to the next generator function in line.
		console.log(“C”); 
	Yield next;
			//do something when the execution returns upstream( from last to first)
		console.log(“D”);
});
koa.use(function * () {
			// do something before yielding/passing to the next generator function in line.Here this is the last function in the downstream
		console.log(“E”);
	this.body = “hey guys”
		console.log(“F”); //First event of upstream (from the last to first)
	});

koa.listen(3000);
