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
      width:'36px',
      height:'36px',
      id:'bacM1',
      class:'imgBact',
      src:'img/bacteria.jpg'
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
          width:'36px',
          height:'36px',
          id:'quimM1'+i+j,
          class:'imgQuim',
          src:'img/quim.png'
        });
        imagen.appendTo(transparent);
        transparent.appendTo(inicial);
      }
    }


    $(".contenedorAnim").css("width", (columnas * 69) + "px");
    $(".contenedorAnim").css("height", (filas * 69) + "px");
    $(".contenedorAnim").css("visibility", "visible");
    $("#equis1").text(filas.toString());
    $("#equis2").text(filas.toString());
    $("#ye1").text(columnas.toString());
    $("#ye2").text(columnas.toString());
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
      width:'36px',
      height:'36px',
      id:'bacM1',
      class:'imgBact',
      src:'img/bacteria.jpg'
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
          width:'36px',
          height:'36px',
          id:'quimM1'+i+j,
          class:'imgQuim',
          src:'img/quim.png'
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


      var inicial, transparent, imagen;
      inicial = document.getElementById("matAn_0_0");
      transparent = $('<div >',{
        style:'background-color:rgba(0,0,0,0.01);z-index:3;visibility:hidden;',
        id:'bacM2'
      });
      imagen = $('<img />',{
        style:'mix-blend-mode:multiply;z-index:5;',
        width:'36px',
        height:'36px',
        id:'miBacteria',
        src:'img/bacteria.jpg'
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
            width:'36px',
            height:'36px',
            src:'img/quim.png'
          });
          imagen.appendTo(transparent);
          transparent.appendTo(inicial);
        }
      }
      aVer();
    }

    var sumador, sumando, texto, aqui,tiempo;
    function aVer(){
      var primerValor = document.getElementById("compuestoQ_0_0");
      texto = $("#inicializar");
      aqui = document.getElementById("codigoActual");
      $("#matAn_0_0").css("visibility", "visible");
      $('#bacM2').css("visibility", "visible");
      i = 0;
      for(var i = 0 ; i <  columnas ; i++)
      {
        sumador = document.getElementById('compuestoQ_0_'+ (i + 1)+'');
        sumando = document.getElementById('matAn_0_'+ i +'');
        $(sumador).css("border-color", "red");
        $(sumando).css("border-color", "red");
        texto = $("#asigpB");
        $(texto).css("color", "red");
        $(aqui).text($(texto).text());
        $('#matAn_0_'+ (i + 1) +'').css("visibility", "visible");
        $('#quimM20'+ (i + 1) +'').css("visibility", "visible");
        $(sumando).css("border-color", "gray");
        $(sumador).css("border-color", "gray");
        $(texto).css("color", "black");
      }

      for(var i = 0 ; i <  filas ; i++)
      {
        sumador = document.getElementById('compuestoQ_'+ (i + 1)+'_0');
        sumando = document.getElementById('matAn_'+ (i + 1) +'_0');
        $(sumador).css("border-color", "red");
        $(sumando).css("border-color", "red");
        texto = $("#asigpB");
        $(texto).css("color", "red");
        $(aqui).text($(texto).text());
        $('#matAn_'+ (i + 1) +'_0').css("visibility", "visible");
        $('#quimM2'+ (i + 1) +'0').css("visibility", "visible");
        $(sumando).css("border-color", "gray");
        $(sumador).css("border-color", "gray");
        $(texto).css("color", "black");
      }

      for(var i = 1 ; i < filas ; i++)
      {
        for(var j = 1 ; j < columnas ; j++)
        {
          sumador = document.getElementById('compuestoQ_'+ i +'_'+ j +'');
          sumando = document.getElementById('matAn_'+ i +'_'+ j +'');
          $(sumador).css("border-color", "red");
          $(sumando).css("border-color", "red");
          texto = $("#asigpB");
          $(texto).css("color", "red");
          $(aqui).text($(texto).text());
          $('#matAn_'+ i +'_'+ j +'').css("visibility", "visible");
          $('#quimM2'+ i + j).css("visibility", "visible");
          $(sumando).css("border-color", "gray");
          $(sumador).css("border-color", "gray");
          $(texto).css("color", "black");

        }
      }
      guardaRecorrido();
    }

  var recorrido = [];
  var i, j, indice;
  function guardaRecorrido()
  {
    i = 0;
    j = 0;
    indice = 0;
    while(true)
    {
      if(i == filas - 1 || j == columnas - 1)
      {
        if(i == filas - 1)
        {
          while(j < columnas)
          {
            recorrido[indice] = 'r';
            indice++;
            j++;
          }
          break;
        }
        else if(j == columnas - 1)
        {
          while(i < filas)
          {
            recorrido[indice] = 'd';
            i++;
            indice++;
          }
          break;
        }
        else
          break;
      }
      else
      {
        if(matrizAn[i + 1][j] < matrizAn[i][j + 1])
        {
          recorrido[indice] = 'd';
          indice++;
          i++;
        }
        else
        {
          recorrido[indice] = 'r';
          indice++;
          j++;
        }
      }
    }
    indice--;
    movimientos();
  }
  var ini, fin, ultimo;
  function movimientos()
  {
    ini = {
      ejeI: 0,
      ejeJ: 0
    };
    fin = {
      ejeI: 0,
      ejeJ: 0
    };
    ultimo = {
      ejeI: 0,
      ejeJ: 0
    };
    var bacterPosLeft = $("#miBacteria").position().left;
    var bacterPosTop = $("#miBacteria").position().top;
    for(var rec = 0 ; rec < indice ; rec++)
    {
      setTimeout(function(y){
      if(recorrido[y] == 'r')
      {

        ini.ejeJ = ini.ejeJ + 1;
        fin.ejeI = ini.ejeI;
        fin.ejeJ = ini.ejeJ;
        var bacter = document.getElementById('miBacteria');
        bacter.style.position = "absolute";
        bacter.style.top = bacterPosTop + 'px';
        bacter.style.left = bacterPosLeft + 'px';
        var bactLeft = $("#miBacteria").position().left;
        var bacterPos = $("#miBacteria").offset().left;
        /*var pos = $('#quimM2'+ fin.ejeI + fin.ejeJ).position().left;*/
        var pos = $('#quimM2'+ fin.ejeI + fin.ejeJ).offset().left + 12;
        var id = setInterval(marcoPolo, 25);
        function marcoPolo()
        {
          if(pos < bacterPos)
          {
            $('#quimM2'+ fin.ejeI + fin.ejeJ).remove();
            $("#bacM2").remove();
            $("#miBacteria").remove();
            inicial = document.getElementById('matAn_'+ fin.ejeI +'_'+ fin.ejeJ +'');
            transparent = $('<div >',{
              style:'background-color:rgba(0,0,0,0.01);z-index:5;visibility:visible;',
              id:'bacM2'
            });
            imagen = $('<img />',{
              style:'mix-blend-mode:multiply;z-index:6;',
              width:'36px',
              height:'36px',
              id:'miBacteria',
              src:'img/bacteria.jpg'
            });
            imagen.appendTo(transparent);
            transparent.appendTo(inicial);
            clearInterval(id);
          }
          else
          {
            bacterPos++;
            bactLeft++;
            bacter.style.left = (bactLeft) + 'px';
          }
        }
      }
      else
      {
        ini.ejeI = ini.ejeI + 1;
        fin.ejeI = ini.ejeI;
        fin.ejeJ = ini.ejeJ;
        var bacter = document.getElementById('miBacteria');
        bacter.style.position = "absolute";
        bacter.style.top = bacterPosTop + 'px';
        bacter.style.left = bacterPosLeft + 'px';
        var bactTop = $("#miBacteria").position().top;
        var bacterPos = $("#miBacteria").offset().top;
        /*var pos = $('#quimM2'+ fin.ejeI + fin.ejeJ).position().top;*/
        var pos = $('#quimM2'+ fin.ejeI + fin.ejeJ).offset().top;
        var id = setInterval(marcoPolo, 25);
        function marcoPolo()
        {
          if(pos < bacterPos)
          {
            $('#quimM2'+ fin.ejeI + fin.ejeJ).remove();
            $("#bacM2").remove();
            $("#miBacteria").remove();
            inicial = document.getElementById('matAn_'+ fin.ejeI +'_'+ fin.ejeJ +'');
            transparent = $('<div >',{
              style:'background-color:rgba(0,0,0,0.01);z-index:5;visibility:visible;',
              id:'bacM2'
            });
            imagen = $('<img />',{
              style:'mix-blend-mode:multiply;z-index:6;',
              width:'36px',
              height:'36px',
              id:'miBacteria',
              src:'img/bacteria.jpg'
            });
            imagen.appendTo(transparent);
            transparent.appendTo(inicial);
            clearInterval(id);
          }
          else
          {
            bacterPos++;
            bactTop++;
            bacter.style.top = (bactTop) + 'px';
          }
        }
      }
    },rec * 2500, rec);
    }

  }

  function movimientoIzq(deAqui, aAca)
  {
    var imgObj = document.getElementById('miBacteria');
    var posArriba = $(deAqui).position();
    var posAbajo = $(aAca).position();
    posLeft = 0;
    var anim = setInterval(movim, 10);
    function movim(){
      if(posAbajo.left < posArriba.left)
      {
        $(apaga).css("visibility", "hidden");
        clearInterval(anim);
      }
      else
      {
        alert(posArriba.left + " derecha " + posAbajo.left);
        posLeft++;
        imgObj.style.left = posLeft + 'px';
      }
    }
  }


  function movimientoDown(deAqui, aAca)
  {
    var imgObj = document.getElementById('miBacteria');
    var posArriba = $(deAqui).position();
    var posAbajo = $(aAca).position();
    var posTop = 0;
    var anim = setInterval(movim, 10);
    function movim(){
      if(posAbajo.top > posArriba.top)
      {
        $(apaga).css("visibility", "hidden");
        clearInterval(anim);
      }
      else
      {
        posTop++;
        imgObj.style.top = posTop + 'px';
      }
    }
  }

  function stop(){
     clearTimeout(animate);
  }
