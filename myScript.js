
	var bot = new RiveScript();
	bot.loadFile("brain.rive", brainLoad, brainError);


	

	

	function brainLoad () {
		console.log("Hey it is working");
		bot.sortReplies();
	}

	function brainError(){
		console.log("Hey we got an error");
	}

	function botTime(){
		var text = document.getElementById("userText").value;
		console.log(text);
		timeline(text);
		var reply = bot.reply("local-user", text);
		console.log("The bot says: " + reply);
	    timelineBot(reply);

	}

	function timeline(text){
		var output = document.createElement("P");
	    var t = document.createTextNode("Andres: " +text);
	    output.appendChild(t);
	    document.getElementById("myDIV").appendChild(output);
	}

	function timelineBot(text){
		var botdiv = document.createElement("DIV");
		botdiv.className = "botDiv";
		var output = document.createElement("P");
	    var t = document.createTextNode("Bot: " +text);
	    output.appendChild(t);
	    botdiv.appendChild(output);
	    document.getElementById("myDIV").appendChild(botdiv);
	    //Keeps the scroll bar on the bottom
	    var myDivs = document.getElementById("myDIV");
		myDivs.scrollTop = myDivs.scrollHeight;
		//end scroll bar on the bottom
		document.getElementById("userText").value = " ";
	}

	
