define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");

    var Utils = require("utils");

    var dettaglioProdotto = Utils.Page.extend({

    	constructorName: "dettaglioProdotto",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.dettaglioProdotto;
    	},

    	id: "",
    	className: "",

    	events: {
    		"click #container" : "toDettAzienda", 
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        toDettAzienda: function(){
            Backbone.history.navigate("dettaglioazienda",{
                trigger: true
            });
        }

    });
    return dettaglioProdotto;
});