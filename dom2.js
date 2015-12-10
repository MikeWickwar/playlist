// $(document).ready(function(){
//   console.log("hello world");
// })
var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json",
});
//append imgs to scrl bar
getter.done(function(response){
  console.log(response);
  a = response;
  for (var i = 0; i < response.results.length; i++) {
  console.log(getImgs(response, i));
      $("photos").append("<img id='"+[i]+"' class='sImg' src='images/"+getImgs(response, i)+"' alt='' />");
      }
  })
  //add tracks to text area
$(document).on('click','.sImg',function(response){
  var i = parseInt(this.id);
  var acu = $('textarea').val();
  console.log(acu);
  acu += $('textarea').val(a.results[i].title +"\n"+acu);
  console.log(a.results[i].title);
})
//clear textarea
$(document).on('click','#cTBtn2a',function(){
  $('textarea').val('');
})
//post
$(document).on('click','#cTBtn2b',function(){
  var out = $('textarea').val();
  console.log(out);
  var pGetter = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/post",
    method: "POST"
  });
  pGetter.done(function(response){
    console.log(response);
    $('textarea').val('');
  })
})
