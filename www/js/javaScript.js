
//test.innerHTML+="<img src='https://via.placeholder.com/360'>".style.height="180"
//test.innerHTML+="<img src="+ 'https://via.placeholder.com/460'+ ">
//string concationation


let generator=["./splash/960x1960"];

let i =3;
for(; i<13; i++)
{
  document.getElementById("wrapper").innerHTML+= "<img id="+'grid'+ i +" src=" +generator[0]+ i +".png"+" width="+'100%'+"+ height="+'100%'+">";

}




// let test = document.getElementById("wrapper").innerHTML=generator[0];
