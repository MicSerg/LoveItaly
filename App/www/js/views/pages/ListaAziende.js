define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");

    var listaAziende = Utils.Page.extend({

    	constructorName: "listaAziende",

    	//model: ,

    	initialize: function(){
    		this.template = Utils.templates.listaAziende;
    	},

    	id: "lista_Aziende",
    	className: "",

/*  Quali sono gli eventi?
**  - Si clicca un azienda e si va nel dettaglio dell'azienda specifica.
*/
    	events: {
    	},

    	render: function(){
            /*Qui andrebbe la chiamata all'API per avere la lista di aziende*/


    		this.el.innerHTML = this.template({});
    		return this;
    	},

    });
    return listaAziende;
});