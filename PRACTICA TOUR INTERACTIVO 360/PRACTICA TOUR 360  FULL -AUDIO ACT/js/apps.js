//variables controladoras
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');


//El valor 50 es el radio del infospot
//crea y agrega el primer infospot

var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(341 ,-500 , -100);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('InfoSpot prueba 1.', -60);
//permite agregar la apariencia visual del cuadro
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 1. </div>';
panorama.add(infospot1);



var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot2.position.set(399 ,-500 , 133);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot2.addHoverText('InfoSpot prueba 2.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(39, 25, 235, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 2. </div>';
panorama.add(infospot2);


var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot3.position.set(207 ,-501 , 308);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot3.addHoverText('InfoSpot prueba 3.', -60);
//permite agregar la apariencia visual del cuadro
infospot3.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 3. </div>';
panorama.add(infospot3);



var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot4.position.set(-501 ,247 , -259);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot4.addHoverText('InfoSpot prueba 4.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(39, 25, 235, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 4. </div>';
panorama.add(infospot4);


var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot5.position.set(-101 ,176 , -500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot5.addHoverText('InfoSpot prueba 5.', -60);
//permite agregar la apariencia visual del cuadro
infospot5.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 5. </div>';
panorama.add(infospot5);



var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot6.position.set(500 ,154 , -423);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot6.addHoverText('InfoSpot prueba 6.', -60);
infospot6.element.innerHTML = '<div style="background-color: rgba(39, 25, 235, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 6. </div>';
panorama.add(infospot6);


var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot7.position.set(500 ,60 , -86);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot7.addHoverText('InfoSpot prueba 7.', -60);
//permite agregar la apariencia visual del cuadro
infospot7.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 7. </div>';
panorama.add(infospot7);



var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot8.position.set(500 ,27 , 74);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot8.addHoverText('InfoSpot prueba 8.', -60);
infospot8.element.innerHTML = '<div style="background-color: rgba(39, 25, 235, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 8. </div>';
panorama.add(infospot8);


var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot9.position.set(499 ,-21 , 301);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot9.addHoverText('InfoSpot prueba 9.', -60);
//permite agregar la apariencia visual del cuadro
infospot9.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 9. </div>';
panorama.add(infospot9);



var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot10.position.set(-454 ,180 , 500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot10.addHoverText('InfoSpot prueba 10.', -60);
infospot10.element.innerHTML = '<div style="background-color: rgba(39, 25, 235, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">InfoSpot prueba 10. </div>';
panorama.add(infospot10);



// Agrega la panorámica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen', // Habilita salida en pantalla completa
    autoHideInfospot: false
});
viewer.add(panorama);

