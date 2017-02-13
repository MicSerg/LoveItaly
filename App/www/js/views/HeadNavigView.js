

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
            "click #m_Del": "deleteCart",
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

    		this.el.innerHTML = this.template( JSON.parse(localStorage.getItem("Carrello")) );
    		this.contentElement = this.$el.find('#content')[0];

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
            if(localStorage.getItem("idsess")){
                console.log("rimuovi idsess");
                localStorage.removeItem("idsess");
            }
            if(localStorage.getItem("keyorder")){
                console.log("rimuovi keyorder");
                localStorage.removeItem("keyorder");

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
            if(!localStorage.getItem("sessione")){
                this.$el.find('#m_logout')[0].innerHTML="Login";
                this.$el.find('#m_logout')[0].setAttribute("id","m_login");
                this.$el.find('#side_Dinamico')[0].style.display="none";
            }
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

            if(localStorage.getItem("sessione")){
                console.log("rimuovi la sessione");
                localStorage.removeItem("sessione");
            }
            if(localStorage.getItem("idsess")){
                console.log("rimuovi idsess");
                localStorage.removeItem("idsess");
            }
            if(localStorage.getItem("keyorder")){
                console.log("rimuovi keyorder");
                localStorage.removeItem("keyorder");

            }
        },
        showCart:function() {
            console.log("Apertura Carrello");
            this.$el.find('#cartModal')[0].style.display="block";
            if(localStorage.getItem("Carrello")){

            }
        },
        closeCart: function(){
            console.log("Chiusura Carrello");
            this.$el.find('#cartModal')[0].style.display="none";
        },
        deleteCart: function(e){
            console.log("cancella cart");
            if(localStorage.getItem("Carrello")){
                localStorage.removeItem("Carrello");
            }
              
        },
        


    });
    return HeadNavigView;

});