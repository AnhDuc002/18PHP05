function sumNumber(a, b){
	return parseInt(a) + parseInt(b);
}

$('#soA').keyup(function(){
	var a = $('#soA').val();
	var b = $('#soB').val();
	$('#result').html(sumNumber(a,b));
});

$('#soB').keyup(function(){
	var a = $('#soA').val();
	var b = $('#soB').val();
	$('#result').html(sumNumber(a,b));
});

// Dùng cho nút click

$("#ketqua").click(function() {
	var a = $('#soA').val();
	var b = $('#soB').val();
	$('#result').html(sumNumber(a,b));
});

