// Cart
var finestraCart = document.querySelector('.finestra-cart');
var closeCart = document.querySelector('.finestra-cart__back');
var addToCart = document.getElementsByClassName("prodotto__box__cart");  
for (let i = 0; i < addToCart.length; i++) {  // Mi permette di definire tutti i prodotti con variabili diverse 
    var button = addToCart[i];
    button.addEventListener('click',openFinestraCart);
}
// Open Cart
function openFinestraCart(){
    finestraCart.classList.add("cart--open");
}
// Close Cart
closeCart.onclick = ()=>{
    finestraCart.classList.remove("cart--open");
}









// Cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

// Making Function 
function ready(){
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("finestra-cart__prodotto__rim");
    for (let i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeFinestraCartItem);
    }


}

// Quantity Changes
function aggiornaQuantitaPiu(title) {
    var finestraCartProdotto = document.getElementById(title).parentElement;
    var quantita = finestraCartProdotto.getElementsByClassName("finestra-cart__prodotto__quant")[0];   
    var quantitaVecchia = parseFloat(quantita.innerText.replace("Qt. ", ""));
    var quantitaAggiornata = quantitaVecchia + 1;
    quantita.innerText = `Qt. ${quantitaAggiornata}`;
    var prezzo = finestraCartProdotto.getElementsByClassName("finestra-cart__prodotto__prezzo")[0];
    var prezzoVecchio = parseFloat(prezzo.innerText.replace("€ ", ""));
    var prezzoCad =  prezzoVecchio / quantitaVecchia;
    var prezzoAggiornato = prezzoVecchio + prezzoCad;
    prezzo.innerText = `€ ${prezzoAggiornato}`;
    updatetotalFinestra();
}
function aggiornaQuantitaMeno(title) {
    var finestraCartProdotto = document.getElementById(title).parentElement;
    var quantita = finestraCartProdotto.getElementsByClassName("finestra-cart__prodotto__quant")[0];   
    var quantitaVecchia = parseFloat(quantita.innerText.replace("Qt. ", ""));
    if(quantitaVecchia >= 2){
        var quantitaAggiornata = quantitaVecchia - 1;
        quantita.innerText = `Qt. ${quantitaAggiornata}`;
    }
    var prezzo = finestraCartProdotto.getElementsByClassName("finestra-cart__prodotto__prezzo")[0];
    var prezzoVecchio = parseFloat(prezzo.innerText.replace("€ ", ""));
    var prezzoCad =  prezzoVecchio / quantitaVecchia;
    if (quantitaVecchia >= 2){
        var prezzoAggiornato = prezzoVecchio - prezzoCad;
        prezzo.innerText = `€ ${prezzoAggiornato}`;
    }
    updatetotalFinestra();
}




// Remove Items From Cart
function removeFinestraCartItem(event){
    var buttonClicked = event.target;
    var buttonClickedParent = buttonClicked.parentElement.parentElement;
    var title = buttonClickedParent.getElementsByClassName("finestra-cart__prodotto__nome")[0].innerText;
    
    buttonClicked.parentElement.parentElement.parentElement.remove(); // Devo selezionare l'elemento contenitore del prodotto nel carrello, ossia quello con classe finestra-cart__prodotto e la vado a rimuovere 
    removeCartItemByFinestraCart(title);  // Remove Items By Finestra Cart
    updatetotalFinestra();
}

// Remove Items By Cart
function removeCartItemByCart(title){
    var finestraCartProdottoInfo = document.getElementById(title);
    finestraCartProdottoInfo.parentElement.remove();
    updatetotalFinestra();
}

