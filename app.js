// Set the time for each timer in seconds
let time1 = 1800; // 30 minutes
let time2 = 1980; // 33 minutes

let interval1;
let interval2;

function startTimer1() {
	interval1 = setInterval(function() {
		let minutes = Math.floor(time1 / 60);
		let seconds = time1 % 60;
		document.getElementById("timer1").innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
		time1--;
		if (time1 == 60) {
			alert("Boss will show in 1 minute!");
		} else if (time1 < 0) {
			clearInterval(interval1);
			document.getElementById("timer1").innerHTML = "00:00";
			alert("The Boss is up anytime!");
			playAlarm();
		}
	}, 1000);
}

function startTimer2() {
	interval2 = setInterval(function() {
		let minutes = Math.floor(time2 / 60);
		let seconds = time2 % 60;
		document.getElementById("timer2").innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
		time2--;
		if (time2 == 60) {
			alert("Boss will show in 1 minute!");
		} else if (time2 < 0) {
			clearInterval(interval2);
			document.getElementById("timer2").innerHTML = "00:00";
			alert("The Boss is up anytime!");
			playAlarm();
		}
	}, 1000);
}

function resetTimer1() {
	clearInterval(interval1);
	time1 = 1800;
	startTimer1();
}

function resetTimer2() {
	clearInterval(interval2);
	time2 = 1980;
	startTimer2();
}

function stopTimer1() {
	clearInterval(interval1);
}

function stopTimer2() {
	clearInterval(interval2);
}

function playAlarm() {
	let alarm = document.getElementById("alarm");
	alarm.play();
}
