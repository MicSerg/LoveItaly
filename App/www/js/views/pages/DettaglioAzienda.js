define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Azienda = require("models/Azienda");
	
    var Utils = require("utils");

    var dettaglioAzienda = Utils.Page.extend({

    	constructorName: "dettaglioAzienda",

    	model: Azienda,

    	initialize: function(){
    		this.template = Utils.templates.dettaglioAzienda;
    	},

    	id: "",
    	className: "",

    	events: {
    		"click .productBox" : "toDettProdotto", 
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        toDettProdotto: function(event){
            Backbone.history.navigate("dettaglioprodotto",{
                trigger: true
            });
        }

    });
    return dettaglioAzienda;
});
