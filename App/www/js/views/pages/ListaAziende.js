define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");
    var ListAz = require("models/ListAz");

    var listaAziende = Utils.Page.extend({

    	constructorName: "listaAziende",

    	model:ListAz,

    	initialize: function(){
    		this.template = Utils.templates.listaAziende;
    	},

    	id: "lista_Aziende",
    	className: "",


    	events: {
		"click #dettaglio_azienda" : "toDettAzienda",
    	},

    	render: function(){
            
            stored = JSON.parse(localStorage.getItem("lista_azienda"));
            
            $(this.el).html(this.template(stored));
            return this;
        },

       toDettAzienda: function(e) {

            e.preventDefault();

            var datoazienda = $(e.currentTarget).attr("data-az");

            localStorage.setItem("datoazienda", datoazienda);

            Backbone.history.navigate("dettaglioazienda", {
                trigger: true
            });
        }

    });
    return listaAziende;
});
