
function binarySearch(arr,item){
	let high = arr.length-1;
	let low = 0;
	let mid = 0;

	while(low <= high){
		mid = Math.floor((high+low)/2);

		if(arr[mid] == item){
			return true;
		}else if(item < arr[mid]){
			high = mid - 1;
		}else{
			low = mid + 1;
		}
	}

	return false;
}

var array = [10,3,5,12,90,52,5,2,345,98,45,12];

let sorted = array.sort((a,b)=> {return a-b});
console.log(sorted);
let result = binarySearch(sorted,34);
console.log(result);