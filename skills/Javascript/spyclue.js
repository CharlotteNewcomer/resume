/*jshint esversion: 6 */
//have show when button is pressed- for use if cards in game are missing or the black light does reveal the answer anymore
//need to add button and text box to show mission
const missionCards=
	["Meet Peacock in Berlin",
	"Meet Green in Berlin",
	"Meet Scarlet in Berlin",
	"Meet Mustard in New York",
	"Meet Scarlet in New York",
	"Meet Black in New York",
	"Meet Black in Miami",
	"Meet White in Miami",
	"Meet Green in Miami",
	"Meet Mustard in Cape Town",
	"Meet Plum in Cape Town",
	"Meet Black in Cape Town",
	"Meet White in Moscow",
	"Meet Peacock in Moscow",
	"Meet Plum in Moscow"];
let use =[];
let j =0;
//randomly picks mission card and displays it while keeping track of which have been used and how many and disabling the button when all have been used
function giveMission(){
	const len=missionCards.length;
	//randomly selecting a message
	let ranN=Math.floor(Math.random()*len);
	if (j<len){
		//checking if the message was used
		while (use.includes(ranN)){
			ranN=Math.floor(Math.random()*len);
		}
		j++;
		console.log(ranN +" - "+j+'-'+len);
		//sending an alert for that message and adding it to the used array	
		document.getElementById("missioncard").value=missionCards[ranN];
		use.push(ranN);
	} else {
		document.getElementById("missioncard").value='All mission cards have been used';
		document.getElementById('btnMission').disabled=true;	
		use=[];
	}

}
//shown every 6-8 min... #1 sent at start but rest sent at random... board normally had a service that would randomly text these to you but it no longer is in use.  Instead of texting it to you this will send you an alert.
const textMessage=
	["Welcome to the dark, devious world of CLUE - Secrets & Spies! Start playing as normal- more info will be sent to you soon!",
	"Computer hack! If Plum is NOT activated, he gets1 point. If he IS, any other agent of ur choice gets 1pt.",
	"Hit 'em hard! If Agt Mustard is NOT activated, he gets1pt. If he IS, any agent of ur choice gets 1pt.",
	"Stealth tactics! If Agt White is NOT activated, she gets1 pt. If she IS, any agent of ur choice gets 1 pt.",
	"Deadly charms! If Agt Scarlet is NOT activated, she gets1 pt. If she IS, an agent of ur choice gets 1 point!",
	"The con is on! If Agt Green is NOT activated, he gets1 pt. If he IS, any agent of ur choice gets 1 pt.",
	"Surveillance! If Agt Peacock is NOT activated, she gets1 pt. If she IS, any agent of ur choice gets 1 pt.",
	"It's not over yet! Move Agt Black 1 space UP the track.",
	"Lockdown! Close LA 4 rest of game. Put white 'X' token on this city. Agts can exit but not re-enter.",
	"Lockdown! Close off PARIS 4 rest of game. Put white 'X' token on this city. Agts can exit but not re-enter.",
	"Lockdown! Close Tokyo 4 rest of game. Put white 'X' token on this city. Agts can exit but not re-enter.",
	"Lockdown! Close Singapore 4 rest of game. Put white 'X' token on this city. Agts can exit but not re-enter.",
	"Lockdown! Close London 4 rest of game. Put white 'X' token on this city. Agts can exit but not re-enter.",
	"Lockdown! Close Buenos Aires 4 rest of game. Put white 'X' token on this city. Agts can exit but not re-enter.",
	"Stopped at customs! All scan ur Activity cards. If u have any laptops u must discard these & take new ones!",
	"Stopped at customs! All scan ur Activity cards. If u have any briefcases u must discard these & take new ones!",
	"Stopped at customs! All scan ur Activity cards. If u have any folders u must discard these & take new ones!",
	"Stopped at customs! All scan ur Activity cards. If u have any diamonds u must discard these & take new ones!",
	"Stopped at customs! All scan ur Activity cards. If u have any guns u must discard these & take new ones!",
	"Stopped at customs! All scan ur Activity cards. If u have any robots u must discard these & take new ones!",
	"Stopped at customs! All scan ur Activity cards. If u have any phones u must discard these & take new ones!",
	"Cape Town caper! Move 2 agents of ur choice 2 CAPE TOWN",
	"Putin strikes again! Move 2 agents of ur choice to MOSCOW.",
	"Trouble Down Under! Move 2 agents of ur choice to SYDNEY.",
	"Pack some heat! Move 2 agents of ur choice to MIAMI.",
	"Take a Bite out of the Big Apple! Move 2 agents of ur choice to NEW YORK.","High Speed Hijinks on the Autobahn. Move 2 agents of ur choice to BERLIN.",
	"Rush to Russia! Move 1 agent of ur choice 2 MOSCOW.",
	"Trouble down under! Move 1 agent of ur choice 2 SYDNEY.",
	"Double Agent extraction in Germany! Move 1 agent of ur choice 2 BERLIN.",
	"South Beach in danger! Move 1 agent of ur choice 2 MIAMI.",
	"Time Square riots! Move 1 agent of ur choice 2 NEW YORK.",
	"Stolen military secrets in South Africa! Move 1 agent of ur choice 2 CAPE TOWN.",
	"Code Breaker! Take free peek at the Secret Mtg card 2 c which agent's on there. Don't tell any1!",
	"Mtg Aborted! Discard current Secret Meeting card & turn next one face-up.",
	"Reassignment! Swap ur Mission card with any other player's card. DO NOT look at the cards b4 u choose!",
	"Parachute drop. Move 1 agent of ur choice to any city on the board.",
	"Double cross! Steal a completed Secret Mtg card from any other player - it's urs now!",
	"Web virus! All scan ur Activity cards. If u have any laptops u must discard those cards & take new ones!",
	"Kidnap! Move 1 agent of ur choice 2 a city of ur choice!",
	"Who can u trust? Choose 1 player. U must secretly reveal ur secret identities 2 each other.",
	"Private jet! Move 2 agents 2 the Secret Mtg city. Scan mtg card. If correct agents are there, score as usual.",
	"New intelligence! Move item from any agent's space onto an empty city of ur choice.",
	"Cover's blown! U must reveal ur secret identity 2 the other players but you score 1pt 4 ur agent.",
	"Dirty tricks! Steal a completed Mission card from any other player - it's urs now!",
	"Easy as spy! If any agent has 1 of the items on ur current Mission card, you completed the mission.",
	"Cover's blown! Pick a player. They must reveal their secret identity 2 every1, but score 1pt 4 their agent.",
	"Back 2 base! Move all agts back 2 their home cities. If a city has a white 'X' token, that agt doesnt move.",
	"Imposter! Swap ur Secret ID card with another player's Secret ID card. Don't look @the cards b4 u choose!",
	"Time 2 use ur karate moves! Move 2 agents of ur choice to Tokyo."];
