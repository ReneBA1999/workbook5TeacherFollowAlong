"use strict"

document.title="Netflix"
console.log(document);
// innerHTML = It includes HTML tags
// innerText = "spaces included only visible for Javascript" 
// textContent = NO spaces included, also ignores spaces in Javascript
document.getElementById('message').innerText = "                   Plain text";
//document.getElementById('message').innerHTML = "<h1>Demo</h1>";
//document.getElementById('message').textContent = "          Example test";

document.createElement("div");

// document.getElementByID  (1 per HTML page)
// document.getElementByClassName (multple classes )
// document.getElementByTagName  (multiple same tags like <p>)