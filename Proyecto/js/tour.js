//variables controladoras
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');



//crea y agrega el primer infospot
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(341 ,-500 , -100);
infospot1.addHoverText('Entrar al PDF.',100);
infospot1.element.innerHTML = `
    <div style="background-color:rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        Entrar al PDF. París – La ciudad del amor y la luz.
    </div>
`;
infospot1.addEventListener('click', function() {
// Abrir el PDF en una nueva pestaña
    window.open("pdf/PARIS.pdf", "_blank");
});
panorama.add(infospot1);





var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot2.position.set(399 ,-500 , 133);
infospot2.addHoverText('Entrar al PDF.',100);
infospot2.element.innerHTML = `
    <div style="background-color:rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        Entrar al PDF. Nueva York – La ciudad que nunca duerme..
    </div>
`;
infospot2.addEventListener('click', function() {
// Abrir el PDF en una nueva pestaña
    window.open("pdf/NY.pdf", "_blank");
});
panorama.add(infospot2);


var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot3.position.set(207 ,-501 , 308);
infospot3.addHoverText('Entrar al PDF.',100);
infospot3.element.innerHTML = `
    <div style="background-color:rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        Entrar al PDF. Naturaleza – Explora paisajes increíbles.
    </div>
`;
infospot3.addEventListener('click', function() {
// Abrir el PDF en una nueva pestaña
    window.open("pdf/Naturaleza.pdf", "_blank");
});
panorama.add(infospot3);



var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot4.position.set(-501 ,247 , -259);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot4.addHoverText('Descripción de París.', -60);
//permite agregar la apariencia visual del cuadro
infospot4.element.innerHTML = `
<div style="background-color: rgba(0, 217, 255, 0.8); color:#fff; border-radius: 15px; padding: 15px; font-size: 15px; width: 200px;">
    "París, con su elegancia y encanto, te invita a sumergirte en su rica historia, arte y gastronomía. Cada calle y rincón cuentan una historia que enamora a quienes la visitan."
    <br><br>
    <img src="imagenes/Paris.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
    <br><br>
</div>
`;
panorama.add(infospot4);


var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot5.position.set(-101 ,176 , -500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot5.addHoverText('Descripción de Tokio.', -60);
//permite agregar la apariencia visual del cuadro
infospot5.element.innerHTML = `
<div style="background-color: rgba(0, 217, 255, 0.8); color:#fff; border-radius: 15px; padding: 15px; font-size: 15px; width: 200px;">
    "Tokio, vibrante y sorprendente, te envuelve con su energía única. Entre templos ancestrales y rascacielos futuristas, esta ciudad japonesa combina la calma de sus jardines con la intensidad de sus luces y sabores."
    <br><br>
    <img src="imagenes/Tokio.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
    <br><br>
</div>
`;
panorama.add(infospot5);



var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(500 ,154 , -423);
infospot6.addHoverText('Un audio MP3 multimedial ...', -60);
infospot6.element.innerHTML = `<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio
controls><source src="audios/America.mp3" type="audio/mpeg"></audio></div>`;
panorama.add(infospot6);


var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot7.position.set(500 ,60 , -86);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot7.addHoverText('Un audio MP3 multimedial ...', -60);
infospot7.element.innerHTML = `<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio
controls><source src="audios/Africa.mp3" type="audio/mpeg"></audio></div>`;
panorama.add(infospot7);


var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot8.position.set(500 ,27 , 74);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot8.addHoverText('Un audio MP3 multimedial ...', -60 );
infospot8.element.innerHTML = `<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio
controls><source src="audios/Asia.mp3" type="audio/mpeg"></audio></div>`;
panorama.add(infospot8);



var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot9.position.set(499 ,-21 , 301);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot9.addHoverText('Sorpresa del mapa interactivo.', -60);
//permite agregar la apariencia visual del cuadro
infospot9.element.innerHTML = `
<div style="background-color: rgba(0, 217, 255, 0.8); color:#fff; border-radius: 15px; padding: 15px; font-size: 15px; width: 200px;">
    "Consulta destinos al azar girando el globo: ideal para viajeros espontáneos. ¿Dónde caerá tu dedo hoy? ¡Cada punto es una nueva aventura por descubrir!"
    <br><br>
    <img src="imagenes/pc.png" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
    <br><br>
</div>
`;
panorama.add(infospot9);



var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot10.position.set(-454 ,180 , 500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot10.addHoverText('', -60);
//insertar el reproductor de video de YouTube en el Infospot
infospot10.element.innerHTML = `
    <div class="" style="">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Fq8oNTvzfes"></iframe>
    </div>
`; 
panorama.add(infospot10);



// Agrega la panorámica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen', // Habilita salida en pantalla completa
    autoHideInfospot: false
});
viewer.add(panorama);

