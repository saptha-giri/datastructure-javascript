class Stack{
	constructor(){
		this.list = [];
	}

	push(item){
		this.list.push(item)
	}

	pop(){
		if(this.list.length == 0)
			return "Underflow"
		return this.list.pop();
	}

	peek(){
		return this.list[this.list.length-1]
	}
	
	isEmpty(){
		return this.list == 0;
	}

	printStack(){
		let str = '';
		for(let index=this.list.length-1; index>=0; index--){
			str += "\n"+this.list[index];
		}
		return str;
	}
}

module.exports = Stack;