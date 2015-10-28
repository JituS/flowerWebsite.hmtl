// var fs = require("fs");

var timer = function(a){
	setTimeout(function(){$(a).show()},1000);
}
$(document).ready(function(){
    $("#ppppp").click(function(){
        $("#ppppp").hide();
        timer("#ppppp");
    });
});


$(document).ready(function(){
    $("#u").click(function(){
    	$("#name").val("ghjq");
    	$("#q").val("ghjq");
    });
});
