define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");
	var User = require("models/User");


    var login = Utils.Page.extend({

    	constructorName: "login",

    	model: User,

    	initialize: function(){
    		this.template = Utils.templates.login;
    	},

    	id: "",
    	className: "",

        /* in events in pratica scriviamo: "tipodievento   tagHTMLinteressatoAquelevento :
        qualeFunzionedevievocare -> (La funzione che viene evocata per ora è headNavig che
        è dichiarata dopo la funzione "render". */
    	events: {
    		"click #buttonLogin" : "headNavig"
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        /* 
        studente@mobile.it
        studente
        */
        headNavig: function(event){
            /*COMINCIANO MODIFICHE*/
            el: $("lForm");
            var self=this;
            var nickname=$(this.el).find("#fusername").val();
            var passw = $(this.el).find("#fpassword").val();

            var utente= new User({
                email: nickname,
                psw: passw
            });

            utente.fetch({
                success: function(){
                    localStorage.setItem("sessione", nickname);
                    localStorage.setItem("idsess", (utente.attributes.customers)[0].id);
                    localStorage.setItem("keyorder", (utente.attributes.customers)[0].secure_key);
                    Backbone.history.navigate("showheadnavig",{
                        trigger: true
                    });
                },
                error: function(){
                    //condizione di errore
                }
            });

            /*FINISCONO MODIFICHE*/
            /*
            Backbone.history.navigate("showheadnavig",{
                trigger: true
            });*/
        }

    });
    return login;
});
