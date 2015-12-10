var btn1 = document.getElementById("cTBtn");

btn1.addEventListener('click',function(){
  window.location='index2.html';
})

function getImgs(response){
  var r = response.results[ran()].cover_art;
  return r
}
function ran(){
  var ran= (Math.random()*4).toFixed();
  return ran;
}
