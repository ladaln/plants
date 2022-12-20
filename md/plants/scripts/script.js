"use strict"

//burger
let hamburger = document.querySelector('.burger-button');
let menu = document.querySelector('.burger');


hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
})