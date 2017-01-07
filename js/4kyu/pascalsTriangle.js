function pascalsTriangle(n) {
	var arr = new Array(n);
	for (x = 0; x < arr.length; x++){
		arr[x] = new Array(x+1);
		for (y = 0; y < arr[x].length; y++){
			arr[x][y] = (y == 0 || y == arr[x].length-1) ? 1 : arr[x-1][y-1] + arr[x-1][y];
		}
	}
	return arr.reduce(function(a, b) { return a.concat(b)}, []);
}