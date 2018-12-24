function inputStreamSort(arry){
	let result = [];

	result = arry[0].concat(arry[1].concat(arry[2]));

	result.sort((a,b)=>{return a-b })
	console.log(result);
	console.log(Bst(result,15));
}

function Bst(arr,item){
	first = 0;
	last = arr.length-1;
	mid = 0;

	while(first <= last){
		mid = Math.floor((last+first)/2);
		if(arr[mid] == item){
			return true;
		}else if(item < arr[mid]){
			last = mid-1;
		}else{
			first = mid+1;
		}
	}
	return false;
}


streams = [[2,4,5,6,7,8], [1,3,9,12], [10,11,13,14]];
inputStreamSort(streams);