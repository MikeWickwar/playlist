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
  for (var i = 0; i < response.results.length; i++) {
    console.log(getImgs(response, i));
    $("photos").append("<img id='imgIcon"+[i]+"' class='sImg' src='images/"+getImgs(response, i)+"' alt='' />");
  }
})
pGetter.done(function(response){
  console.log(response);
  var a = response;
})
