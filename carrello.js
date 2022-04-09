// Carrello Open
let menu = document.querySelector(".menu");
let menuIcon = document.getElementsByClassName("menu-carrello")[0];
let finestraCartButton = document.getElementsByClassName("finestra-cart__button")[0];
let carrelloPop = document.getElementsByClassName("carrello")[0];
let carrelloContentPop = document.getElementsByClassName(".carrello-content")[0];
var ordineIcon = document.createElement("li");
ordineIcon.classList.add("menu-ordine");
var ordineIconContent = `<a>Ordine</a>`;
ordineIcon.innerHTML = ordineIconContent;

// Apertura 
menuIcon.onclick = ()=>{
    carrelloPop.classList.add("carrello--pop");
    menu.removeChild(menuIcon);
    menu.appendChild(ordineIcon);
}
finestraCartButton.onclick = ()=>{
    finestraCart.classList.remove("cart--open");
    carrelloPop.classList.add("carrello--pop");
    menu.removeChild(menuIcon);
    menu.appendChild(ordineIcon);
}

ordineIcon.addEventListener('click', chiudiCarrello);

function chiudiCarrello() {
    carrelloPop.classList.remove("carrello--pop");
    menu.appendChild(menuIcon);
    menu.removeChild(ordineIcon);
}


/* 
    Il ragionamento è questo, lo script di finestra carrello deve essere portato ed adattato qui, 
    poi la finestrella mostrerà solo gli ultimi tre prodotti aggiunti al carrello.
    Quindi è il carrello che gestisce tutta la situa, infatti qui si può anche modificare la quantità.
*/


// Cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

