window.onload = function() {
     initializeTimer(); 
}


function initializeTimer() {
	let endDate = new Date(2020,2,11,8,31); 
	let currentDate = new Date(); 
	let seconds = (endDate-currentDate) / 1000; 
	if (seconds > 0) { 
		let minutes = seconds/60; 
		let hours = minutes/60; 
		minutes = (hours - Math.floor(hours)) * 60; 
		hours = Math.floor(hours); 
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
		minutes = Math.floor(minutes); 
		
		setTimePage(hours,minutes,seconds); 
		
		function secOut() {
		  if (seconds == 0) { 
			  if (minutes == 0) { 
				  if (hours == 0) { 
					  showMessage(timerId); 
				  }
				  else {
					  hours--; 
					  minutes = 59; 
					  seconds = 59; 
				  }
			  }
			  else {
				  minutes--; 
				  seconds = 59; 
			  }
		  }
		  else {
			  seconds--; 
		  }
		  setTimePage(hours,minutes,seconds); 
		}
		timerId = setInterval(secOut, 1000) 
	}
	else {
		alert("promotion completed");
	}
}

function setTimePage(h,m,s) { 
	let element = document.getElementById("timer1"); 
	element.innerHTML = h + ":" + m + ":" + s; 
}


function showMessage(timerId) { // функция, вызываемая по истечению времени
	alert("promotion completed!");
	clearInterval(timerId); // останавливаем вызов функции через каждую секунду
}