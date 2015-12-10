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
  var a = response;
  getImgs(response);
  for (var i = 0; i < a.length; i++) {
    $('img').attr('id',i);
    a[i]
  }
})
pGetter.done(function(response){
  console.log(response);
  var a = response;
})
