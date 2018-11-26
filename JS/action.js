$(document).ready(function()
{

  $("#boton").click(function(){
    var primerN = [];
    var segundoN = [];
    var tercerN = [];
    var cuartoN = [];
    var quintoN = [];
    var sextoN = [];
    var septimoN = [];
    var octavoN = [];
    var novenoN = [];
    $('.loscuadritosN1').children('.cuadrito').each(function () {
      primerN.push($(this));
      $(this).css("visibility", "visible");
    });
    $('.loscuadritosN2').children('.cuadrito').each(function () {
      segundoN.push($(this));
    });
    $('.loscuadritosN3').children('.cuadrito').each(function () {
      tercerN.push($(this));
    });
    $('.loscuadritosN4').children('.cuadrito').each(function () {
      cuartoN.push($(this));
    });
    $('.loscuadritosN5').children('.cuadrito').each(function () {
      quintoN.push($(this));
    });
    $('.loscuadritosN6').children('.cuadrito').each(function () {
      sextoN.push($(this));
    });
    $('.loscuadritosN7').children('.cuadrito').each(function () {
      septimoN.push($(this));
    });
    $('.loscuadritosN8').children('.cuadrito').each(function () {
      octavoN.push($(this));
    });
    $('.loscuadritosN9').children('.cuadrito').each(function () {
      novenoN.push($(this));
    });
    var indice1 = 0;
    var indice2 = 0;
    var indice3 = 0;
    var indice4 = 0;
    var indice5 = 0;
    var indice6 = 0;
    var indice7 = 0;
    var indice8 = 0;
    var indice9 = 0;
    var intervaloPrimerN = setInterval(animaPrimerNivel,1000);
    var intervaloSegundoN;
    var intervaloTercerN;
    var intervaloCuartoN;
    var intervaloQuintoN;
    var intervaloSextoN;
    var intervaloSeptimoN;
    var intervaloOctavoN;
    var intervaloNovenoN;
    var movate;
    var movate1;
    function animaPrimerNivel()
    {
      $(primerN[indice1]).clone().attr('id','clon1').appendTo(primerN[indice1]).css("z-index", "1");
      $(primerN[indice1 + 1]).clone().attr('id','clon2').appendTo(primerN[indice1 + 1]).css("z-index", "1");
      $(primerN[indice1 + 2]).clone().attr('id','clon3').appendTo(primerN[indice1 + 2]).css("z-index", "1");
      $(primerN[indice1 + 3]).clone().attr('id','clon4').appendTo(primerN[indice1 + 3]).css("z-index", "1");
      $(primerN[indice1 + 4]).clone().attr('id','clon5').appendTo(primerN[indice1 + 4]).css("z-index", "1");
      var arriba1 = document.getElementById("clon1");
      var arriba2 = document.getElementById("clon2");
      var arriba3 = document.getElementById("clon3");
      var arriba4 = document.getElementById("clon4");
      var arriba5 = document.getElementById("clon5");
      var posArriba = $(primerN[indice1]).position();
      var posAbajo = $(segundoN[indice1]).position();
      var posT = 0;
      var posLeft = 0;
      var offset = 0;
      var id = setInterval(framePrimerN, 5);
      function framePrimerN(){
        if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) < 1)// && (Math.abs(posAbajo.left - posArriba.left + offset + posLeft) <= 1))
        {
          clearInterval(id);
          $("#clon1").remove();
          $("#clon2").remove();
          $("#clon3").remove();
          $("#clon4").remove();
          $("#clon5").remove();
          var auxIndice = indice1 - 4;
          if(auxIndice < 0)
            auxIndice = 6;
          $(segundoN[auxIndice - 1]).css("visibility", "visible");
          $(segundoN[auxIndice]).css("visibility", "visible");
          $(segundoN[auxIndice + 1]).css("visibility", "visible");
          $(segundoN[auxIndice + 2]).css("visibility", "visible");
          $(segundoN[auxIndice + 3]).css("visibility", "visible");
        }
        else
        {
          if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) > 1)
          {
            posT++;
            arriba1.style.top = posT + 'px';
            arriba2.style.top = posT + 'px';
            arriba3.style.top = posT + 'px';
            arriba4.style.top = posT + 'px';
            arriba5.style.top = posT + 'px';
          }
          var alinearY = (Math.abs(posAbajo.left - posArriba.left + offset + posLeft));
          var izq = posAbajo.left - posArriba.left + offset;
          if(alinearY > 1)
          {
            if(izq < 0)
            {
              posLeft++;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 'px';
              arriba3.style.left = -posLeft + 'px';
              arriba4.style.left = -posLeft + 'px';
              arriba5.style.left = -posLeft + 'px';
            }
            else if(izq >= 0)
            {
              posLeft--;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 'px';
              arriba3.style.left = -posLeft + 'px';
              arriba4.style.left = -posLeft + 'px';
              arriba5.style.left = -posLeft + 'px';
            }
          }

        }
      }
      indice1 += 5;
      if(indice1 >= 10){
        clearInterval(intervaloPrimerN);
        intervaloSegundoN = setInterval(animaSegundoNivel, 1000);
      }
    }

    function animaSegundoNivel()
    {
      $(segundoN[indice2]).clone().attr('id','clon1').appendTo(segundoN[indice2]).css("z-index", "1");
      $(segundoN[indice2 + 1]).clone().attr('id','clon2').appendTo(segundoN[indice2 + 1]).css("z-index", "1");
      $(segundoN[indice2 + 2]).clone().attr('id','clon3').appendTo(segundoN[indice2 + 2]).css("z-index", "1");
      $(segundoN[indice2 + 3]).clone().attr('id','clon4').appendTo(segundoN[indice2 + 3]).css("z-index", "1");
      $(segundoN[indice2 + 4]).clone().attr('id','clon5').appendTo(segundoN[indice2 + 4]).css("z-index", "1");
      var arriba1 = document.getElementById("clon1");
      var arriba2 = document.getElementById("clon2");
      var arriba3 = document.getElementById("clon3");
      var arriba4 = document.getElementById("clon4");
      var arriba5 = document.getElementById("clon5");
      var posArriba = $(segundoN[indice2]).position();
      var posAbajo = $(tercerN[indice2]).position();
      var posT = 0;
      var posLeft = 0;
      var offset = 0;
      var id = setInterval(frameSegundoN, 5);
      function frameSegundoN(){
        if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) < 1)// && (Math.abs(posAbajo.left - posArriba.left - posLeft) < 1))
        {
          clearInterval(id);
          $("#clon1").remove();
          $("#clon2").remove();
          $("#clon3").remove();
          $("#clon4").remove();
          $("#clon5").remove();
          var auxIndice = indice2 - 4;
          if(auxIndice < 0)
            auxIndice = 6;
          $(tercerN[auxIndice - 1]).css("visibility", "visible");
          $(tercerN[auxIndice]).css("visibility", "visible");
          $(tercerN[auxIndice + 1]).css("visibility", "visible");
          $(tercerN[auxIndice + 2]).css("visibility", "visible");
          $(tercerN[auxIndice + 3]).css("visibility", "visible");
        }
        else
        {
          if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) > 1)// && (Math.abs(posAbajo.left - posArriba.left + offset + posLeft)) < 1)
          {
            posT++;
            arriba1.style.top = posT + 'px';
            arriba2.style.top = posT + 'px';
            arriba3.style.top = posT + 'px';
            arriba4.style.top = posT + 'px';
            arriba5.style.top = posT + 'px';
            var mov = 0;
            if(indice2 > 2)
              mov = 20;
            arriba4.style.left = -posLeft + mov + 'px';
            arriba5.style.left = -posLeft + mov + 'px';
          }
          var alinearY = (Math.abs(posAbajo.left - posArriba.left + offset + posLeft));
          var izq = posAbajo.left - posArriba.left + offset;
          if(alinearY > 1)
          {
            if(izq < 0)
            {
              posLeft++;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 'px';
              arriba3.style.left = -posLeft + 'px';
              var mov = 0;
              if(indice2 > 2)
                mov = 20;
              arriba4.style.left = -posLeft + mov + 'px';
              arriba5.style.left = -posLeft + mov + 'px';
            }
            else if(izq >= 0)
            {
              posLeft--;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 'px';
              arriba3.style.left = -posLeft + 'px';
              var mov = 0;
              if(indice2 > 2)
                mov = 20;
              arriba4.style.left = -posLeft + mov + 'px';
              arriba5.style.left = -posLeft + mov + 'px';
            }
          }

        }
      }

      indice2 += 5;
      if(indice2 >= 10){
        clearInterval(intervaloSegundoN);
        intervaloTercerN = setInterval(animaTercerNivel, 1000);
      }

    }

    function animaTercerNivel()
    {
      $(tercerN[indice3]).clone().attr('id','clon1').appendTo(tercerN[indice3]).css("z-index", "1");
      $(tercerN[indice3 + 1]).clone().attr('id','clon2').appendTo(tercerN[indice3 + 1]).css("z-index", "1");
      $(tercerN[indice3 + 2]).clone().attr('id','clon3').appendTo(tercerN[indice3 + 2]).css("z-index", "1");
      $(tercerN[indice3 + 3]).clone().attr('id','clon4').appendTo(tercerN[indice3 + 3]).css("z-index", "1");
      $(tercerN[indice3 + 4]).clone().attr('id','clon5').appendTo(tercerN[indice3 + 4]).css("z-index", "1");
      var arriba1 = document.getElementById("clon1");
      var arriba2 = document.getElementById("clon2");
      var arriba3 = document.getElementById("clon3");
      var arriba4 = document.getElementById("clon4");
      var arriba5 = document.getElementById("clon5");
      var posArriba = $(tercerN[indice3]).position();
      var posAbajo = $(cuartoN[indice3]).position();
      var posT = 0;
      var posLeft = 0;
      var offset = 0;
      var id = setInterval(frameTercerN, 5);
      function frameTercerN(){
        if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) < 1)// && (Math.abs(posAbajo.left - posArriba.left + offset + posLeft) <= 1))
        {
          clearInterval(id);
          $("#clon1").remove();
          $("#clon2").remove();
          $("#clon3").remove();
          $("#clon4").remove();
          $("#clon5").remove();
          var auxIndice = indice3 - 4;
          if(auxIndice < 0)
            auxIndice = 6;
          $(cuartoN[auxIndice - 1]).css("visibility", "visible");
          $(cuartoN[auxIndice]).css("visibility", "visible");
          $(cuartoN[auxIndice + 1]).css("visibility", "visible");
          $(cuartoN[auxIndice + 2]).css("visibility", "visible");
          $(cuartoN[auxIndice + 3]).css("visibility", "visible");
        }
        else
        {
          if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) > 1)
          {
            posT++;
            arriba1.style.top = posT + 'px';
            arriba2.style.top = posT + 'px';
            arriba3.style.top = posT + 'px';
            arriba4.style.top = posT + 'px';
            arriba5.style.top = posT + 'px';
          }
          var alinearY = (Math.abs(posAbajo.left - posArriba.left + offset + posLeft));
          var izq = posAbajo.left - posArriba.left + offset;
          if(alinearY > 1)
          {
            if(izq < 0)
            {
              posLeft++;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 'px';
              var mov = 0;
              if(indice2 > 1)
                mov = 20;
              arriba3.style.left = -posLeft + mov + 'px';
              arriba4.style.left = -posLeft + mov + 'px';
              arriba5.style.left = -posLeft + mov + 30 + 'px';
            }
            else if(izq >= 0)
            {
              posLeft--;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 'px';
              var mov = 0;
              if(indice2 > 2)
                mov = 20;
              arriba3.style.left = -posLeft + mov + 'px';
              arriba4.style.left = -posLeft + mov + 'px';
              arriba5.style.left = -posLeft + mov + 30 + 'px';
            }
          }

        }
      }
      indice3 += 5;
      if(indice3 >= 10){
        clearInterval(intervaloTercerN);
        intervaloCuartoN = setInterval(animaCuartoNivel, 1000);
      }
    }

    function animaCuartoNivel()
    {
      $(cuartoN[indice4]).clone().attr('id','clon1').appendTo(cuartoN[indice4]).css("z-index", "1");
      $(cuartoN[indice4 + 1]).clone().attr('id','clon2').appendTo(cuartoN[indice4 + 1]).css("z-index", "1");
      $(cuartoN[indice4 + 2]).clone().attr('id','clon3').appendTo(cuartoN[indice4 + 2]).css("z-index", "1");
      $(cuartoN[indice4 + 3]).clone().attr('id','clon4').appendTo(cuartoN[indice4 + 3]).css("z-index", "1");
      $(cuartoN[indice4 + 4]).clone().attr('id','clon5').appendTo(cuartoN[indice4 + 4]).css("z-index", "1");
      var arriba1 = document.getElementById("clon1");
      var arriba2 = document.getElementById("clon2");
      var arriba3 = document.getElementById("clon3");
      var arriba4 = document.getElementById("clon4");
      var arriba5 = document.getElementById("clon5");
      var posArriba = $(cuartoN[indice4]).position();
      var posAbajo = $(quintoN[indice4]).position();
      var posT = 0;
      var posLeft = 0;
      var offset = 0;
      var id = setInterval(frameCuartoN, 5);
      function frameCuartoN(){
        if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) < 1)// && (Math.abs(posAbajo.left - posArriba.left + offset + posLeft) <= 1))
        {
          clearInterval(id);
          $("#clon1").remove();
          $("#clon2").remove();
          $("#clon3").remove();
          $("#clon4").remove();
          $("#clon5").remove();
          var auxIndice = indice4 - 4;
          if(auxIndice < 0)
            auxIndice = 6;
          $(quintoN[auxIndice - 1]).css("visibility", "visible");
          $(quintoN[auxIndice]).css("visibility", "visible");
          $(quintoN[auxIndice + 1]).css("visibility", "visible");
          $(quintoN[auxIndice + 2]).css("visibility", "visible");
          $(quintoN[auxIndice + 3]).css("visibility", "visible");
        }
        else
        {
          if((Math.abs(posAbajo.top - posArriba.top - 40) - posT) > 1)
          {
            posT++;
            arriba1.style.top = posT + 'px';
            arriba2.style.top = posT + 'px';
            arriba3.style.top = posT + 'px';
            arriba4.style.top = posT + 'px';
            arriba5.style.top = posT + 'px';
          }
          var alinearY = (Math.abs(posAbajo.left - posArriba.left + offset + posLeft));
          var izq = posAbajo.left - posArriba.left + offset;
          if(alinearY > 1)
          {
            if(izq < 0)
            {
              posLeft++;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 20 + 'px';
              var mov = 0;
              if(indice2 > 1)
                mov = 20;
              arriba3.style.left = -posLeft + mov + 'px';
              arriba4.style.left = -posLeft + mov + 'px';
              arriba5.style.left = -posLeft + mov + 10 + 'px';
            }
            else if(izq >= 0)
            {
              posLeft--;
              arriba1.style.left = -posLeft + 'px';
              arriba2.style.left = -posLeft + 20 + 'px';
              var mov = 0;
              if(indice2 > 1)
                mov = 20;
              arriba3.style.left = -posLeft + mov + 'px';
              arriba4.style.left = -posLeft + mov + 'px';
              arriba5.style.left = -posLeft + mov + 10 + 'px';
            }
          }

        }
      }
      indice4 += 5;
      if(indice4 >= 10){
        clearInterval(intervaloCuartoN);
        intervaloQuintoN = setInterval(animaQuintoNivel, 8000);

      }
    }

    function animaQuintoNivel(){
      var movate2;
      movate1 = setInterval(function(){
        $(quintoN[0]).css("border-color", "red");
      $(quintoN[1]).css("border-color", "red");
      movate = setInterval(moverte(quintoN[1], sextoN[0]), 500);
      movate = setInterval(moverte(quintoN[0], sextoN[1]), 1000);
      movate2 = setInterval(function(){
        movate = setInterval(moverte(quintoN[2], sextoN[2]), 1500);
        clearInterval(movate2);
      },2000);
      clearInterval(movate1);
    },1000);
      $(quintoN[3]).css("border-color", "red");
      $(quintoN[4]).css("border-color", "red");
      //movate = setInterval(moverte(quintoN[3], sextoN[3]), 1000);
      //movate = setInterval(moverte(quintoN[4], sextoN[4]), 1000);
      $(quintoN[5]).css("border-color", "red");
      $(quintoN[6]).css("border-color", "red");
      //movate = setInterval(moverte(quintoN[5], sextoN[5]), 1000);
      //movate = setInterval(moverte(quintoN[6], sextoN[6]), 1000);
      //movate = setInterval(moverte(quintoN[7], sextoN[7]), 1000);
      $(quintoN[8]).css("border-color", "red");
      $(quintoN[9]).css("border-color", "red");
      //movate = setInterval(moverte(quintoN[9], sextoN[8]), 1000);
      //movate = setInterval(moverte(quintoN[8], sextoN[9), 1000);
      clearInterval(intervaloQuintoN);
    }


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



  });
})
