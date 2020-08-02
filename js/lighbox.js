const imagenes = document.querySelectorAll('.img-galeri')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector('.hamburger');


imagenes.forEach(imagen =>{
	imagen.addEventListener('click',()=>{
		aparecer_imagen(imagen.getAttribute('src'))
	})
})

contenedorLight.addEventListener('click', (e)=>{
	if(e.target !== imagenesLight){
		/* quitar la class para poder ver el contenedor principal*/
		contenedorLight.classList.toggle('show')

		/*mostrar la imagen en formato grande*/
		imagenesLight.classList.toggle('showImage')

		/*cambiar la opcaidad del botton del menu*/
		hamburger1.style.opacity = '1'
	}
})

const aparecer_imagen = (imagen)=>{
	/*poner la imagen a la etiqueta src*/
	imagenesLight.src = imagen;

	/* quitar la class para poder ver el contenedor principal*/
	contenedorLight.classList.toggle('show')

	/*mostrar la imagen en formato grande*/
	imagenesLight.classList.toggle('showImage')

	/*cambiar la opcaidad del botton del menu*/
	hamburger1.style.opacity = '0'
}