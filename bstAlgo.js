class Node{
	constructor(data){
		this.data=data;
		this.left=null;
		this.right=null;
	}
}

class Bst{
	constructor(){
		this.root = null;
	}

	add(data){
		
		if(this.root == null){
			this.root = new Node(data);
		}else{
			return this.insertNode(data,this.root);
		}
	}

	insertNode(data,node){
		if(data < node.data){
			if(node.left == null){
				return node.left = new Node(data);
			}else if(node.left !== null){
				return this.insertNode(data,node.left);
			}
		}else if(data > node.data){
			if(node.right == null){
				return node.right = new Node(data);
			}else if(node.right !== null){
				return this.insertNode(data,node.right);
			}
		}
	}

	findMin(){
		let current = this.root;
		while(current.left!==null){
			current = current.left;
		}
		return current.data;
	}

	findMax(){
		let current = this.root;
		while(current.right!==null){
			current = current.right;
		}
		return current.data;
	}

	find(data){
		let current = this.root;
		while(current.data!=data){
			if(data < current.data){
				current = current.left;
			}else{
				current = current.right;
			}
			if(current == null){
				return null
			}
		}
		return current;
	}
}

var bst = new Bst();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.find(6));