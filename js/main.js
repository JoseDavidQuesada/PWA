//service worker
if('serviceWorker' in navigator){
	console.log('Puedes usar el service worker');

	navigator.serviceWorker.register('./sw.js') // es para registrar el sw ya que lo vamos hacer en otro archivo
						.then(res => console.log('serviceWorker cargado correctamente',res)) 
						.catch(err => console.log('serviceWorker no se ha podido cargar',err));
}else{
	console.log('NO puedes usar el service worker');
}



// scroll suavizado
$(document).ready(function(){

	$("#menu a").click(function(e){
		e.preventDefault;

		$("html,body").animate({
			scrollTop:$($(this).attr("href")).offset().top 
			//encuentra el numero de px desde arriba hasta donde se encuentra el this
			// en ese caso seria el id o class que esta en el href de las etiquetas
			// a del #menu
		});
		return false;
	});
});

