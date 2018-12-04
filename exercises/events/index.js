// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

// // NOTE: MY SOLUTION
class Events {
	constructor() {
		this.events = {}
	}

  on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = [];
		this.events[eventName].push(callback);
	}

  trigger(eventName) {
		if(!this.events[eventName]) return;
		this.events[eventName].forEach(callback => callback());
	}

  off(eventName) {
		delete this.events[eventName];
	}
}

module.exports = Events;

// // NOTE: CLASS SOLUTION
// class Events {
// 	constructor() {
// 		this.events = {}
// 	}
//   // Register an event handler
// 	on(eventName, callback) {
// 		if (this.events[eventName]) {
// 			this.events[eventName].push(callback)
// 		} else {
// 			this.events[eventName] = [callback];
// 		}
// 	}
//
//   // Trigger all callbacks associated
//   // with a given eventName
// 	trigger(eventName) {
// 		if (this.events[eventName]) {
// 			for (let cb of this.events[eventName]) {
// 				cb();
// 			}
// 		}
// 	}
//
//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
// 		delete this.events[eventName];
// 	}
// }
