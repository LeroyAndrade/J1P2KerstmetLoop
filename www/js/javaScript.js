
//test.innerHTML+="<img src='https://via.placeholder.com/360'>".style.height="180"
//test.innerHTML+="<img src="+ 'https://via.placeholder.com/460'+ ">
//string concationation


let generator=["../splash/960x1960.png"];
//  "<img src="+'https://via.placeholder.com/960x1960'+">", "<img src="+'https://via.placeholder.com/960x1960'+">","<img src="+'https://via.placeholder.com/960x1960'+">"];
/*
                "<img src="+'https://via.placeholder.com/960x1960'+">","<img src="+'https://via.placeholder.com/960x1960'+">",
                "<img src="+'https://via.placeholder.com/960x1960'+">","<img src="+'https://via.placeholder.com/960x1960'+">",
                "<img src="+'https://via.placeholder.com/960x1960'+">","<img src="+'https://via.placeholder.com/960x1960'+">",
                "<img src="+'https://via.placeholder.com/960x1960'+">","<img src="+'https://via.placeholder.com/960x1960'+">",
                "<img src="+'https://via.placeholder.com/960x1960'+">","<img src="+'https://via.placeholder.com/960x1960'+">",
                "<img src="+'https://via.placeholder.com/960x1960'+">"]
*/
for (let i=0; i<=12; i++)
{
  document.write("<img src="+'generator[i]'"+"</img>");
//  let test+=document.getElementById("wrapper").innerHTML=text;
}

// let test = document.getElementById("wrapper").innerHTML=generator[0];
