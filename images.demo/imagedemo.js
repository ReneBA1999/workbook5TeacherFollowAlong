"use strict";

window.onload = function() {
    // Find all paragraph elements and add a thin black border around them
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.border = "1px solid black";
    }

    // Find all images, apply the roundImg class, and set src and alt attributes
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('roundImg');
        images[i].src = `https://via.placeholder.com/200x100.png?text=Image+${i+1}`; // Example placeholder image
        images[i].alt = `Image ${i+1}`;
    }
};