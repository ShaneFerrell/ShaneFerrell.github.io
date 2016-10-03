var curBut = 0;

function toProjects(){

	if(curBut == 0){

		document.getElementById("AboBut").style.background = "#00cc7a";
		document.getElementById("AboBut").style.color = "#343434";

		document.getElementById("ProBut").style.background = "#333333";
		document.getElementById("ProBut").style.color = "#999999";
				
		$(document).ready(function(){

			$("#content").hide();
		    $('#content').load('about.html');
		    $("#content").fadeIn(750);

		});

		curBut = 1;
	}
}

function toAbout(){

	if(curBut == 1){

		document.getElementById("AboBut").style.background = "#333333";
		document.getElementById("AboBut").style.color = "#999999";

		document.getElementById("ProBut").style.background = "#00cc7a";
		document.getElementById("ProBut").style.color = "#343434";
				
		$(document).ready(function(){

			$("#content").hide();
		    $('#content').load('projects.html');
		    $("#content").fadeIn(750);
		});

		curBut = 0;
	}
}