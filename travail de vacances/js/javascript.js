// Etape 1 :
let name = prompt("Comment tu t'appel ?")

let substitution = document.getElementById("ndu")
substitution.innerHTML = name

// Etape 2 :
let body = document.getElementById("Body")
function ChangeColor()
{
    if(body.style.background!="black")
    {
        // Passer le site en fond noir écriture blanche
    body.style.background="black";
    body.style.color="white";
    }
    else
    {
        // Passer le site en fond blanc sur écriture noire.
    body.style.background="white";
    body.style.color="black";
    }
}
document.getElementById("BoutonMagique").addEventListener("click",ChangeColor)
xxxw