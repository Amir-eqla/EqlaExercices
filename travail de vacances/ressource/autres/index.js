let userInput= parseInt(prompt("tapez 1 si vous êtes un homme \n tapez 2 si vous êtes une femme"))

let mainTitle=document.getElementById("MainTitle")
Pub(1);

function Pub(flag)
{
if (flag==0)
{
mainTitle.innerHTML='<span style="color:red">Karim Benzema</span>'

flag=1

}

else if ( userInput==1)
{
mainTitle.innerHTML=
'<span style="color:blue">Bonjour Monsieur</span>' 

flag=0
}

else

{

mainTitle.innerHTML='<span style="color:pink">Bonjour Madame</span>'

flag=0

}

setTimeout(() => Pub(flag), 5000);

}

let myButton=document.getElementById("mon bouton")

myButton.addEventListener("click", function(){alert("Hello word")})

myButton.addEventListener("mouseover", function(){alert("bonne vaccance")})

document.getElementById("KB91image").addEventListener("click", function(){
document.getElementById("audio1").play()});

document.getElementById("KB92image").addEventListener("click", function(){
document.getElementById("audio2").play()});
document.getElementById("KB93image").addEventListener("click", function(){
document.getElementById("audio3").play()});



// let pubUEFA=document.getElementById("pubUEFA")
// Pub(1);
// let pubPS5=document.getElementById("pubPS5")
// pubPS5(2)

// function pub (flag)
// {
// if(flag==0)
// {
// pubUEFA.id=pubUEFA
// }
// else
// pubUEFA.id=pubPS5

// setTimeout(() => Pub(flag), 5000);

// }
let maintenant=new Date();
let jour=maintenant.getDate();
let mois=maintenant.getMonth()+1;
let an=maintenant.getFullYear();
document.write("Nous sommes le ",jour,"/",mois,"/",an,".");
