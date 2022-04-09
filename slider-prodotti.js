/*
L'idea è quella di far apparire prodotti specifici (anvendo già uno scheletro e cambiando dei dati come prezzo qt. e img)
per ogni singola categoria, così che tutto venga molto pulito.
*/
var panficato200g = document.getElementsByClassName("prodotto")[0];
var panficato400g = document.getElementsByClassName("prodotto")[1];
var gnocchettiFichi = document.getElementsByClassName("prodotto")[2];
var gnocchettiLimone = document.getElementsByClassName("prodotto")[3];
var gnocchettiCioccolato = document.getElementsByClassName("prodotto")[4];
var cantucci = document.getElementsByClassName("prodotto")[5];
var cantucciFichi = document.getElementsByClassName("prodotto")[6];
var tozzetti = document.getElementsByClassName("prodotto")[7];
var rusticini = document.getElementsByClassName("prodotto")[8];
var caffe = document.getElementsByClassName("prodotto")[9];
var caffeMacchiato = document.getElementsByClassName("prodotto")[10];
var cappuccino = document.getElementsByClassName("prodotto")[11];
var caffeLatte = document.getElementsByClassName("prodotto")[12];
var ginseng = document.getElementsByClassName("prodotto")[13];
var orzo = document.getElementsByClassName("prodotto")[14];
var the = document.getElementsByClassName("prodotto")[15];
var cioccolataCalda = document.getElementsByClassName("prodotto")[16];



// Inserisco inizialmente solo i prodotti di popolari
var prodotti = document.getElementsByClassName("prodotto");
    for (let i = 0; i < prodotti.length; i++){
        prodotti[i].classList.add("disp-none");
    }
panficato200g.classList.remove("disp-none");
gnocchettiLimone.classList.remove("disp-none");
cantucci.classList.remove("disp-none");
cappuccino.classList.remove("disp-none");


// CategoryButton
var carouselCell = document.getElementsByClassName('carousel-cell__content');
for (let i = 0; i < carouselCell.length; i++) {  // Mi permette di definire tutti i prodotti con variabili diverse 
    var button = carouselCell[i];
    button.addEventListener('click',changeCategory);
    button.addEventListener('click',prodottiAppears);
}

// Change Category
function changeCategory(event){
    buttonClicked = event.target;
    buttonClickedParent = buttonClicked.parentElement;
    buttonClickedParent.classList.add("cell-on");
    for (let i = 0; i < carouselCell.length; i++) {  
        var buttonNonClickedParent = carouselCell[i].parentElement;
        if (buttonClickedParent != buttonNonClickedParent) {
            buttonNonClickedParent.classList.remove("cell-on");
        }
        button.addEventListener('click',changeCategory);
    }
}

// Apparizione prodotti
function prodottiAppears(event){
    var popolari = 'Popolari';
    var prodottiTipici = 'Prodotti tipici';
    var colazione = 'Colazione';
    var pizze = 'Pizze';
    var focacceRipiene = 'Focacce ripiene';
    var bevande = 'Bevande';
    var torte = 'Torte';
    var dolci = 'Dolci';
    var prodottiFestivi = 'Prodotti festivi';

    
    buttonClicked = event.target;
    categoria = buttonClicked.innerText;
    switch (categoria) {
        case popolari:
            var prodotti = document.getElementsByClassName("prodotto");
            for (let i = 0; i < prodotti.length; i++){
                prodotti[i].classList.add("disp-none");
            }
            panficato200g.classList.remove("disp-none");
            gnocchettiLimone.classList.remove("disp-none");
            cantucci.classList.remove("disp-none");
            cappuccino.classList.remove("disp-none");
            
            break;
        
        case prodottiTipici:
            var prodotti = document.getElementsByClassName("prodotto");
            for (let i = 0; i < prodotti.length; i++){
                prodotti[i].classList.add("disp-none");
            }
            panficato200g.classList.remove("disp-none");
            panficato400g.classList.remove("disp-none");
            gnocchettiFichi.classList.remove("disp-none");
            gnocchettiLimone.classList.remove("disp-none");
            gnocchettiCioccolato.classList.remove("disp-none");
            cantucci.classList.remove("disp-none");
            cantucciFichi.classList.remove("disp-none");
            tozzetti.classList.remove("disp-none");
            rusticini.classList.remove("disp-none");

            break;
        
        case colazione:
            var prodotti = document.getElementsByClassName("prodotto");
            for (let i = 0; i < prodotti.length; i++){
                prodotti[i].classList.add("disp-none");
            }
            caffe.classList.remove("disp-none");
            caffeMacchiato.classList.remove("disp-none");
            cappuccino.classList.remove("disp-none");
            caffeLatte.classList.remove("disp-none");
            ginseng.classList.remove("disp-none");
            orzo.classList.remove("disp-none");
            the.classList.remove("disp-none");
            cioccolataCalda.classList.remove("disp-none");
            break;

        case pizze:
            console.log(categoria);
            break;
        
        case focacceRipiene:
            console.log(categoria);
            break;

        case bevande:
            console.log(categoria);
            break;

        case torte:
            console.log(categoria);
            break;

        case dolci:
            console.log(categoria);
            break;

        case prodottiFestivi:
            console.log(categoria);
            break;
    }
}



