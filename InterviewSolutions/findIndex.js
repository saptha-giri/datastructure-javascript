
function findIndex(firstArray,secondArray){
	if(firstArray.length>secondArray.length){
		getIndex(firstArray,secondArray);
	}else{
		getIndex(secondArray,firstArray);
	}
}

function getIndex(firstArray,secondArray){
	let foundindex,element;
	for(let index=0;index<firstArray.length;index++){
		if(!isAvailable(secondArray,firstArray[index])){
			foundindex = index+1;
			element = firstArray[index];
			break;
		}
	}

	console.log(element+" is the extra element at index "+foundindex);
}

function isAvailable(arry,data){
	for(let i=0; i<arry.length;i++){
		if(arry[i]==data){
			return true;
		}
	}
	return false;
}

findIndex([ -1, 0, 3, 2 ],[ 3, 4, 0, -1, 2 ])