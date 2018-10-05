$('#submit').click(function(){
		for (var i = 1; i <= 5; i++) {
			if ($('#id' + i).val() == "") {
				$('.class' + i).html('Vui lòng nhập');
		} else {
			$('.class' + i).html('');

		if ($('#id3').val() > $('#id2').val()){
				$('.class3').html('Số trẻ em không được quá số người lớn');
			} else{
				$('.class3').html('');
			}

			var today = Date.now();
			var day_come = new Date($('#id4').val());
			var day_left = new Date($('#id5').val());
			if (today > day_come){
				$('.class4').html('Ngày đến phải lớn hơn hoặc bằng hiện tại');
			} else{
				$('.class4').html('');
			}
			if (day_come > day_left){
				$('.class5').html('Ngày đi phải lớn hơn hoặc bằng ngày đến');
			} else{
				$('.class5').html('');
			}
		}
	}
});