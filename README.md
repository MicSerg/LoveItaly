# LoveItaly
Applicazione mobile per LoveItaly.

Tabella di marcia: Cosa manca?

1) Finalizzare struttura html delle schermate:

Elenco Schermate con % completate:

90% -> HeadNavig & Offerte;

40% -> SceltaCittà, Login, Dettaglio Prodotto;

20% -> Dettaglio Azienda;

0% -> Riepilogo Ordine, Ins Dati Spedizione, Lista Aziende, Ordine, Miei Ordini, Lista Desideri, Gestione Lista Desideri, Miei Indirizzi, Salva indirizzo, Lista Categorie, Categoria Scelta / Ricerca, Aiuto, Opzioni;


*** Cosa manca effettivamente? *** 

HeadNavig: Manca struttura carrello + bottone per comprare, manca il rendere il tasto di offerte bianco all'inizio visto che ci si trova in offerte, manca la schermata di opzioni che va a rimpiazzare il sideMenu.

Offerte:Definizione della struttura del PRODOTTO, miglioramenti vari css, aggiunta al carrello E alla lista desideri;

40% -> Mancano molte cose a livello strutturale e stilistico (html e css);

20% -> Manca quasi tutto;

0% -> Manca tutto. 



2) Finire la navigazione:

- Bisogna mettere le schermate della navigazione del carrello (Sono sotto HeadMenu!)

- Bisogna inserire il richiamo alla schermata di login nel menu e nel carrello;

- Bisogna fare le schermate di ricerca non appena si può!

3) Creare i modelli e le collection di Backbone;

4) Finalizzare e collegare chiamate API, in particolare bisogna finalizzare:
- Autenticazione (Login e Logout);
- Sessione per mantenere l'autenticazione;
- Chiamata API per caricare lista di prodotti (Di una categoria, Di una determinata azienda, In offerta, nuovi prodotti e quelli fatti tramite una ricerca);
- Chiamata API per caricare lista Aziende (con tutti i dettagli);
- Chiamata API per caricare liste Desideri e una lista desideri specifica;
- Chiamata API per caricare lista Ordini fatti (storico ordini) e un ordine specifico;
- Chiamata API per caricare lista Indirizzi e un indirizzo specifico;
- Chiamata API per aggiungere un oggetto ad una determinata lista desideri di un determinato account;
- Chiamata API per aggiungere un ordine fatto allo storico ordini;
- // Forse altro, per ora non mi viene nulla in mente

5) Finalizzare il css delle pagine non dinamiche;

6) Finalizzare il css delle pagine dinamiche tramite l'uso di handlebars:

Quali sono le schermate che più di tutte hanno bisogno di handlebars e quindi della chiamata al server? 

* Offerte -> Serve per caricare lista di prodotti.

* Ricerca/Categoria Scelta -> Serve per caricare lista di prodotti O aziende.
HeadNavig -> Serve per completare il menu da Loggati e NON.

SceltaCittà -> Serve per pre-caricare le città di loveItaly.

Login -> Va inserita l'autenticazione vera e propria.

* Dettaglio prodotto -> Serve per avere tutte le informazioni su uno specifico prodotto.

Lista Categorie -> Serve per avere la lista delle categorie.

* Dettaglio Azienda -> serve per avere i dettagli dell'azienda specifica E serve per avere la lista dei prodotti di quella specifica azienda.

Lista Aziende -> Serve per avere la lista delle aziende in loveItaly.

Miei Indirizzi -> serve per avere tutti gli indirizzi salvati da un'utente.

Indirizzo -> Serve per permettere ad un utente di salvare altri indirizzi.

** Lista Desideri -> Serve per avere la lista dei prodotti di una lista desideri di un utente specifico.

Gestione Lista Desideri -> Serve per avere la lista delle liste dei desideri di un utente specifico oltre che per crearne altre.

*** Ordine -> Serve per poter avere i dettagli su di un ordine specifico dell'utente.

miei ordini -> Serve per avere la lista degli ultimi ordini fatti dall'utente.

Ins Dati Spedizione -> Serve per mandare un segnale al database che qualcuno ha effettuato un ordine.

NOTA BENE: 
* = Queste pagine permettono all'utente di mettere i prodotti nella lista desideri O/E nel carrello!

**= Queste pagine permettono all'utente di mettere i prodotti nel carrello!

***= Queste pagine permettono all'utente di poter ri-comprare un ordine interamente!


CASO SPECIALE : Carrello -> Questa schermata (che in realtà non è una schermata a sé ma una parte di HeadNavig) ha bisogno della Session per poter salvare in locale (penso) gli oggetti che si sono messi nel carrello.
Da notare che quando si va nella schermata InsIndirizzoSpedizione, si ha bisogno della data del giorno in cui è stato fatto l'ordine come data di partenza per la consegna!!

7) Provare l'applicazione in cordova di nuovo;

8) Togliere tutti i commenti e ripulire il codice.


* NOTA BENE = Bisognerà risistemare tutti gli indirizzi dei template e alcuni codici html (tra qui quello dell'index che richiama proprio cordova).
