// ///////////////////////////Selects element//////////////////////////
//
// $ = document.querySelector
//
//If script put in header part:
// $(document).ready(function(){
//   $("h1").css("color","red");
// })
//
//If script put just before the closing tab of body
//$("h1").css("color","red");
//
//document.querySelectorAll("button") === $("button") both select all
//
//.css method
//.css("color") => get the value
//.css(item needs to be changed, value) => 2 params, set the value
//$("h1").css("color","green");
$("h1").addClass("big-title margin-50"); //two classes with a spce
//$("h1").hasClass =? returns a boolen


////////////////////////////// Manipulates Text/////////////////////////
//$("h1").text("Bye");
$("button").text("Don't click me");
$("button").html("<em>Hey</em>") //->changes inner HTML as well


///////////////////////////// Manipulate attribute///////////////////////
$("a").attr("href","https://www.douban.com")


//////////////////////////// Add Event lisstener /////////////////////////
$("h1").click(function(){
  $("h1").css("color","purple");
})

$("button").click(function(){
  $("h1").css("color","purple");
})

$(document).keypress(function(event){
  $("h1").text(event.key);
})

//on(event,function)
$("h1").on("mouseover",function(){
  $("h1").css("color","pink");
  $("h1").text("Bye");
})



/////////////////////////// Add and Remove Elements ////////////////////////////
$("h1").before("<button>Neeeew</button>");
$("h1").after("<button>New</button>");

$("h1").prepend("<button>Neeeew</button>"); //add inside the html element before the end
$("h1").append("<button>Neeeew</button>");
//.remove to remove element



////////////////////////// Animation with jQuery ////////////////////////////////
// $("button").click(function(){
//   $("h1").toggle(); //.hide & .show
// })
//
// $("button").click(function(){
//   $("h1").fadeToggle(); //.fadeOut & .fadeIn
// })
//
// $("button").click(function(){
//   $("h1").slideToggle(); //.slideUp & .slideDown
// })

// $("button").on("click", function(){
//   $("h1").animate({opacity: 0.5});
// });
// $("button").on("click", function(){
//   $("h1").animate({margin: 20});
// });

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});
