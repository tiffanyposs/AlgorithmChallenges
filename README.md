# AlgoCasts

### Getting Started

To run you test you can run something like the below in the module you're working within

```
$ jest reversestring/test.js --watch
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

#### Fib Case

Many interviews will ask the Fibonacci question. Often they will ask you

This recursive solution is the most clever and often asked for in an interview, but it's not only not easy to understand but also has a worse runtime compared to the basic for loop. This might be worth pointing out in an interview setting.

This solution take around 1000 ms to complete if `n` = 16. This has an `2^n` or `Exponential` runtime.

```
function fib(n) {
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
}
```

This solution takes < 1ms to complete if `n` = 16, this is 1000 x shorter than the above example. This is a `n` or `Linear Time`:

```
function fib(n) {
	const result = [0, 1];
	for (let i = 2; i <= n; i++) {
		const a = result[i - 1];
		const b = result[i - 2];
		result.push(a + b);
	}
	return result[n];
}
```
##### Memoization

* `memoization` - Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again.

Below is a generic memoization function that will work with many problems. It prevents calling the same function with the same arguments more than once.

```
function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) return cache[args];
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	}
}

function fib(n) {
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

```

#### Space Complexity

How much more memory is required by doubling the problem set?


### Data Structures

Functionality of a JS array:

#### Queue

Like waiting in line to buy tickets, following a `First In First Out` or `FIFO` principal. The process of putting a record into a queue is called `enqueueing` or `adding`, while removing a record is called `dequeuing` or `removing`. In JavaScript, you use arrays as a queue. You might make a queue `class` and use the `.unshift` method to add to the queue and the `.pop` method to remove from the queue.

#### Stack

Adding a record to a stack is called `pushing` and removing is called `popping`. A `stack` follows a `First In Last Out` or `FILO` principal. "The last record in is the first record out". If you add cookies to the cookie jar you will eat the ones at the top.


#### Linked Lists

A `Linked List` is a list of nodes list together.

* `Head Node` - First node of a linked list
* `Node` - link or piece of data and reference
* `Data` - data that the node contains
* `Reference to Next Node` - points to the next node in the linked list
* `Tail` - Last node of a linked list, always have a reference of *null* since three is no next node

Very basic linked list example:

```
const nodeOne = {
	data: 123
};

const nodeTwo = {
	data: 456
}

const nodeThree = {
	data: 789
}

nodeOne.next = nodeTwo;

nodeTwo.next = nodeThree;
```

#### Trees

There are parent, child relationship in a tree. Children have one parent, and parent can have many children. A node can also have a sibling, but it has to be from the same parent. You can iterate through a tree, also known as traversal of a tree.

* `Breadth-First Traversal` - Iterate at each level of the tree regardless of the parents, left to right. `[0, 1, 2, 3, 4, 5, 6, 7, 8]` would be the order below.
* `Depth-First Traversal` - You iterate left to right down each tree structure. `[0, 1, 3, 4, 2, 5, 7, 8, 6]`

```
     0
     ^
   1   2
   ^   ^
  3 4 5 6
      ^
     7 8
```

##### Binary Search Tree

Every parent can only have 2 children, and there are a set of rules for the type of children they can have.

```
     10
     ^
  0      12
  ^       ^
-1  5   11 20
            ^
          17 99
```

### ES6 Generators

#### Examples

`final = { value: 30, done: true }`

```
function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
generator.next();
const final = generator.next(10);

```

`numbers = [1, 2, 3, 4, 5, 6]`

```
function *list() {
  yield 1;
  yield 2;
  yield 3;
  yield 5;
  yield 6;
}

const generator2 = list();

const numbers = [];
for (let value of generator2) {
  numbers.push(value);
}

numbers;

```

`values = [1, 2, 3, 4, 5, 6, 7]`

```
function *moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

function *numbers() {
  yield 1;
  yield 2;
  yield* moreNumbers();
  yield 6;
  yield 7;
}

const generator = numbers();

let values = [];
for (let value of generator) {
  values.push(value);
}

values;
```
`values = [1, 2, 4, 3]`

```
class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3)
]);

const values = [];
for (let value of tree.printValues()) {
  values.push(value);
}
values;

```
