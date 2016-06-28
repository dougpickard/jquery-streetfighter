$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		// alert('mouse entered');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	})	
	.mouseleave(function(){
		// alert('mouse left');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '520px');

			});				
	})

	.mouseup(function(){
		// console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position

	})

	$('.hulk-ryu').mouseenter(function() {
		// alert('mouse entered');
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();

	})	
	.mouseleave(function(){
		// alert('mouse left');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	$('.hulk-ryu').mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '520px');

			});				
	})

	.mouseup(function(){
		// console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position

	})


	$(document).on('keydown', function(e){
		if(e.keyCode == 88) {
			// alert('Alert')
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}

	})

	$(document).on('keyup', function(e){
		if(e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			$('.ryu-ready').hide();

		}

	})

});



function playHadouken(){
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}


