function dibujarLuces(cantidad, colorLuz)
{
	var contenedorLuces = document.getElementById("luces");
	
	for (var i = 0; i<cantidad; i++){
		contenedorLuces.appendChild(colorLuz(100, 100, i));
	}
}

function rojo(ancho, alto, posicion)
{
	var elementoImg = document.createElement("img");
	elementoImg.src = "./lamparas/luzRoja.png";
	elementoImg.width = ancho;
	elementoImg.height = alto;
	elementoImg.id = posicion;
	/*Hay que pasarle una funcion a la que le pueda enviar el evento*/
	elementoImg.onmousedown = function(e){cambiarALaSiguienteImg(posicion)};
	return elementoImg
}

var tablaPathProximoColor = {}
tablaPathProximoColor['luzRoja'] = "./lamparas/luzAmarilloPatito.png"
tablaPathProximoColor['luzAmarilloPatito'] = "./lamparas/luzVerdePistacho.png"
tablaPathProximoColor['luzVerdePistacho'] = "./lamparas/luzRoja.png" 

function identificarColor(path)
{
	var hasta = path.lastIndexOf(".png");
	var desde = path.lastIndexOf("/");
	return path.substring(desde + 1, hasta);
	
}

function cambiarALaSiguienteImg(posicion)
{
	var color = identificarColor(document.getElementById(posicion).src);
	var pathProximoColor = tablaPathProximoColor[color];	
	document.getElementById(posicion).src = pathProximoColor;
}