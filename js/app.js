$(function(){
	var output = "";
	for(var i = 1; i <= 100; i++) {
		if (i % 3 == 0) {
			output += "Fizz";
		}
		if (i % 5 == 0) {
			output += "Buzz";
		}
		(output === "") ? $('body').append('<p>' + i + '</p>') : $('body').append('<p>' + output + '</p>');
		output = "";
	}
})