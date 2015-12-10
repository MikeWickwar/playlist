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
  a = response;
  for (var i = 0; i < response.results.length; i++) {
    console.log(getImgs(response, i));
      $("photos").append("<img id='"+[i]+"' class='sImg' src='images/"+getImgs(response, i)+"' alt='' />");
      }

  })

pGetter.done(function(response){
  console.log(response);
  var a = response;
})
function appendTitle(r){
  $('#tArea').append("<li>"+response.results[i].title+"</li>")

}

$(document).on('click','.sImg',function(response){
  console.log("hello I am here ! ");
  var i = parseInt(this.id);
  console.log(i);
  // postTitle(response,i);
  console.log(a);
  var acu = $('textarea').val();
  console.log(acu);
  acu += $('textarea').val(a.results[i].title +" "+acu);
  // $('#tArea').show();
  console.log(a.results[i].title);
})

//start with this piece of awesome. just need to
//get the Accumulator working
