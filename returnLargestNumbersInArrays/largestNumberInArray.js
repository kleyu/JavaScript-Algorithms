function largestOfFour(arr) {
	var largest = 0;
	var largestArr = [];
	for (var i = 0; i < arr.length; i++) {
		largestArr.push(Math.max(...arr[i]));
	}
	return largestArr;
}

// You can do this!

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);
