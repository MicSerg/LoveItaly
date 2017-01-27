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
            "click #container" : "toLogin"
    		//Click sul bottone per andare nella login
    		//Click sul bottone in fondo per andare nella pagine delle offerte 
    		//da NON connesso
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        toLogin: function(event){
            Backbone.history.navigate("login",{
                trigger: true
            });
        }

    });
    return sceltaCitta;
});