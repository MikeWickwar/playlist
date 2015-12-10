function getRImgs(response){
  var r = response.results[ran()].cover_art;
  return r
}
function ran(){
  var ran= (Math.random()*4).toFixed();
  return ran;
}
function getImgs(response, i){
  var r = response.results[i].cover_art;
  return r
}
