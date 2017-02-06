define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
	var ListAz = require("models/ListAz");

    var Utils = require("utils");

    var listaAziende = Utils.Page.extend({

    	constructorName: "listaAziende",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.listaAziende;
    	},

    	id: "lista_Aziende",
    	className: "",

    	events: {
    		
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

    });
    return listaAziende;
});
