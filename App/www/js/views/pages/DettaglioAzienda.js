define(function(require){
	var $ = require("jquery");
    var Utils = require("utils");
	var Backbone = require("backbone");
	var ListaProdottiDaAzienda = require("models/ListaProdottiDaAzienda");
    var Azienda = require ("models/Azienda");
	var Prodotti = require("models/Prodotti");
    
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
    		//this.el.innerHTML = this.template({});
    		//return this;
            var temp = localStorage.getItem("datoazienda");
            var model = new Azienda({
                id: temp
            });

            var that = this;
            model.fetch({
                success: function() {

                    var temptext = model.get('short_description');

                    /*****************************************************
                     * Questa funzione serve ad eliminare i tag e ottenere
                     * semplice testo puro. Ci serviamo quindi di una
                     * funzione jQuery
                     *****************************************************/
                    model.set("short_description", $(temptext).text());
                    $(that.el).html(that.template(model.toJSON()));
                    return that;

                }
            });

    	},

        toDettProdotto: function(event){
            event.preventDefault();
            var datoprod = $(event.currentTarget).attr("data-prod");
            localStorage.setItem("datoprod", datoprod);
            Backbone.history.navigate("dettaglioprodotto",{
                trigger: true
            });
        }

    });
    return dettaglioAzienda;
});

