
  console.log('Ciao Prodotto, buon lavoro!');

   /* -------- Faccio il fetch -----------*/
   fetch('json.json').then(function (response) {
    return response.json();
  }).then(function (obj) {
    console.log(obj);
    console.log(obj.Prodotti[0]);
  }).catch(function (error) {
    console.error('qualcosa storto!');
    console.error(error);
  });
  /* ------------------------------------*/

  
  // Utilizzo gli id dati alle parti del prodoto_contatore così da renderle dinamiche
  const prodotto_meno = document.getElementById('prodotto_meno');  // I getElementById() funzionano
  const prodotto_numero = document.getElementById('prodotto_numero');
  const prodotto_piu = document.getElementById('prodotto_piu');

  let prodotto_numero_value = prodotto_numero.textContent;  // Definisco il numero di prodotti



  prodotto_meno.addEventListener('click', remProduct);  // se clico sul meno diminuisci il numero di prodotti

  function remProduct(){
    if (prodotto_numero_value >= 2) { // Se il numero è 1 non è necessario ridurlo
      prodotto_numero_value--;
    }
    prodotto_numero.textContent = prodotto_numero_value; // Adesso devo sostiture 1 con prodotto_numero_value
  }


  prodotto_piu.addEventListener('click', addProduct);  // se clico sul piu aumento di uno il numero di prodotti

  function addProduct(){
      prodotto_numero_value++;
      prodotto_numero.textContent = prodotto_numero_value; // Adesso devo sostiture 1 con prodotto_numero_value
    }


    /*
      L'idea è quella di creare un array di oggetti dove gli oggetti sono i prodotti, che come informazio hanno il loro numro, il loro prezzo, ecc
      Dopo di che posso usare l'array per creare una lista in html con i prodotti
      I prodotti a questo punto possono ancora essere aggiunti in numero o ridotti usano un + e -
      E ovviamente possono ancora essere rimossi da esso
    */

    let quantita = 1; // Prendo il numero di prodotti da aggiungere al carrello dal json e lo agggiorno 
    let prezzo = 6;  // Aggiorno anche il prezzo 




    const prodotto_button = document.getElementById('prodotto_button');
    prodotto_button.addEventListener('click', addChart);  // se clico sul meno diminuisci il numero di prodotti

    function addChart(){
      console.log(prodotto_numero.textContent);
      quantita = prodotto_numero.textContent;
      prezzo = 6 * quantita;
      /* -------- Faccio il fetch -----------*/
      fetch('json.json').then(function (response) {
        return response.json();
      }).then(function (obj) {
        obj.Prodotti[0].prezzo = prezzo + '€';
        obj.Prodotti[0].quantita = quantita;
        console.log(obj.Prodotti[0]);
      }).catch(function (error) {
        console.error('qualcosa storto!');
        console.error(error);
      });
      /* ------------------------------------*/
    }

