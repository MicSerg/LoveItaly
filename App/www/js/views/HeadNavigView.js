

define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");


    var HeadNavigView = Backbone.View.extend({
    	constructorName: "HeadNavigView",
    	id: "Head_Navig",
        lateLogCart: false,

    	events: {
            //SIDEMENU
            "click #scltCitta" : "setTown",
            "click #menuIcon" : "showSideMenu",
            "click #close" : "closeSideMenu", 
            "click #sdwModal" : "closeSideMenu", 
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

    		this.template = Utils.templates.headnavig;
    		
    	},
    	render: function(){

    		this.el.innerHTML = this.template( JSON.parse(localStorage.getItem("Carrello")) );
    		this.contentElement = this.$el.find('#content')[0];

            if(!localStorage.getItem("sessione")){
                this.$el.find('#m_logout')[0].innerHTML="Login";
                this.$el.find('#m_logout')[0].setAttribute("id","m_login");
                this.$el.find('#side_Dinamico')[0].style.display="none";
            }

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
                localStorage.removeItem("sessione");
            }
            if(localStorage.getItem("idsess")){
                localStorage.removeItem("idsess");
            }
            if(localStorage.getItem("keyorder")){
                localStorage.removeItem("keyorder");

            }
            
        },
        doLogin: function(){

            console.log("Non posso entrare!");
            this.lateLogCart=false;

            Backbone.history.navigate("gotologin", {
                trigger: true
            });
        },
        enteringMenu: function(_string){ 

            this.menuView = _string;
            Backbone.history.navigate("showheadmenu",{
                trigger: true,
            });
        },

        doCheckOut: function(e){

            var utente = localStorage.getItem("sessione");
            if (utente === null) {
                this.lateLogCart=true;

                Backbone.history.navigate("gotologin", {
                    trigger: true
                });
            } else {
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
            Backbone.history.navigate("listacategorie",{
                trigger: true
            });
        },
        showListaAziende:function(){
            var self=this;
            self.switchColor("#tAziende","#tCategorie","#tOfferte");
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

        },
        showSideMenu: function(){
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

            var prova = document.getElementById("inp_s").value;

            if(prova != ""){
 
                var keyword = $("#inp_s").val() ;
                localStorage.setItem("datoricerca",keyword);

                if (Backbone.history.fragment === 'risultatoricerca') {
                    Backbone.history.stop();
                    Backbone.history.start()
                }

                Backbone.history.navigate("risultatoricerca",{
                    trigger:true
                });

            }
        },
        cancDatiLog: function(){

            if(localStorage.getItem("sessione")){
                localStorage.removeItem("sessione");
            }
            if(localStorage.getItem("idsess")){
                localStorage.removeItem("idsess");
            }
            if(localStorage.getItem("keyorder")){
                localStorage.removeItem("keyorder");

            }
        },
        showCart:function() {
            this.$el.find('#cartModal')[0].style.display="block";
            if(localStorage.getItem("Carrello")){

            }
        },
        closeCart: function(){
            this.$el.find('#cartModal')[0].style.display="none";
        },
        deleteCart: function(e){
            if(localStorage.getItem("Carrello")){
                localStorage.removeItem("Carrello");
            }
              
        },
    });
    return HeadNavigView;

});