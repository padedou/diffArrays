function diffArrays(arrays) {
	var resultArr = [];
	var arraysLength = arrays.length;

	for(var i = 0; i < arraysLength; i++){
		var testingArrays = arrays.slice(0); // copy the arrays
		var currentArray = testingArrays.splice(i, 1)[0]; // remove  and keep the 'current' array

		currentArray.map(function(el){
			var idx = [];
			// check if the el exists in the other arrays
			testingArrays.map(function(ta){
				idx.push(ta.indexOf(el));
			});
			if(idx.every(function(element){
				return element < 0;
			})){
				resultArr.push(el);
			}
		});
	}

	return resultArr;
}
