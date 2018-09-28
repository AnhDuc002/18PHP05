var result = '';
function addValue(val){
	result =  result + val;
	document.getElementById('result').innerHTML = result;
}
function cal(){
    result = eval(result);
    document.getElementById('result').innerHTML = result;
}
function deleteCal(){
	document.getElementById('result').innerHTML = '';
	result = '';
}
function Back(){
    var n = result.length;
    newResult = result.substring(0, n - 1);
    document.getElementById('result').innerHTML = newResult;
    result = newResult;
}

