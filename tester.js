var LinkedList = require('./LinkedList.js');
var Stack = require("./Stack");
var Queue = require("./Queue");

var queue = new Queue();

queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(5);
queue.enQueue(4);
queue.enQueue(8);

console.log(queue.printQueue());

queue.deQueue();

console.log(queue.printQueue());
console.log("front -> ",queue.front());

console.log(queue);