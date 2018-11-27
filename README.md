# AlgoCasts

### Getting Started

To run you test you can run something like the below in the module you're working within

```
$ node jest reversestring/test.js --watch
```


To run a debugger in node, you can put in a debugger, and run the below command.

```
$ node inspect index.js
```
To continue execution, run below

```
$ cont
```

To inspect a variable

```
$ repl
```


### Runtime Complexity and Space Complexity

How much more processing power/time is required to run your algorithm if we double the inputs?

#### Types of Runtimes


* `1` or  `Constant Time` - No matter how many elements, it will always take the same amount of time
* `log(n)` or `Logarithmic Time` - If doubling the number of elements doesn't quite double the amount of work. (searching operations)
* `n` or `Linear Time` - Iterating through all the elements in a collection of data.
* `n*log(n)` or `Quasilinear Time` - If doubling the number of elements doesn't double the amount of work, 1 + a little bit. (sorting)
* `n^2` or `Quadratic Time` - Every element in a collection has to be compared to every other element (handshake problem)
* `2^n` or `Exponential Time` - If you add a single element to a collection, the processing power requires double

#### Big 'O' Notation

What is the runtime of your algorithm

* `O(n)` - Linear
* `O(1)` - Constant
* `O(n^2)` - Quadratic


#### Identifying Runtime Complexity

* Iterating with a simple for loop through a single collection? - Probably `O(n)`
* Iterating through half a collection? - Probably `O(n)`
* Iterating through two 'different' collections with separate for loops (not nested)? - `O(n+m)`
* Two nested for loops iterating over the same collection? - `O(n^2)`
* Two nested for loops iterating over different collections? - `O(n*m)`
* Sorting? - `O(n*log(n))`
* Searching a sorted array? - `O(log(n))`


#### Runtime Examples

In the below case adding 1 character to the `str` param will increase the loops by 1. This would be called an `n runtime`  or `linear runtime` (one to one ratio).

```
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed;
}
```

In this example increasing `n` exponentially increases the _stuff_ the algorithm has to do. Since the amount of things the runtime has to do is `n*n`, this is called a `n^2 runtime` or `quadratic runtime`.

* if `n` = 2 ----> 4 things
* if `n` = 3 ----> 9 things
* if `n` = 4 ----> 16 things
* if `n` = 5 ----> 25 things
* etc

```
function steps(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';
		for (let column = 0; column < n; column++) {
			if (column <= row) stair += '#';
			else stair += ' ';
		}
		console.log(stair);
	}
}
```


#### Space Complexity

How much more memory is required by doubling the problem set?
