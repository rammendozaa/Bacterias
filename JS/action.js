$(document).ready(function()
{
  $(".contenedorQuimico").css("visibility", "hidden");
  $(".contenedorAnim").css("visibility", "hidden");

})
var matriz = [];
var matrizAn = [];
var filas, columnas;
function crearRandom(){
  var limpiarMatriz = document.getElementById("matriz");
  while(limpiarMatriz.firstChild)
    limpiarMatriz.removeChild(limpiarMatriz.firstChild);
  var limpiarAnim = document.getElementById("matrizAnimada");
  while(limpiarAnim.firstChild)
    limpiarAnim.removeChild(limpiarAnim.firstChild);
  columnas = Math.floor(Math.random() * 10) + 2;
  filas = Math.floor(Math.random() * 10) + 2;
  $(".contenedorQuimico").css("width", (columnas * 39) + "px");
  $(".contenedorQuimico").css("height", (filas * 39) + "px");
  var contenedor = document.getElementById("matriz");
  for(var i = 0 ; i < filas ; i++)
  {
    var fila = document.createElement("div");
    fila.className="fila" + i;
    matriz[i] = [];
    for(var j = 0 ; j < columnas ; j++)
    {
      var celda = document.createElement("div");
      celda.className = "cuadrito";
      var rand = Math.floor(Math.random() * 110);
      matriz[i][j] = rand;
      celda.innerText = rand;
      $(celda).attr("id", 'compuestoQ_'+ i +'_'+ j +'');
      fila.appendChild(celda);
    }
    contenedor.appendChild(fila);
  }
  $(".contenedorQuimico").css("visibility", "visible");

  $(".contenedorAnim").css("width", (columnas * 39) + "px");
  $(".contenedorAnim").css("height", (filas * 39) + "px");
  $(".contenedorAnim").css("visibility", "visible");
}


  function ingresaValores(){
    var limpiarMatriz = document.getElementById("matriz");
    while(limpiarMatriz.firstChild)
      limpiarMatriz.removeChild(limpiarMatriz.firstChild);
    var limpiarAnim = document.getElementById("matrizAnimada");
    while(limpiarAnim.firstChild)
      limpiarAnim.removeChild(limpiarAnim.firstChild);
    filas = prompt('Ingrese el número de filas:\n(Menor a 20 para una mejor visualizacion)');
    columnas = prompt('Ingrese el número de columnas:\n(Menor a 20 para una mejor visualizacion)');
    for (var i = 0 ; i < filas ; i++)
    {
      matriz[i] = [];
      for (var j = 0 ; j < columnas ; j++)
          matriz[i][j]= parseInt(prompt('Ingrese el valor de la posición: (' + i + ', ' + j + ')'));
    }
    $(".contenedorQuimico").css("width", (columnas * 39) + "px");
    $(".contenedorQuimico").css("height", (filas * 39) + "px");
    var contenedor = document.getElementById("matriz");
    for(var i = 0 ; i < filas ; i++)
    {
      var fila = document.createElement("div");
      fila.className="fila" + i;
      for(var j = 0 ; j < columnas ; j++)
      {
        var celda = document.createElement("div");
        celda.className = "cuadrito";
        celda.innerText = matriz[i][j];
        $(celda).attr("id", 'compuestoQ_'+ i +'_'+ j +'');
        fila.appendChild(celda);
      }
      contenedor.appendChild(fila);
    }
    $(".contenedorQuimico").css("visibility", "visible");

    $(".contenedorAnim").css("width", (columnas * 39) + "px");
    $(".contenedorAnim").css("height", (filas * 39) + "px");
    $(".contenedorAnim").css("visibility", "visible");

  }

  function hacerBarrido(){
    var primerValor = document.getElementById("compuestoQ_0_0");
    var texto = $("#inicializar").text();
    var aqui = document.getElementById("codigoActual");
    $(aqui).text(texto);
    highlight(primerValor);
    //sincronizar con la aparicion de la otra matriz
    var contenedor = document.getElementById("matrizAnimada");
    var fila = document.createElement("div");
    fila.className="fila0";
    var celda = document.createElement("div");
    celda.className = "cuadrito";
    celda.innerText = $("#compuestoQ_0_0").text();
    $(celda).attr("id", 'matAn_0_0');
    fila.append(celda);
    matrizAn[0] = [];
    matrizAn[0][0] = matriz[0][0];
    for(var i = 1 ; i < columnas  ; i++)
    {
      celda = document.createElement("div");
      celda.className="cuadrito";
      matrizAn[0][i] = matrizAn[0][i - 1] + matriz[0][i];
      celda.innerText = (matrizAn[0][i]).toString();
      $(celda).attr("id", 'matAn_0_'+ i +'');
      fila.append(celda);
    }
    contenedor.append(fila);
    for(var i = 1 ; i < filas ; i++)
    {
      fila = document.createElement("div");
      fila.className = 'fila'+ i +'';
      celda = document.createElement("div");
      celda.className="cuadrito";
      matrizAn[i] = [];
      matrizAn[i][0] = matriz[i][0] + matrizAn[i - 1][0];
      celda.innerText = matrizAn[i][0];
      $(celda).attr("id",'matAn_'+ i +'_0');
      fila.append(celda);
      for(var j = 1 ; j < columnas ; j++)
      {
        celda = document.createElement("div");
        celda.className = "cuadrito";
        matrizAn[i][j] = Math.min(matrizAn[i][j - 1], matrizAn[i - 1][j]) + matriz[i][j];
        celda.innerText = matrizAn[i][j];
        $(celda).attr("id", 'matAn_'+ i +'_'+ j +'');
        fila.append(celda);
      }
      contenedor.append(fila);
    }
  }

  function highlight(casilla){
    $(casilla).css("border-color", "red");
    var valor = setInterval(function(){
      $(casilla).css("border-color", "gray");
      clearInterval(valor);
    },1000);
    return;
  }


  /*
  function moverte(deAqui, aAca)
  {
    $(deAqui).clone().attr("id", "clon").appendTo(deAqui).css("z-index", "1");
    var arriba = document.getElementById("clon");
    var posArriba = $(deAqui).position();
    var posAbajo = $(aAca).position();
    var posT = 0;
    var posLeft = 0;
    var id = setInterval(movim, 10);
    function movim(){
      if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) < 1)
      {
        clearInterval(id);
        clearInterval(movate);
        $("#clon").remove();
        $(aAca).css("visibility","visible");
      }
      else
      {
        if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) > 1)
        {
          posT++;
          arriba.style.top = posT + 'px';
        }
        var alinearY = (Math.abs(posAbajo.left - posArriba.left + posLeft));
        var izq = posAbajo.left - posArriba.left;
        if(alinearY > 1)
        {
          if(izq < 0)
          {
            posLeft++;
            arriba.style.left = -posLeft + 'px';
          }
          else if(izq >= 0)
          {
            posLeft--;
            arriba.style.left = -posLeft + 'px';
          }
        }
      }
    }
  }
  */
