$(document).ready(function()
{
  $(".contenedorQuimico").css("visibility", "hidden");
  $(".contenedorAnim").css("visibility", "hidden");

})
var matriz = [];
var matrizAn = [];
var filas, columnas;
  /* Se genera una matriz aleatorio con la que se puede trabajar */
  function crearRandom(){
    var limpiarMatriz = document.getElementById("matriz");
    while(limpiarMatriz.firstChild)
      limpiarMatriz.removeChild(limpiarMatriz.firstChild);
    var limpiarAnim = document.getElementById("matrizAnimada");
    while(limpiarAnim.firstChild)
      limpiarAnim.removeChild(limpiarAnim.firstChild);
    columnas = Math.floor(Math.random() * 8) + 2;
    filas = Math.floor(Math.random() * 8) + 2;
    $(".contenedorQuimico").css("width", (columnas * 69) + "px");
    $(".contenedorQuimico").css("height", (filas * 69) + "px");
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
        $(celda).css("z-index","1");
        fila.appendChild(celda);
      }
      contenedor.appendChild(fila);
    }
    $(".contenedorQuimico").css("visibility", "visible");

    var inicial, transparetn, imagen;
    inicial = document.getElementById("compuestoQ_0_0");
    transparent = $('<div >',{
      style:'background-color:rgba(0,0,0,0.01);z-index:3;'
    });
    imagen = $('<img />',{
      style:'mix-blend-mode:multiply',
      width:'45px',
      height:'45px',
      id:'bacM1',
      class:'imgBact',
      src:'bacteria.jpg'
    });
    imagen.appendTo(transparent);
    transparent.appendTo(inicial);

    for(var i = 0 ; i < filas ; i++)
    {
      for(var j = 0 ; j < columnas ; j++)
      {
        if(i == 0 && j == 0)
          continue;
        inicial = document.getElementById('compuestoQ_'+ i +'_'+ j + '');
        transparent = $('<div >',{
          style:'background-color:rgba(0,0,0,0.01);z-index:3;'
        });
        imagen = $('<img />',{
          style:'mix-blend-mode:multiply',
          width:'45px',
          height:'45px',
          id:'quimM1'+i+j,
          class:'imgQuim',
          src:'quim.png'
        });
        imagen.appendTo(transparent);
        transparent.appendTo(inicial);
      }
    }


    $(".contenedorAnim").css("width", (columnas * 69) + "px");
    $(".contenedorAnim").css("height", (filas * 69) + "px");
    $(".contenedorAnim").css("visibility", "visible");
  }

  /* Recibe valores del usuario */
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
    $(".contenedorQuimico").css("width", (columnas * 69) + "px");
    $(".contenedorQuimico").css("height", (filas * 69) + "px");
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

    var inicial, transparetn, imagen;
    inicial = document.getElementById("compuestoQ_0_0");
    transparent = $('<div >',{
      style:'background-color:rgba(0,0,0,0.01);z-index:3;'
    });
    imagen = $('<img />',{
      style:'mix-blend-mode:multiply',
      width:'45px',
      height:'45px',
      id:'bacM1',
      class:'imgBact',
      src:'bacteria.jpg'
    });
    imagen.appendTo(transparent);
    transparent.appendTo(inicial);

    for(var i = 0 ; i < filas ; i++)
    {
      for(var j = 0 ; j < columnas ; j++)
      {
        if(i == 0 && j == 0)
          continue;
        inicial = document.getElementById('compuestoQ_'+ i +'_'+ j + '');
        transparent = $('<div >',{
          style:'background-color:rgba(0,0,0,0.01);z-index:3;'
        });
        imagen = $('<img />',{
          style:'mix-blend-mode:multiply',
          width:'45px',
          height:'45px',
          id:'quimM1'+i+j,
          class:'imgQuim',
          src:'quim.png'
        });
        imagen.appendTo(transparent);
        transparent.appendTo(inicial);
      }
    }

    $(".contenedorAnim").css("width", (columnas * 69) + "px");
    $(".contenedorAnim").css("height", (filas * 69) + "px");
    $(".contenedorAnim").css("visibility", "visible");
  }

    function hacerBarrido(){

      var contenedor = document.getElementById("matrizAnimada");
      var fila = document.createElement("div");
      fila.className="fila0";
      var celda = document.createElement("div");
      celda.className = "cuadritoAnim";
      celda.innerText = $("#compuestoQ_0_0").text();
      $(celda).attr("id", 'matAn_0_0');
      fila.append(celda);
      matrizAn[0] = [];
      matrizAn[0][0] = matriz[0][0];
      for(var i = 1 ; i < columnas  ; i++)
      {
        celda = document.createElement("div");
        celda.className="cuadritoAnim";
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
        celda.className="cuadritoAnim";
        matrizAn[i] = [];
        matrizAn[i][0] = matriz[i][0] + matrizAn[i - 1][0];
        celda.innerText = matrizAn[i][0];
        $(celda).attr("id",'matAn_'+ i +'_0');
        fila.append(celda);
        for(var j = 1 ; j < columnas ; j++)
        {
          celda = document.createElement("div");
          celda.className = "cuadritoAnim";
          matrizAn[i][j] = Math.min(matrizAn[i][j - 1], matrizAn[i - 1][j]) + matriz[i][j];
          celda.innerText = matrizAn[i][j];
          $(celda).attr("id", 'matAn_'+ i +'_'+ j +'');
          fila.append(celda);
        }
        contenedor.append(fila);
      }


      var inicial, transparetn, imagen;
      inicial = document.getElementById("matAn_0_0");
      transparent = $('<div >',{
        style:'background-color:rgba(0,0,0,0.01);z-index:3;visibility:hidden;',
        id:'bacM2'
      });
      imagen = $('<img />',{
        style:'mix-blend-mode:multiply',
        width:'45px',
        height:'45px',
        src:'bacteria.jpg'
      });
      imagen.appendTo(transparent);
      transparent.appendTo(inicial);

      for(var i = 0 ; i < filas ; i++)
      {
        for(var j = 0 ; j < columnas ; j++)
        {
          if(i == 0 && j == 0)
            continue;
          inicial = document.getElementById('matAn_'+ i +'_'+ j + '');
          transparent = $('<div >',{
            style:'background-color:rgba(0,0,0,0.01);z-index:3;visibility:hidden;',
            id:'quimM2'+i+j
          });
          imagen = $('<img />',{
            style:'mix-blend-mode:multiply',
            width:'45px',
            height:'45px',
            src:'quim.png'
          });
          imagen.appendTo(transparent);
          transparent.appendTo(inicial);
        }
      }
      animacionYa();
    }

    var visi;
    function animacionYa(){
      var primerValor = document.getElementById("compuestoQ_0_0");
      var texto = $("#inicializar");
      var aqui = document.getElementById("codigoActual");
      $("#matAn_0_0").css("visibility", "visible");
      $('#bacM2').css("visibility", "visible");
      highlight(primerValor,texto,aqui,0);
      for(var i = 0 ; i < columnas ; i++)
      {
        var tiempo = setInterval(function(){
          var sumador = document.getElementById('compuestoQ_0_'+ (i + 1)+'');
          var sumando = document.getElementById('matAn_0_'+ i +'');
          texto = $("#asigpB");
          highlight(sumador, texto, aqui,(100 * i));
          highlight(sumando, texto, aqui,(100 * i));
          var cuadro = $('#matAn_0_'+ i +'');
          var imagen = $('#quimM20'+ (i + 1) +'');
          hacerVisible(cuadro, imagen,(100 * i));
          clearInterval(tiempo);
        },1000);
      }
          //sincronizar con la aparicion de la otra matriz
    }

    function hacerVisible(casilla, imgAhi,inter)
    {
      $(casilla).css("visibility","visible");
      $(imgAhi).css("visibility", "visible");
      var valor = setInterval(function(){
        clearInterval(valor);
      },inter);
    }

    function highlight(casilla,letras,here,inter)
    {
      $(casilla).css("border-color", "red");
      $(letras).css("color", "red");
      $(here).text($(letras).text());
      var valor = setInterval(function(){
        $(casilla).css("border-color", "gray");
        $(letras).css("color", "black");
        clearInterval(valor);
      },inter);
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
