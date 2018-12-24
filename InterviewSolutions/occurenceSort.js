function occurenceSort(arr){
	

	arr.sort();
	/*console.log(arr)*/

	var set = new Set(arr);
	console.log(set);
	
	let list = [];
	let occurence = 0;
	for(let data of set){
		let map = {};
		map.key = data;
		map.value = getOccurence(data,arr);

		list.push(map);
	}

	console.log(list)

	list.sort((a,b)=>{
		return a.value < b.value;
	});
	var resultArry = [];
	list.forEach((obj)=>{
		for(let index=0;index<obj.value;index++){
			resultArry.push(obj.key);
		}
	});

	console.log(resultArry);
}

function getOccurence(data,arr){
	let occurence = 0;
	for(let index=0; index<arr.length; index++){
		if(data == arr[index]){
			occurence++;
		}
	}
	return occurence;
}

occurenceSort([ 2, 2, 3, 4, 5, 12, 2, 3, 3, 3, 12 ]);