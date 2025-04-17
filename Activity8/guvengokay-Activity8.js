var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	$("name").focus();
};

function displayResults() {
	var average = 0;
	var total = 0;
	var highest = 0;
	var highestIndex = 0;
	
	for(var i = 0; i < scores.length; i++) {
		total += scores[i];
		if (scores[i] > highest) {
			highest = scores[i];
			highestIndex = i;
		}
	}
	
	average = total / scores.length;
	$("results").innerHTML = "<h2>Results</h2>" + 
		"<p>Average score = " + average.toFixed(2) + "</p>" + 
		"<p>Highest score = " + names[highestIndex] + " with a score of " + highest + "</p>";
}

function displayScores() {
	$("scores_table").innerHTML = "<h2>Scores</h2>";
	
	var tableHTML = "<tr><th style='width:50%; text-align:left'>Name</th><th style='width:50%; text-align:left'>Score</th></tr>";
	
	for(var i = 0; i < names.length; i++) {
		tableHTML += "<tr><td style='text-align:left'>" + names[i] + "</td><td style='text-align:left'>" + scores[i] + "</td></tr>";
	}
	
	$("scores_table").innerHTML += tableHTML;
}

function addScore() {
	var name = $("name").value;
	var score = parseInt($("score").value);
	
	if (name === "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score");
		return;
	}
	
	names.push(name);
	scores.push(score);
	
	$("name").value = "";
	$("score").value = "";
	
	$("name").focus();
}


