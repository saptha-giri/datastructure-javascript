function primeNumbers() {
	
    array = [];
    for (var i = 2; i < 1000; i++) {
		var divisorFound = false;
        for (var count = 2; count < i; count++) {
            if (i % count === 0) {
                divisorFound = true;
                break;
            }
        }
        if (divisorFound == false) {array.push(i);}
    }
    
    return array;
}

console.log(primeNumbers());