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
    	id: "Head_Navig",
        lateLogCart: false,

    	events: {//Eventi scatenati
            //SIDEMENU
            "click #scltCitta" : "setTown",
            "click #menuIcon" : "showSideMenu",
            "click #close" : "closeSideMenu", //Chiude side premendo la X
            "click #sdwModal" : "closeSideMenu", //Chiude side cliccando fuori
            //FINE SIDEMENU
            //*****Eventi che mi portano nel menu con la struttura HeadMenuView:
            "click #m_archord" : function(){this.enteringMenu("mieiordini");},
            "click #m_opz" : "toOpzioni",
            
            //"click #m_newsletter" : function(){this.enteringMenu("");},
            "click #m_help" : function(){this.enteringMenu("aiuto");},
            "click #m_account" : "checkAccountInSite",

            "click #m_logout" : "doLogout",
            "click #m_login" : "doLogin",
            //<******fine eventi che mi portano in HeadMenuView
            //INIZIO CART 
            //RICORDA TASTO PER ELIMINARE PRODOTTI DAL CARRELLO!!
            //SIA UNO ALLA VOLTA CHE TUTTI INSIEME!
            "click #cartIcon" : "showCart",
            "click #cartClose" : "closeCart",

            //EVENTI DI CART
            "click #m_Sped": "doCheckOut",
            //FINE CART

            "click #searchIcon" : "showSearch",
            //Eventi scatenati dal click della sub-bar
            "click #tOfferte" : "showOfferte",
            "click #tCategorie" : "showListaCategorie",
            "click #tAziende" : "showListaAziende",

            //Eventi di OPZIONI
            "click #op_cancDatiLog" : "cancDatiLog",
            "click #op_back" : "FromOpzioniToMenu",

    	},


    	initialize: function(){
    		console.log("inizializza Head Navig");
    		this.template = Utils.templates.headnavig;
    		
    	},
    	render: function(){
            console.log(this.template({}));
            console.log("ECCOLO");
    		this.el.innerHTML = this.template({});
    		this.contentElement = this.$el.find('#content')[0];
            /*COMINCIA LA PARTE DINAMICA DELL'HTML*/
            //SE non esiste una sessione, allora non si è connessi.
            //quindi non mostrarmi tutto il sidemenu!
            console.log(this.$el.find('#m_logout')[0].innerHTML);
            console.log(this);
            console.log(this.template);
            console.log("FINEFINEFINEFINE");
            if(!localStorage.getItem("sessione")){
                this.$el.find('#m_logout')[0].innerHTML="Login";
                this.$el.find('#m_logout')[0].setAttribute("id","m_login");
                this.$el.find('#side_Dinamico')[0].style.display="none";
            }//se sei connesso, rimane tutto uguale

    		return this;
    	},
        setTown: function(event){
            
            if(this.$el.find('#scltCitta')[0].value != ""){
                var dataloc = this.$el.find('#scltCitta')[0].value;
                localStorage.setItem("localizzazione", dataloc);
            }

        },
        doLogout: function(){
            
            this.$el.find('#m_logout')[0].innerHTML="Login";
            this.$el.find('#m_logout')[0].setAttribute("id","m_login");
            this.$el.find('#side_Dinamico')[0].style.display="none";

            if(localStorage.getItem("sessione")){
                console.log("rimuovi la sessione");
                localStorage.removeItem("sessione");
            }
            
        },
        doLogin: function(){
            /*
            this.$el.find('#m_login')[0].innerHTML="Logout";
            this.$el.find('#m_login')[0].setAttribute("id","m_logout");
            this.$el.find('#side_Dinamico')[0].style.display="";
            */
            console.log("Non posso entrare!");
            this.lateLogCart=false;
            //Setto lateLogCart=true così da sapere che sto andando
            //in login
            Backbone.history.navigate("gotologin", {
                trigger: true
            });
        },
        enteringMenu: function(_string){ 
        // Per entrare nel HeadMenu uso un metodo alternativo che permette
        // di mettere una qualsiasi view all'inizio di ogni apertura della
        // structure "headMenu"
            console.log("enteringMenu... Connesso!");
            this.menuView = _string;
            console.log(this.menuView);
            Backbone.history.navigate("showheadmenu",{
                trigger: true,
            });
            console.log("fine entering Menu");
        },

        doCheckOut: function(e){
            console.log("Posso entrare nel checkout?");

            var utente = localStorage.getItem("sessione");
            if (utente === null) {
                console.log("Non posso entrare!");
                this.lateLogCart=true;
                //Setto lateLogCart=true così da sapere che sto andando
                //in login
                Backbone.history.navigate("gotologin", {
                    trigger: true
                });
            } else {
                console.log("posso entrare!!")
                this.menuView = "insdatispedizione";
                Backbone.history.navigate("showheadmenu", {
                    trigger: true
                });
            }
        },

        showOfferte:function(){
            var self=this;
            self.switchColor("#tOfferte","#tCategorie","#tAziende");

            Backbone.history.navigate("offerte",{
                trigger: true
            });
        },
        showListaCategorie:function(){
            var self=this;
            self.switchColor("#tCategorie","#tOfferte","#tAziende");
            console.log("Vai verso lista categorie");
            Backbone.history.navigate("listacategorie",{
                trigger: true
            });
        },
        showListaAziende:function(){
            var self=this;
            self.switchColor("#tAziende","#tCategorie","#tOfferte");
            console.log("vai verso lista aziende");
            Backbone.history.navigate("listaaziende",{
                trigger:true
            });
        },
        switchColor: function(a,b,c){
            this.$el.find(a)[0].style.backgroundColor="white";
            this.$el.find(a)[0].style.color="black";
            this.$el.find(b)[0].style.backgroundColor="transparent";
            this.$el.find(b)[0].style.color="white";
            this.$el.find(c)[0].style.backgroundColor="transparent";
            this.$el.find(c)[0].style.color="white";
        },
        checkAccountInSite: function(){
            console.log("Rimanda alla pagina dell'account nel sito!")
            //PRIMA FINESTRA PER CHIEDERE SE SI VUOLE ANDARE NEL SITO 
            //TRAMITE BROWSER, POI LO FAI!
        },
        showSideMenu: function(){
            console.log("Apertura SideMenu");
            this.$el.find('#sideModal')[0].style.display="block";
            this.$el.find('#sdwModal')[0].style.display="block";
        },
        toOpzioni: function(){
            this.$el.find('#parteSM')[0].style.display="none";
            this.$el.find('#parteOP')[0].style.display="block";
        },
        FromOpzioniToMenu: function(){
            this.$el.find('#parteSM')[0].style.display="block";
            this.$el.find('#parteOP')[0].style.display="none";
        },
        closeSideMenu: function(){
            this.$el.find('#sideModal')[0].style.display="none";
            this.$el.find('#sdwModal')[0].style.display="none";
        },

        showSearch:function(e){
            console.log("che succede quando clicco la ricerca?");
            /*
            if ($("#inp_s").is(":active")) {
                console.log("attivo!!!!!");
            }
            if ($("#inp_s").is(":focus")) {
                console.log("focus!!!!!");
            }
            */
            //document.getElementById("inp_s").value = "Johnny Bravo";
            var prova = document.getElementById("inp_s").value;

            if(prova != ""){ // IF SBAGLIATO! bisogna vedere tante cose
                //Vai nella pagina di ricerca ma prima memorizza
                //la stringa "prova"!! IMPORTANTE!

                /*COMINCIA LA PROVA DELLA RICERCA*/
 
                var keyword = $("#inp_s").val() ;
                console.log("PAROLA RICERCATA: -->  " + keyword);
                localStorage.setItem("datoricerca",keyword);

                if (Backbone.history.fragment === 'risultatoricerca') {
                    Backbone.history.stop();
                    Backbone.history.start()
                } else {

                }

                /*FINE RICERCA MOD*/
                Backbone.history.navigate("risultatoricerca",{
                    trigger:true
                });

            }
            

        },
        cancDatiLog: function(){
            //rimuove TUTTo il localStorage.. per ora solo sessione
            if(localStorage.getItem("sessione")){
                console.log("rimuovi la sessione");
                localStorage.removeItem("sessione");
            }
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