
let a=document.getElementById("dom");
a.style.color="blue";





let x= document.getElementById("logo");
function changelogo(x)
{
 x.src="images/logo1.jpg";
}

function reset(x)
{
    x.src="images/entri.webp";
}

x.setAttribute("hidden",true)
x.removeAttribute("hidden",true)