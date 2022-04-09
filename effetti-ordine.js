/* Effetto pulsante (Aggiungi al carrello)*/
addCart = document.getElementsByClassName("prodotto__box__cart"); // punto il primo elemento dall'alto che ha questa classe 
for (let i = 0; i < addCart.length; i++) {    // addCart.lenght è il totale degli elementi che hanno questa classe
    var button = addCart[i];
    button.addEventListener('mousedown', buttonAddCartEffectUp);
}

for (let i = 0; i < addCart.length; i++) {    // addCart.lenght è il totale degli elementi che hanno questa classe
    var button = addCart[i];
    button.addEventListener('mouseup', buttonAddCartEffectDown);
}

function buttonAddCartEffectUp(event){
    var button = event.target;
    button.classList.remove("border-b");
}
function buttonAddCartEffectDown(event){
    var button = event.target;
    button.classList.add("border-b");
}