let playing=false;
let i;
let randomTimeOut;
let randomTime=Math.floor(Math.random()*120000); 
let used=[];
// randomly selects textmessage and sends it in an alert after a rondom amount of time between 6-8 min
function randomCard (){
	const numb=textMessage.length;
	//randomly selecting a message
	let ranNum=Math.floor(Math.random()*numb);
	playSound();
	console.log (used);
//checking if the message was used
	while (used.includes(ranNum)){
		console.log (ranNum);
	 	ranNum=Math.floor(Math.random()*numb);
	}
	//sending an alert for that message and adding it to the used array	
		alert(textMessage[ranNum]);
		used.push(ranNum);
		//if all the messages have not been used then will add 1 to the number of cards used, and send anew message after a random amount of time between 6-8min
		if (i<numb){
			i++;
			randomTime=Math.floor(Math.random()*120000); 
			randomTime+=360000;
			console.log((randomTime/1000)/60 +'minutes');
			//const action = randomCard();
			randomTimeOut = setTimeout(randomCard, randomTime);
		}
}
//plays a ping sound to alert that a message have been sent/received
function playSound(){
	document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="bing.mp3" type="audio/mpeg" /><source src="bing.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="bing.mp3" /></audio>';

}
function playGame(){
	//checks if game is started- if not started then playing is marked to show you have started the game, i is reset to 0, ping is played, message sent and timer to send next message is started- if game already started then playing is marked to show it has stopped, timer is cleared and  i is set to 49 to ensure no more messages are sent and used array is emptied
	if (playing ===false){
		playing=true;
		i=0;
		playSound();
		alert(textMessage[0]); 
		used.push(0);
		randomTime+=360000;
		setTimeout(randomCard, randomTime);
	}else {
			playing = false;
			clearTimeout(randomTimeOut);
			i=49;
			console.log('timeout should now be stopped');
			used=[];
			console.log (used);
	}
	
}