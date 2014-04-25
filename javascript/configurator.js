function dibujarLuces(cantidad, colorLuz)
{
	var contenedorLuces = document.getElementById("luces");
	
	for (var i = 0; i<cantidad; i++){
		contenedorLuces.appendChild(colorLuz(150, 150, i));
	}
}

function rojo(ancho, alto, posicion)
{
	var elementoImg = document.createElement("img");
	elementoImg.src = tablaPathActualColor['luzRoja'];
	elementoImg.width = ancho;
	elementoImg.height = alto;
	elementoImg.id = posicion;
	/*Hay que pasarle una funcion a la que le pueda enviar el evento*/
	elementoImg.onmousedown = function(e){cambiarALaSiguienteImg(posicion)};
	return elementoImg
}

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




var tablaPathActualColor = {};
tablaPathActualColor['luzAmarilloPatito'] = "./images/lamparas/luzAmarilloPatito.png";
tablaPathActualColor['luzVerdePistacho'] = "./images/lamparas/luzVerdePistacho.png";
tablaPathActualColor['luzRoja'] = "./images/lamparas/luzRoja.png";

var tablaPathProximoColor = {};
tablaPathProximoColor['luzRoja'] = tablaPathActualColor['luzAmarilloPatito'];
tablaPathProximoColor['luzAmarilloPatito'] = tablaPathActualColor['luzVerdePistacho'];
tablaPathProximoColor['luzVerdePistacho'] = tablaPathActualColor['luzRoja'];