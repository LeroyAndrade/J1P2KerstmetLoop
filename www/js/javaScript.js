let generator=["./splash/960x1960"];

let i =3;
for(; i<13; i++)
{
  document.getElementById("wrapper").innerHTML+= "<img id="+'grid'+ i +" src=" +generator[0]+ i +".png"+" width="+'100%'+"+ height="+'100%'+">";
}
