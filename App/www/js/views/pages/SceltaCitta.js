define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");

    var sceltaCitta = Utils.Page.extend({

    	constructorName: "sceltaCitta",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.sceltaCitta;
    	},

    	id: "",
    	className: "",

    	events: {
            "click #lLogin" : "toLogin",
    		//Click sul bottone per andare nella login
    		//Click sul bottone in fondo per andare nella pagine delle offerte 
    		//da NON connesso
            "click #lScelta" : "toOfferte"
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        toLogin: function(event){
            Backbone.history.navigate("login",{
                trigger: true
            });
        },
        toOfferte: function(event){
            if(this.$el.find('#sel_Citta')[0].value != ""){
            
                event.preventDefault();

                var dataloc = this.$el.find('#sel_Citta')[0].value;
                localStorage.setItem("localizzazione", dataloc);

                Backbone.history.navigate("showheadnavig",{
                    trigger: true
                });
            }
        }

    });
    return sceltaCitta;
});