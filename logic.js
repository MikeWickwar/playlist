var btn1 = document.getElementById("cTBtn");

btn1.addEventListener('click',function(){
  window.location='index2.html';
})

function getImgs(response){
  var ran= (Math.random()*5).toFixed();
  // console.log(ran);
  var r = response.results[ran].cover_art;
  console.log(r);
  
}
