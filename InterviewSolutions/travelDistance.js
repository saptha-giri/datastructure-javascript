function travelDistance(maxDistance,forwardRouteList,backwardRouteList){

	let finalResult = [];

	while(finalResult.length==0){
		for(let i=0; i<forwardRouteList.length; i++){
			for(let j=0; j<backwardRouteList.length; j++){
				let result = [];
				let forwardRoute = forwardRouteList[i];
				let backwardRoute = backwardRouteList[j];
				if(maxDistance == (forwardRoute[1]+backwardRoute[1])){
					result.push(forwardRoute[0]);
					result.push(backwardRoute[0]);

					finalResult.push(result);
				}
			}
		}
		maxDistance--;
	}
	return finalResult;
}


console.log(travelDistance(20,[[1,8],[2,15],[3,9]],[[1,8],[2,11],[3,12]]))