// Making Function 
function ready(){
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("carrello__prodotto__rim");
    for (let i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
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
    var buttonClickedParent = buttonClicked.parentElement.parentElement;
    var title = buttonClickedParent.getElementsByClassName("carrello__prodotto__nome")[0].innerText;
    
    buttonClicked.parentElement.parentElement.parentElement.remove(); // Devo selezionare l'elemento contenitore del prodotto nel carrello, ossia quello con classe finestra-cart__prodotto e la vado a rimuovere
    removeCartItemByCart(title);  // Remove Items By Cart
    updatetotal();
}

// Remove Items By Finestra Cart
function removeCartItemByFinestraCart(title){
    var idTitle = document.getElementById(title);
    idTitle.parentElement.parentElement.remove();
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
    addProductToFinestraCarello(title, price, quantity, productImg);
    updatetotalFinestra();
    updatetotal();
}
function addProductToCart(title, price, quantity, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("carrello__prodotto");
    var cartItems = document.getElementsByClassName("carrello__contenitore-prodotto")[0]; // Il contenitore di tutti iprodotti che vanno a finire nel carrello
    var cartItemsName = cartItems.getElementsByClassName("carrello__prodotto__nome");
    for (let i = 0; i < cartItemsName.length; i++) {
        if(cartItemsName[i].innerText == title){
            
            return;
        }
    }

    var cartBoxContent = `  
                            <img src="${productImg}" class="carrello__prodotto__imm">
                            <div class="carrello__prodotto__info">
                                <div id="${title}" class="carrello__prodotto__nome">${title}</div>
                                <div class="carrello__prodotto__prezzo-quant">
                                    <div class="carrello__prodotto__quant">Quantità ${quantity}</div>
                                    <div class="carrello__prodotto__prezzo">€ ${price}</div>
                                </div>
                                <div class="carrello__prodotto__num-rim">
                                    <div class="carrello__prodotto__num">
                                        <div class="carrello__prodotto__num__meno">-</div>
                                        <div class="carrello__prodotto__num__numero">${quantity}</div>
                                        <div class="carrello__prodotto__num__piu">+</div>
                                    </div>
                                    <div class="carrello__prodotto__rim">RIMUOVI</div>
                                </div>
                            </div>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("carrello__prodotto__rim")[0].addEventListener('click', removeCartItem);

    // Quantity Changes
    /* Va messo qua perchè altrimenti non riesce a definire le variabili in quanto,
     gli elementi che dovrebbero puntare vengono creati solo dopo aver aver aggiunto il prodotto al carrello */
    var quantityInputs = document.getElementsByClassName("carrello__prodotto__num__numero");
    var quantityMinus = document.getElementsByClassName("carrello__prodotto__num__meno");
    var quantityPlus = document.getElementsByClassName("carrello__prodotto__num__piu");
    for (let i = 0; i < quantityInputs.length; i++) {
        var inputMinus = quantityMinus[i];
        var inputPlus = quantityPlus[i];
        inputMinus.addEventListener('click',quantityChangedMinus);
        inputPlus.addEventListener('click', quantityChangedPlus);
    }
}

// Quantity Changes
function quantityChangedPlus(event) {
    var buttonClicked = event.target;
    var buttonClickedName = buttonClicked.parentElement.parentElement.parentElement;
    var title = buttonClickedName.getElementsByClassName("carrello__prodotto__nome")[0].innerText;
    aggiornaQuantitaPiu(title);
    updatetotalFinestra();
    var buttonClickedParent = buttonClicked.parentElement;
    buttonClickedParent.getElementsByClassName("carrello__prodotto__num__numero")[0].innerText++;
    var quantitaAggiornata = buttonClickedParent.getElementsByClassName("carrello__prodotto__num__numero")[0].innerText;
    updateQuantityPlus(quantitaAggiornata, buttonClicked);
    updatetotal();
}
function quantityChangedMinus(event) {
    var buttonClicked = event.target;
    var buttonClickedName = buttonClicked.parentElement.parentElement.parentElement;
    var title = buttonClickedName.getElementsByClassName("carrello__prodotto__nome")[0].innerText;
    aggiornaQuantitaMeno(title);
    updatetotalFinestra();
    var buttonClickedParent = buttonClicked.parentElement;
    var buttonClickedValue = buttonClickedParent.getElementsByClassName("carrello__prodotto__num__numero")[0].innerText;
    if (buttonClickedValue >= 2) {
        buttonClickedParent.getElementsByClassName("carrello__prodotto__num__numero")[0].innerText--;
        var quantitaAggiornata = buttonClickedParent.getElementsByClassName("carrello__prodotto__num__numero")[0].innerText;
        updateQuantityMinus(quantitaAggiornata, buttonClicked);
    }
    updatetotal();
}

function updateQuantityPlus(quantitaAggiornata, buttonClicked) {
    var buttonClickedParent = buttonClicked.parentElement.parentElement.parentElement;
    var carrelloProdottoNumeroAggiornato = buttonClickedParent.getElementsByClassName("carrello__prodotto__quant")[0];
    var quantitaVecchia = parseFloat(carrelloProdottoNumeroAggiornato.innerText.replace("Quantità ", ""));
    carrelloProdottoNumeroAggiornato.innerText = `Quantità ${quantitaAggiornata}`
    var carrelloProdottoPrezzoAggiornato = buttonClickedParent.getElementsByClassName("carrello__prodotto__prezzo")[0];
    var prezzoVecchio = parseFloat(carrelloProdottoPrezzoAggiornato.innerText.replace("€ ", ""));
    var prezzoCad =  prezzoVecchio / quantitaVecchia;
    var prezzoAggiornato = prezzoVecchio + prezzoCad;
    // If Price Contain Some Cents Value
    prezzoAggiornato = Math.round(prezzoAggiornato * 100) / 100;
    carrelloProdottoPrezzoAggiornato.innerText = `€ ${prezzoAggiornato}`
}
function updateQuantityMinus(quantitaAggiornata, buttonClicked) {
    var buttonClickedParent = buttonClicked.parentElement.parentElement.parentElement;
    var carrelloProdottoNumeroAggiornato = buttonClickedParent.getElementsByClassName("carrello__prodotto__quant")[0];
    var quantitaVecchia = parseFloat(carrelloProdottoNumeroAggiornato.innerText.replace("Quantità ", ""));
    carrelloProdottoNumeroAggiornato.innerText = `Quantità ${quantitaAggiornata}`
    var carrelloProdottoPrezzoAggiornato = buttonClickedParent.getElementsByClassName("carrello__prodotto__prezzo")[0];
    var prezzoVecchio = parseFloat(carrelloProdottoPrezzoAggiornato.innerText.replace("€ ", ""));
    var prezzoCad =  prezzoVecchio / quantitaVecchia;
    var prezzoAggiornato = prezzoVecchio - prezzoCad;
    // If Price Contain Some Cents Value
    prezzoAggiornato = Math.round(prezzoAggiornato * 100) / 100;
    carrelloProdottoPrezzoAggiornato.innerText = `€ ${prezzoAggiornato}`
}


// Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("carrello__contenitore-prodotto")[0];
    var cartBoxes = cartContent.getElementsByClassName("carrello__prodotto");
    var total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("carrello__prodotto__prezzo")[0];
        var quantityElement = cartBox.getElementsByClassName("carrello__prodotto__quant")[0];
        var price = parseFloat(priceElement.innerText.replace("€ ", ""));
        var quantity = parseFloat(quantityElement.innerText.replace("Quantità ", ""));
        total = total + price;
    }
    // If Price Contain Some Cents Value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("carrello__totale__prezzo")[0].innerText = total + ' €';
}