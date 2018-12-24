function minimumMovesToDistributeCoin(arr){
	let moves = 0;
	let left = 0;
	if(arr.length<2){
		return arr;
	}
	console.log(arr)
	for(let index=0; index<arr.length; index++){
		if(arr[index]==0){
			if(arr[index+1]>1){
				arr[index] = 1;
				arr[index+1] = arr[index+1] - 1;
				moves++;
			}else if(arr[index-1]>1){
				arr[index] = 1;
				arr[index -1] = arr[index-1] - 1;
				moves++;
			}else{
				left++;
			}
		}else if(arr[index]>1 && arr[index+1] == 1){
			let temp = arr[index];
			arr[index] = arr[index+1];
			arr[index+1] = temp;
			moves++;
		}else if(arr[index]>1 && arr[index+1] == 0){
			let temp = arr[index];
			arr[index] = 1;
			arr[index+1] = temp - 1;
			moves++;
		}else{
			left ++;
		}

		if(index == arr.length-1 && left >= 1){

		}
		console.log(arr)
	}
	console.log(left)
	console.log(checkCoinBalance(arr))
	return moves;
}

function checkCoinBalance(arry){
	for(let data in arry){
		if(data == 0){
			return false;
		}
	}

	return true;
}

moves = minimumMovesToDistributeCoin([0,0,0,0,9,0,0,0,0]);
console.log(moves);