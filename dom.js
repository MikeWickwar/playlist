$(document).ready(function(){
  console.log("hello world");
// getImgs();

})

var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json",
});
var pGetter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/post",
  method: "POST"
});
getter.done(function(response){
  console.log(response);
  for (var i = 0; i < 3; i++) {
    $("#placeImg").append("<img id='img"+[i]+"'class='albumC' src='images/"+getImgs(response)+"' alt='' />");
  }
})
pGetter.done(function(response){
  console.log(response);
  var a = response;
})