// Add To Finestra Carrello
function addProductToFinestraCarello(title, price, quantity, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("finestra-cart__prodotto");
    var cartItems = document.getElementsByClassName("finestra-cart__contenitore-prodotto")[0]; // Il contenitore di tutti iprodotti che vanno a finire nel carrello
    var cartItemsName = cartItems.getElementsByClassName("finestra-cart__prodotto__nome");
    for (let i = 0; i < cartItemsName.length; i++) {
        if(cartItemsName[i].innerText == title){
            alert(`Hai già aggiunto ${title} al carrello.
Per modificare la quantità vai nel carrello.`)
            return;
        }
    }

    var cartBoxContent = `  
                            <img src="${productImg}" class="finestra-cart__prodotto__imm" id="${title}">
                            <div id="finestra-cart__prodotto__info">
                                <div class="finestra-cart__prodotto__nome">${title}</div>
                                <div id="finestra-cart__prodotto__prezzo-quant">
                                    <div class="finestra-cart__prodotto__quant">Qt. ${quantity}</div>
                                    <div class="finestra-cart__prodotto__prezzo">€ ${price}</div>
                                    <img src="Immagini/secchio.png" class="finestra-cart__prodotto__rim">
                                </div>
                            </div>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("finestra-cart__prodotto__rim")[0].addEventListener('click', removeFinestraCartItem);
}









// Update Total
function updatetotalFinestra() {
    var cartContent = document.getElementsByClassName("finestra-cart__contenitore-prodotto")[0];
    var cartBoxes = cartContent.getElementsByClassName("finestra-cart__prodotto");
    var total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("finestra-cart__prodotto__prezzo")[0];
        var quantityElement = cartBox.getElementsByClassName("finestra-cart__prodotto__quant")[0];
        var price = parseFloat(priceElement.innerText.replace("€ ", ""));
        var quantity = parseFloat(quantityElement.innerText.replace("Qt. ", ""));
        total = total + price;
    }
    // If Price Contain Some Cents Value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("finestra-cart__totale__prezzo")[0].innerText = total + ' €';
}


/*
// Cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

// Making Function 
function ready(){
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("finestra-cart__prodotto__rim");
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName("prodotto__box__Qt__numero");
    var quantityMinus = document.getElementsByClassName("prodotto__box__sub");
    var quantityPlus = document.getElementsByClassName("prodotto__box__add");
    for (let i = 0; i < quantityInputs.length; i++) {
        var inputMinus = quantityMinus[i];
        var inputPlus = quantityPlus[i];
        inputMinus.addEventListener('click',quantityChanged);
        inputPlus.addEventListener('click', quantityChanged);
    }
    // Add To Cart
    var addCart = document.getElementsByClassName("prodotto__box__cart");
    for (let i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}









// Remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove(); // Devo selezionare l'elemento contenitore del prodotto nel carrello, ossia quello con classe finestra-cart__prodotto e la vado a rimuovere 
    updatetotal();
}

// Quantity Changes
function quantityChanged() {
    updatetotal();
}

// Add To Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement.parentElement.parentElement.parentElement;
    var title = shopProducts.getElementsByClassName("prodotto__nome")[0].innerText;
    var price = shopProducts.getElementsByClassName("prodotto__box__prezzo__numero")[0].innerText;
    var quantity = shopProducts.getElementsByClassName("prodotto__box__Qt__numero")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("immagine-prodotto")[0].src;
    addProductToCart(title, price, quantity, productImg);
    updatetotal();
}
function addProductToCart(title, price, quantity, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("finestra-cart__prodotto");
    var cartItems = document.getElementsByClassName("finestra-cart__contenitore-prodotto")[0]; // Il contenitore di tutti iprodotti che vanno a finire nel carrello
    var cartItemsName = cartItems.getElementsByClassName("finestra-cart__prodotto__nome");
    for (let i = 0; i < cartItemsName.length; i++) {
        if(cartItemsName[i].innerText == title){
            alert(`Hai già aggiunto ${title} al carrello`)
            return;
        }
    }

    var cartBoxContent = `  
                            <img src="${productImg}" class="finestra-cart__prodotto__imm">
                             <div id="finestra-cart__prodotto__info">
                                <div class="finestra-cart__prodotto__nome">${title}</div>
                                <div id="finestra-cart__prodotto__prezzo-quant">
                                    <div class="finestra-cart__prodotto__quant">Qt. ${quantity}</div>
                                    <div class="finestra-cart__prodotto__prezzo">€ ${price}</div>
                                    <img src="Immagini/secchio.png" class="finestra-cart__prodotto__rim">
                                </div>
                            </div>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("finestra-cart__prodotto__rim")[0].addEventListener('click', removeCartItem);
}

// Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("finestra-cart__contenitore-prodotto")[0];
    var cartBoxes = cartContent.getElementsByClassName("finestra-cart__prodotto");
    var total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("finestra-cart__prodotto__prezzo")[0];
        var quantityElement = cartBox.getElementsByClassName("finestra-cart__prodotto__quant")[0];
        var price = parseFloat(priceElement.innerText.replace("€ ", ""));
        var quantity = parseFloat(quantityElement.innerText.replace("Qt. ", ""));
        total = total + price;
    }
    // If Price Contain Some Cents Value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("finestra-cart__totale__prezzo")[0].innerText = total + ' €';
}

*/