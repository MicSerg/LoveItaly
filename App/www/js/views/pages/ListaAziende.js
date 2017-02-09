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

/*  Quali sono gli eventi?
**  - Si clicca un azienda e si va nel dettaglio dell'azienda specifica.
*/
    	events: {
            "click #dettaglio_azienda" : "toDettAzienda",
    	},

    	render: function(){
            /*Qui andrebbe la chiamata all'API per avere la lista di aziende*/


    		this.el.innerHTML = this.template({});
    		return this;
    	},
        toDettAzienda: function(){
            Backbone.history.navigate("dettaglioazienda",{
                trigger: true
            });
        }

    });
    return listaAziende;
});