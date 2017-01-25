define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");

    var Utils = require("utils");

    var dettaglioAzienda = Utils.Page.extend({

    	constructorName: "dettaglioAzienda",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.dettaglioAzienda;
    	},

    	id: "",
    	className: "",

    	events: {
    		"click #container" : "toDettProdotto", 
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