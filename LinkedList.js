class Node{
	constructor(element){
		this.element = element;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head=null;
		this.size=0;
	}

	add(element){
		var node = new Node(element);
		

		if(this.head == null){
			this.head = node;
		}else{
			var current = this.head;
			
			// travelling to end of the node and assigning as current
			while(current.next){
				current = current.next;
			}
			// Adding new node to the current node
			current.next = node;
		}
		this.size++;
	}

	inserAtIndex(element,index){
		if(index>0 && index > this.size){
			return false
		}else{

			var node = new Node(element);

			var curr,prev;
			let it = 0;
			curr = this.head;
			
			if(index == 0){
				node.next = curr;
				this.head = node;
			}else{
				curr = this.head;
				
				while(it<index){
					it++;
					prev = curr;
					curr = curr.next;
				}
				// console.log(curr)
				node.next = curr;
				prev.next = node;
			}

			this.size++;
		}
	}

	removeFrom(index){
		if(index > 0 && index > this.size){
			return -1;
		}else{
			var prev,curr,it=0;
			curr = this.head;
			prev = curr;

			if(index == 0){
				this.head = curr.next;
			}else{
				while(it<index){
					it++;
					prev = curr;
					curr = curr.next;
				}

				prev.next = curr.next;
			}
			this.size--;
			return curr.element;
		}
	}

	removeElement(element){
		var curr = this.head;
		var prev = null;

		while(curr.next){
			if(curr.element === element){
				if(prev == null){
					this.head = curr.next;
				}else{
					prev.next = curr.next;
				}
				this.size--;
				return curr.element;
			}
			prev = curr;
			curr = curr.next;
		}
		return -1;
	}

	printList(){ 
	    var curr = this.head; 
	    var str = ""; 
	    while (curr) { 
	        str += curr.element + " "; 
	        curr = curr.next; 
	    } 
	    console.log(str); 
	} 
}

module.exports = LinkedList;