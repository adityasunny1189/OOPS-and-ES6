(function() {
    var score = Math.random() * 10;
    console.log(score);
})();

//Parameterized

(function(goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck)
})(4);
