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

    	id: "dettaglio_Prodotto",
    	className: "",
/*
**  - Si clicca l'azienda e si apre il dettaglio azienda specifico
**  - Si clicca il simbolo del carrello e il prodotto selezionato va nel carrello
*/
    	events: {
    		"click #detAziendaButton" : "toDettAzienda",
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