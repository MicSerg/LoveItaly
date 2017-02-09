# LoveItaly
Applicazione mobile per LoveItaly.


Percentuale realizzata dell'applicazione: 80% circa;


Tabella di marcia: Cosa manca?


1) Finalizzare struttura html delle schermate:

Completate tutte le strutture delle schermate. (html)
Completato in gran parte il css, mancano solo dei dettagli.

Bisogna finire di piazzare Handlebars E Debuggare.

*** Cosa manca effettivamente? *** 




2) Finire la navigazione:

Mancano solo le transizioni che vanno nella pagina di LOGIN. 

3) Creare i modelli e le collection di Backbone;

(?)

4) Finalizzare e collegare chiamate API, in particolare bisogna finalizzare:
- Autenticazione (Login e Logout);
- Sessione per mantenere l'autenticazione;
- Chiamata API per caricare lista di prodotti (Di una categoria, Di una determinata azienda, In offerta, nuovi prodotti e quelli fatti tramite una ricerca);

- Chiamata API per caricare lista Ordini fatti (storico ordini) e un ordine specifico;
- Chiamata API per avere l'indirizzo di spedizione principale dell'account dell'utente. (Serve per la schermata "insDatiSpedizione")
- Chiamata API per aggiungere un ordine fatto allo storico ordini; (?)


5) Finalizzare il css delle pagine non dinamiche;

Fatto, mancano solo pochissimi accorgimenti


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

*** Ordine -> Serve per poter avere i dettagli su di un ordine specifico dell'utente.

miei ordini -> Serve per avere la lista degli ultimi ordini fatti dall'utente.

Ins Dati Spedizione -> Serve per mandare un segnale al database che qualcuno ha effettuato un ordine.

NOTA BENE: 
* = Queste pagine permettono all'utente di mettere i prodotti nella lista desideri O/E nel carrello!

**= Queste pagine permettono all'utente di mettere i prodotti nel carrello!

***= Queste pagine permettono all'utente di poter ri-comprare un ordine interamente!


CASO SPECIALE : Carrello -> Questa schermata (che in realtà non è una schermata a sé ma una parte di HeadNavig) ha bisogno della Session per poter salvare in locale (penso) gli oggetti che si sono messi nel carrello.
Da notare che quando si va nella schermata InsIndirizzoSpedizione, si ha bisogno della data del giorno in cui è stato fatto l'ordine come data di partenza per la consegna!!

7) Provare l'applicazione in cordova e aggiustare la visualizzazione!

8) Togliere tutti i commenti e ripulire il codice.


* NOTA BENE = Bisognerà risistemare tutti gli indirizzi dei template e alcuni codici html (tra qui quello dell'index che richiama proprio cordova).
