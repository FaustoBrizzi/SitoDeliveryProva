    var prodotti = document.getElementsByClassName("prodotto");  
    var prodottoMeno = document.getElementsByClassName("prodotto__box__sub");
    var prodottoPiu = document.getElementsByClassName("prodotto__box__add");
    for (let i = 0; i < prodotti.length; i++) {  // Mi permette di definire tutti i prodotti con variabili diverse 
        var inputMeno = prodottoMeno[i];
        var inputPiu = prodottoPiu[i];
        inputMeno.addEventListener('click',prodottoQuantitaSub);
        inputPiu.addEventListener('click', prodottoQuantitaAdd);
    }
    
    function prodottoQuantitaAdd(event) {
        var buttonClicked = event.target;
        var buttonClickedParent = buttonClicked.parentElement.parentElement;
        var quantitaVecchia = buttonClickedParent.getElementsByClassName("prodotto__box__Qt__numero")[0].innerText;
        buttonClickedParent.getElementsByClassName("prodotto__box__Qt__numero")[0].innerText++;
        var prezzoVecchio = buttonClickedParent.getElementsByClassName("prodotto__box__prezzo__numero")[0].innerText;
        prezzoVecchio = Number(prezzoVecchio);
        var prezzoCad =  prezzoVecchio / quantitaVecchia;
        var prezzoAggiornato = prezzoVecchio + prezzoCad;
        // If Price Contain Some Cents Value
        prezzoAggiornato = Math.round(prezzoAggiornato * 100) / 100;
        buttonClickedParent.getElementsByClassName("prodotto__box__prezzo__numero")[0].innerText = prezzoAggiornato;
    }

    function prodottoQuantitaSub(event) {
        var buttonClicked = event.target;
        var buttonClickedParent = buttonClicked.parentElement.parentElement;
        var quantitaVecchia = buttonClickedParent.getElementsByClassName("prodotto__box__Qt__numero")[0].innerText;
        if (quantitaVecchia >= 2){
            buttonClickedParent.getElementsByClassName("prodotto__box__Qt__numero")[0].innerText--;
        }
        var prezzoVecchio = buttonClickedParent.getElementsByClassName("prodotto__box__prezzo__numero")[0].innerText;
        prezzoVecchio = Number(prezzoVecchio);
        var prezzoCad =  prezzoVecchio / quantitaVecchia;
        if (quantitaVecchia >= 2){
            var prezzoAggiornato = prezzoVecchio - prezzoCad;
            // If Price Contain Some Cents Value
            prezzoAggiornato = Math.round(prezzoAggiornato * 100) / 100;
            buttonClickedParent.getElementsByClassName("prodotto__box__prezzo__numero")[0].innerText = prezzoAggiornato;
        } 
    }
   












