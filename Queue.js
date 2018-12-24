class Queue{
	constructor(){
		this.list=[];
	}

	enQueue(item){
		this.list.push(item);
	}

	deQueue(){
		if(this.list.length == 0)
			return "Underflow";
		return this.list.shift();
	}

	front(){
		if(this.isEmpty())
			return "Queue is empty";
		return this.list[0];
	}

	isEmpty(){
		return this.list.length == 0;
	}

	printQueue(){
		var str = '[ ';
		for(var i=0; i<this.list.length; i++){
			str += this.list[i] + " ";
		}

		return str += "]";
	}
}

module.exports = Queue;