define(function(require) {
	

	
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
	var ListaAziende = require("views/pages/ListaAziende");
	var ListaCategorie = require("views/pages/ListaCategorie");
	var RisultatoRicerca = require("views/pages/RisultatoRicerca");
	var RisultatoCategoria = require("views/pages/RisultatoCategoria");
	
	//modelli
	var ListAz = require("models/ListAz");
	var ListCategorie = require("models/ListCategorie");
	var Orders = require("models/Orders");
	var Azienda = require("models/Azienda");
	var Customer = require("models/Customer");
	var ListaOfferte = require("models/ListaOfferte");
	var ListaProdottiDaCategoria = require("models/ListaProdottiDaCategoria");
	var ListaProdottiDaAzienda = require("models/ListaProdottiDaAzienda");
	var Prodotti = require("models/Prodotti");
	var ProdottiHome = require("models/ProdottiHome");
	var saleProduct = require("models/saleProduct");
	var sweetProduct = require("models/sweetProduct");
	var SearchList = require("models/SearchList");
	var User = require("models/User");

	
	//Lista pagine di HeadMenuView
	var MieiOrdini = require("views/pages/MieiOrdini");
	var Ordine = require("views/pages/Ordine");
	var Aiuto = require("views/pages/Aiuto");

	//Eccessione HeadMenuView -> Raggiungibile da Carrello
	var InsDatiSpedizione = require("views/pages/InsDatiSpedizione");
	var RiepilogoOrdine = require("views/pages/RiepilogoOrdine");
	
	//collezioni
	var Categorie = require("collections/Categorie");
    var Carrello = require("collections/Carrello");
    var Ordini = require("collections/Ordini");
	var AziendeColl = require("collections/AziendeColl");

	console.log('inizio router.js');

	var AppRouter = Backbone.Router.extend({

		constructorName: "AppRouter",

		routes: {

			"":"showHeadInit", 
			"preload":"showPreload",
			"sceltaCitta":"showSceltaCitta",
			"login":"showLogin",

			"showheadnavig":"showHeadNavig",
			"offerte":"showOfferte",
			"dettaglioprodotto":"showDettaglioProdotto",
			"dettaglioazienda":"showDettaglioAzienda",
			"listaaziende":"showListaAziende",
			"listacategorie":"showListaCategorie",
			"risultatocategoria":"showRisultatoCategoria",
			"risultatoricerca":"showRisultatoRicerca",


			"showheadmenu": "showHeadMenu",
			"mieiordini" : "showMieiOrdini",
			"ordine": "showOrdine",
			"opzioni": "showOpzioni",
			"aiuto": "showAiuto",

			"insdatispedizione": "showSpedizione",
			"riepilogoordine": "showRiepilogo",


			//Route speciale per login.
			"gotologin":"forceLogin"
		},

		
		
		firstView: "sceltaCitta", 
		secondView: "offerte",
		loginView: "login",
		menuView: "nulla", 
		lateLogCart: false,

		initialize: function(options) {

			var Carrello = new Array();
			if(!localStorage.getItem("Carrello") === null){
				localStorage.setItem("Carrello", JSON.stringify(Carrello));
			}
			var listcat = new ListCategorie();

            		listcat.fetch({
               			success: function(listcat, response, options) {
                    		localStorage.setItem("cat", JSON.stringify(listcat));
                		},
                		error: function(listcat, response, options) {

                		}
            		});


           	var lista_azienda = new ListAz();

            		lista_azienda.fetch({
                		success: function(lista_azienda, response, options) {

                    			(lista_azienda);
                    			localStorage.setItem("lista_azienda", JSON.stringify(lista_azienda));

                			},
                		error: function(lista_azienda, response, options) {
                		}
            		});



			this.currentView = undefined; 

			
		},

		showPreload: function(){


			var page= new Preload({});
			this.changePage(page);

		},
		
		showSceltaCitta: function(){


			var page= new SceltaCitta({});
			this.changePage(page);

		},

		showLogin: function(){


			var page= new Login({});
			this.changePage(page);
		},

		showOfferte: function(){
			if(this.secondView != "offerte") {
				this.secondView = "offerte";
			}

			var page= new Offerte({});
			this.changePage(page);
			$('.autoplay').slick({

	  			dots: false,
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            centerMode: true,
	            variableWidth: true
		    });
		},

		showDettaglioProdotto: function(){

			if(this.secondView != "dettaglioprodotto") {
				this.secondView = "dettaglioprodotto";
			}
			var page=new DettaglioProdotto({});
			this.changePage(page);
		},

		showDettaglioAzienda: function(){
			if(this.secondView != "dettaglioazienda") {
				this.secondView = "dettaglioazienda";
			}

			var page=new DettaglioAzienda({});
			this.changePage(page);
		},

		showListaAziende: function(){
			if(this.secondView != "listaaziende"){
				this.secondView = "listaaziende";
			}

			var page=new ListaAziende({});
			this.changePage(page);
		},

		showListaCategorie: function(){
			if(this.secondView != "listacategorie"){
				this.secondView = "listacategorie";
			}

			var page=new ListaCategorie({});
			this.changePage(page);
		},
		showRisultatoRicerca: function(){
			if(this.secondView != "risultatoricerca"){
				this.secondView = "risultatoricerca";
			}
			var page=new RisultatoRicerca({});
			this.changePage(page);
		},

		showRisultatoCategoria: function(){
			if(this.secondView != "risultatocategoria"){
				this.secondView = "risultatocategoria";
			}
			var page=new RisultatoCategoria({});
			this.changePage(page);
		},




		//*********************************************
		//Inizio Funzioni per schermate interne al menu

		showMieiOrdini: function(){
			var page= new MieiOrdini({});
			this.changePage(page);
		},
		showOrdine: function(){
			
			var page=new Ordine({});
			this.changePage(page);
		},
		showOpzioni: function(){
			var page=new Opzioni({});
			this.changePage(page);
		},
		showAiuto: function(){
			var page=new Aiuto({});
			this.changePage(page);
			$('.collapsible').collapsible({
                accordion: false
            });
		},

		showSpedizione: function(){
			var page=new InsDatiSpedizione({});
			this.changePage(page);
		},

		showRiepilogo: function(){
			var page=new RiepilogoOrdine({});
			this.changePage(page);
		},

		showHeadNavig: function(){ 
			if($('#Head_Menu').length) $('#Head_Menu').remove(); // Rimuove HeadNavig
			if($('#Head_Init').length) $('#Head_Init').remove();
			if(this.structureView){ 
				if(this.structureView.secondView){ 
					this.secondView = this.structureView.secondView;
				}
				this.structureView = new HeadNavigView();
				document.body.appendChild(this.structureView.render().el);
				this.structureView.trigger("inTheDOM");
			}
			this.navigate(this.secondView, {
				trigger:true
			});
		},

		/* showHeadMenu*/
		showHeadMenu: function(){//Argomento da aggiungere: View da aprire
			if($('#Head_Navig').length) $('#Head_Navig').remove(); // Rimuove HeadNavig
			if($('#Head_Init').length) $('#Head_Init').remove();
			if(this.currentView.menuView=="insdatispedizione"){
				this.menuView = this.currentView.menuView; /*IMPORTANTISSIMA*/
			}else{
				this.menuView = this.structureView.menuView;
			}

				this.structureView = new HeadMenuView();
				document.body.appendChild(this.structureView.render().el);
				this.structureView.trigger("inTheDOM");
			
			this.navigate(this.menuView, {
				trigger:true
			});
		},

		showHeadInit: function(){
			if($('#Head_Navig').length) $('#Head_Navig').remove(); // Rimuove HeadNavig
			if($('#Head_Menu').length) $('#Head_Menu').remove();
			if(!this.structureView){
				this.structureView = new HeadInitView();
				document.body.appendChild(this.structureView.render().el);
				this.structureView.trigger("inTheDOM");

			}
			this.navigate(this.firstView, {
				trigger:true
			});
		},
		forceLogin: function(){
			if($('#Head_Navig').length) $('#Head_Navig').remove(); // Rimuove HeadNavig
			
				this.lateLogCart = this.structureView.lateLogCart;
				this.structureView = new HeadInitView();
				document.body.appendChild(this.structureView.render().el);
				this.structureView.trigger("inTheDOM");
			

			this.navigate(this.loginView,{
				trigger:true
			});
			this.currentView.switchDes = this.lateLogCart
		},

	});
	return AppRouter;
});
