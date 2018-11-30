// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}

	// NOTE: In an interview setting if the interviewer
	// is asking to make very specific methods, you
	// could ask if we are going to to make more generic ones later
	// in this case .getAt could have also been used for .getFirst and
	// .getLast instead of writing new logic

	getFirst() {
		return this.getAt(0);
	}

	getLast() {
		const size = this.size();
		return this.getAt(size - 1);
	}

	// getFirst() {
	// 	return this.head;
	// }
	//
	// getLast() {
	// 	let node = this.head;
	// 	if (!node) return null;
	// 	while(node) {
	// 		if (!node.next) return node;
	// 		node = node.next;
	// 	}
	// }

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) return;
		this.head = this.head.next;
	}

	removeLast() {
		 if (!this.head) return;
		 if (!this.head.next) {
			 this.head = null;
			 return;
		 }

		 let previous = this.head;
		 let node = this.head.next;
		 while (node.next) {
			 previous = node;
			 node = node.next;
		 }
		 previous.next = null;
	}

	insertLast(data) {
		const lastNode = this.getLast();
		if (lastNode) {
			lastNode.next = new Node(data, null);
		} else {
			this.head = new Node(data, null);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter === index) return node;
			node = node.next;
			counter++;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) return;
		if (index === 0) {
			this.head = this.head.next;
			return;
		}
		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) return;
		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data, null);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

	forEach(fn) {
		let index = 0;
		let node = this.head;
		while(node) {
			fn(node, index)
			node = node.next;
			index++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}

}

module.exports = { Node, LinkedList };
