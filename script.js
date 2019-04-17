function budget(){
	var x = document.getElementById("income").value;
	var	y = document.getElementById("expense").value;
	if (x > y) {
		var z = x - y;
	}
	if (y > x) {
		var z = y - x;
	}
	if (x == y) {
		var z = "0.00";
	}
	document.getElementById("value").innerHTML = z;
}