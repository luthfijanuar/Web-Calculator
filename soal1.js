function insert(num){
	document.kalkulator.hasil.value = document.kalkulator.hasil.value+num;
}

function equal(){
	const exp = document.kalkulator.hasil.value;
	if (exp) {
		document.kalkulator.hasil.value = eval(exp);
	}
}

function clear(){
	document.kalkulator.hasil.value = "";
}