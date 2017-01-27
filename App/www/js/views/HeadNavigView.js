/*Script della NAVBAR che si trova nella navigazione del content.
Avrà i tastini: Menu, ricerca & carrello. 
Avrà le scorciatoie: Offerte, Categorie, Aziende.

***Ecco quali eventi verranno strutturati dalle SOTTO PAGINE (NON dalla BARRA):
Eventi di "navigazione" (click)
Offerte: si può andare in dettaglio prodotto
dettaglio prodotto: si può andare in dettaglio azienda
dettaglio azienda: si può andare in dettaglio prodotto
***Eventi strutturati dalla BARRA:
tasto menu: apre il menu <-(modal? come lo apro?)
tasto ricerca: si apre lo spazio di ricerca, dopo aver scritto la stringa e premuto
il tasto "ok" (quale dei tasti?) viene fatta una query per cercare i prodotti con
quel nome.
tasto carrello: Si apre il carrello <-(Modal? stessa cosa del menu?)
***Eventi strutturati dalla SUB BARRA:
tasto OFFERTE: si ritorna nella schermata "offerte"
tasto Aziende: Si va nella schermata "lista Aziende"
tasto categorie: si va nella schermata "lista categorie"
------ 
Da lista aziende si può andare a dettaglio azienda.
Da lista categorie si fa una query cercando tutti i prodotti di una determinata 
categoria e vengono visualilzzati (si usa la schermata "Risultato")

------

-> Mancano le schermate del Menu e del cart.

*/

define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");

    console.log("Entro in HeadNavigView.js");

    var HeadNavigView = Backbone.View.extend({
    	constructorName: "HeadNavigView",
    	id: "HNview",

    	events: {//Eventi scatenati
            //SIDEMENU
            "click #menuIcon" : "showSideMenu",
            "click #close" : "closeSideMenu", //Chiude side premendo la X
            "click #sdwModal" : "closeSideMenu", //Chiude side cliccando fuori
            //FINE SIDEMENU INIZIO CART 
            "click #cartIcon" : "showCart",
            "click #cartClose" : "closeCart",
            //*****Eventi che mi portano nel menu con la struttura HeadMenuView:
            "click #m_wlist" : function(){this.enteringMenu("gestlistedesideri");},
            "click #m_archord" : function(){this.enteringMenu("mieiordini");},
            "click #m_ladr" : function(){this.enteringMenu("mieiindirizzi");},
            "click #m_opz" : function(){this.enteringMenu("opzioni");},
            //"click #m_newsletter" : function(){this.enteringMenu("");},
            "click #m_aiuto" : function(){this.enteringMenu("aiuto");},

            //<******fine eventi che mi portano in HeadMenuView


            "click #searchIcon" : "showSearch",
            //Eventi scatenati dal click della sub-bar
            "click #tastoOfferte" : "showOfferte",
            "click #tastoCategorie" : "showListaCategorie",
            "click #tastoAziende" : "showListaAziende"

    	},

    	initialize: function(){
    		console.log("inizializza Head Navig");
    		this.template = Utils.templates.headnavig;
    		console.log(this.template);
    	},
    	render: function(){
    		this.el.innerHTML = this.template({});
    		this.contentElement = this.$el.find('#content')[0];
    		return this;
    	},

        enteringMenu: function(_string){ //PENSA BENE
            console.log("enteringMenu... Connesso!");
            this.menuView = _string;
            Backbone.history.navigate("showheadmenu",{
                trigger: true,
            });
            console.log("fine entering Menu");
        },

        showOfferte:function(){
            Backbone.history.navigate("offerte",{
                trigger: true
            });
        },
        showListaCategorie:function(){
            console.log("Vai verso lista categorie");
        },
        showListaAziende:function(){
            console.log("vai verso lista aziende");
        },
        showSideMenu: function(){
            console.log("Apertura SideMenu");
            this.$el.find('#sideModal')[0].style.display="block";
            this.$el.find('#sdwModal')[0].style.display="block";
        },
        closeSideMenu: function(){
            this.$el.find('#sideModal')[0].style.display="none";
            this.$el.find('#sdwModal')[0].style.display="none";
        },
        showSearch:function(){
            console.log("che succede quando clicco la ricerca?");
        },
        showCart:function() {
            console.log("Apertura Carrello");
            this.$el.find('#cartModal')[0].style.display="block";
        },
        closeCart:function(){
            console.log("Chiusura Carrello");
            this.$el.find('#cartModal')[0].style.display="none";
        },


    });
    return HeadNavigView;

});