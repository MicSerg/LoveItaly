define(function(require) {
	
/*	Tutte variabili per identificare view, librerie, modelli, pagine	*/
/*	Da notare : Mettile in ordine! */
/*
	ERRORE ATTUALE
	this.structureView.contentElement è indefinito, e dà errore alla riga
	122 del file utils.js. Consulta questo file perché il prof ha commentato
	tutto e quindi si potrebbe capire a cosa si riferisca questa variabile.
	Molto probabile che si tratti di qualcosa legato all'html, "content" 
	suggerisce che sia qualcosa relativo alla visualizzazione, che abbia la
	vera struttura della pagina 
	----
	APPUNTO : I MODELLI (gli script all'interno della cartella "model") servono
	soltanto per le chiamate API, quindi sicuro saranno qualcosa che si andrà
	a modificare dopo, e non riguarda gli errori di ora

*/
	
	var $ = require("jquery");
    var slick = require("slider");
    var Backbone = require("backbone");
    //Lista delle Viste (quelle che contengono altre pagine)
    var HeadInitView = require("views/HeadInitView");
    var HeadNavigView = require("views/HeadNavigView");
    var HeadMenuView = require("views/HeadMenuView");

   	//Lista pagine di HeadInitView
	var Preload = require("views/pages/Preload");
	var SceltaCitta = require("views/pages/SceltaCitta");
	var Login = require("views/pages/Login");

	//Lista pagine di HeadNavigView
	var Offerte = require("views/pages/Offerte");
	var DettaglioProdotto = require("views/pages/DettaglioProdotto");
	var DettaglioAzienda = require("views/pages/DettaglioAzienda");

	//Lista pagine di HeadMenuView
	var MieiIndirizzi = require("views/pages/MieiIndirizzi");

	var GestListeDesideri = require("views/pages/GestListeDesideri");

	var MieiOrdini = require("views/pages/MieiOrdini");

	console.log('inizio router.js');

	var AppRouter = Backbone.Router.extend({
		/*Devo riempire questo oggetto router per poter fare il tutto*/
		constructorName: "AppRouter",

		routes: {

			"":"showHeadInit", // "vuoto" perché è il primo che mi fa girare 
			"preload":"showPreload",
			"sceltaCitta":"showSceltaCitta",
			"login":"showLogin",
			"offerte":"showOfferte",
			"showheadnavig":"showHeadNavig",
			"dettaglioprodotto":"showDettaglioProdotto",
			"dettaglioazienda":"showDettaglioAzienda",
			"showheadmenu": "showHeadMenu",
			"mieiindirizzi": "showIndList",
			"gestlistedesideri" : "showGestListDes",
			"mieiordini" : "showMieiOrdini"
		},

		/*i primi attributi servono per determinare delle view specifiche che
		**vengono richiamate in determinati momenti.
		firstView: Viene usata per la primissima schermata, "scelta città"
		secondView: Viene usata per entrare dalla scelta città/login alla schermata
		di offerte
		loginView: Viene chiamata quando si entra nella schermata di login dal menu
		oppure dal carrello (quando bisogna comprare qualcosa)*/
		
		firstView: "sceltaCitta", // deve essere cambiato con la prima schermata sceltaCitta
		secondView: "offerte",
		loginView: "login",
		menuView: "nulla", // Questo viene cambiato dinamicamente

		initialize: function(options) {
			console.log("initialize - router.js");
			console.log(this.menuView + " <--- menuView");
			this.currentView = undefined; // 
		},

		showPreload: function(){
			console.log("router.js -> preload!!");
			
			//Forse va messa qui la route che mi vede se ci sono le credenziali
			//salvate (?) - così da dirottare direttamente verso le offerte
			var page= new Preload({});
			this.changePage(page);

		},
		
		showSceltaCitta: function(){
			console.log("router.js -> showSceltaCittà!!");

			var page= new SceltaCitta({});
			this.changePage(page);

		},

		showLogin: function(){
			console.log("router.js -> showLogin!!");

			var page= new Login({});
			this.changePage(page);
		},

		showOfferte: function(){
			// QUESTA sta con la structureView!
			console.log("router.js -> offerte!!");
			

			var page= new Offerte({});
			this.changePage(page);
			$(".single-item").slick({
                    dots: true
            });
		},

		showDettaglioProdotto: function(){
			console.log("router.js -> dettaglioProdotto");

			var page=new DettaglioProdotto({});
			this.changePage(page);
		},

		showDettaglioAzienda: function(){
			console.log("router.js -> dettaglioAzienda");

			var page=new DettaglioAzienda({});
			this.changePage(page);
		},

		//*********************************************
		//Inizio Funzioni per schermate interne al menu
		showIndList: function(){
			console.log("ruoter.js -> MIEI INDIRIZZI");

			var page= new MieiIndirizzi({});
			this.changePage(page);
		},
		showGestListDes: function(){
			console.log("router -> gest Lista Desideri");
			var page= new GestListeDesideri({});
			this.changePage(page);
		},
		showMieiOrdini: function(){
			console.log("router -> miei ordini!");
			var page= new MieiOrdini({});
			this.changePage(page);
		},




		/*Cosa viene fatto in questa funzione?
		Viene rimosso tutto il div log_bg e quindi pure tutto quello che contiene,
		in pratica togliamo tutto headInit (guarda headInit.html in templates)
		e quindi togliamo anche la pagina che stava dentro headInit (in questo caso
		dovrebbe essere login.html) così da pulire la schermata. 
		poi scriviamo che se c'è una structureView (penso sia tipo una variabile
		che contiene la struttura html della nostra view PRINCIPALE, cioè headInit
		ma non lo so precisamente, se vuoi saperlo basta fare un console.log di 
		(this.structureView) ) allora ci cambi questa structureView in HeadNavigView
		e la metti nel body.
		this.navigate(this.secondView ecc ecc serve per mettere direttamente una pagina
		all'interno di questa "structureView", in questo caso noi vogliamo mettere la
		pagina delle offerte*/
		showHeadNavig: function(){ 
			console.log("router.js -> showHeadNavig!!");
			$('#log_bg').remove(); // Rimuovo log_bg della pagina precedente
			
			if(this.structureView){ // La structure view è true, esiste sicuramente
				this.structureView = new HeadNavigView();
				console.log("Router.js -> showHeadNavig");
				document.body.appendChild(this.structureView.render().el);
				this.structureView.trigger("inTheDOM");
			}
			this.navigate(this.secondView, {
				trigger:true
			});
		},

		/*NUOVO PEZZO DI CODICE:*/

		/* showHeadMenu*/
		showHeadMenu: function(){//Argomento da aggiungere: View da aprire
			console.log("router.js -> showHeadMenu!!");
			$('header').remove(); // Rimuove HeadNavig
			$('#content').remove(); // Rinuove l'altro id presente, content
			//Cambia dinamicamente la pagina.
			this.menuView = this.structureView.menuView; /*IMPORTANTISSIMA*/
			if(this.structureView){
				this.structureView = new HeadMenuView();
				document.body.appendChild(this.structureView.render().el);
				this.structureView.trigger("inTheDOM");
			}
			//Alla fine qui rimane "nulla", come se non cambiasse niente
			this.navigate(this.menuView, {
				trigger:true
			});
		},
		/*FINE NUOVO PEZZO*/

		showHeadInit: function(){
			console.log("router.js -> showHeadInit!!");
			if(!this.structureView){
				this.structureView = new HeadInitView();
				console.log("showHeadInit - router.js");
				document.body.appendChild(this.structureView.render().el);
				this.structureView.trigger("inTheDOM");
				//Che cazzo fa ?
			}
			this.navigate(this.firstView, {
				trigger:true
			});
		},

	});
	console.log("fine router js, ritorno AppRouter");
	return AppRouter;
});