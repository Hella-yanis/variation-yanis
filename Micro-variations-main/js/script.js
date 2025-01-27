var positionY;
var scrollTop;
var lastPositionX =0; 

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
    
////vous pouvez rédiger vos modification ici !



/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on( 'scroll', function(){
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
 });

 $(window).on( "scroll", function() {
  var scrollReduit = scrollTop*0.05;
$("#trait1").css({
  'transform' : 'rotate('+scrollReduit+'deg)'
})
$("#trait2").css({
  'transform' : 'rotate('+scrollReduit+'deg)'
})

$("#trait3").css({
  'transform' : 'rotate('+scrollReduit+'deg)'
})

$("#trait4").css({
  'transform' : 'rotate('+scrollReduit+'deg)'
})

$("#trait4").css({
  'transform' : 'rotate('+scrollReduit+'deg)'
})

$("#trait5").css({
  'transform' : 'rotate('+scrollReduit+'deg)'
})

$("#trait6").css({
  'transform' : 'rotate('+scrollReduit+'deg)'
})

$("#trait7").css({
  'transform' : 'rotate('+scrollReduit+'deg)',

})
 });



 $(window).on("mousemove",function(){

var opacityY= event.pageY - $(window).scrollTop();

  $("#cercle1").css({
    'height' : ""+event.pageX*0.1+"px",
    'opacity' : ""+1/(event.pageY-scrollTop)*100+"",
     
        
  
  })

  $("#cercle2").css({
    'height' : ""+event.pageX*0.1+"px",
  'opacity' : ""+1/(event.pageY-scrollTop)*100+"",
  })

  $("#cercle3").css({
    'height' : ""+event.pageX*0.1+"px",
  'opacity' : ""+1/(event.pageY-scrollTop)*100+"",
  })

  $("#cercle4").css({
    'height' : ""+event.pageX*0.1+"px",
    'opacity' : ""+1/(event.pageY-scrollTop)*100+"",
  })

  $("#cercle5").css({
    'height' : ""+event.pageX*0.1+"px",
  'opacity' : ""+1/(event.pageY-scrollTop)*100+"",
  })

  
  }) 

//ici on utilise une classe déplacment qui sera appliquée à tous les éléménts HTML qui peuvent être déplacer
var intervalId;
var i = 0;
$('.deplacement').on( "mousedown", function() {
  $(this).toggleClass('move') //ajouter ou retirer la classe "move" à l'élément sur lequel on clique
}), 



 $(window).on('mousemove', function(){
  positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
 
  //ensuite quand on bouge la sourie on déplace l'élément sur lequel on a cliqué
  $('.move').css({
      'position' : 'absolute',
      'top' : ''+positionY+'px',
      'left': event.pageX+'px',
  })

})

  




  
  

})




