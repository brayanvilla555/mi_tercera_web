'use strict'
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

/*agregar un evento para mostrar el menu*/
hamburger.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
});

/*ocultar el menu*/
window.addEventListener('click', e=>{
	if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
		menu.classList.toggle("spread")
	}
});
