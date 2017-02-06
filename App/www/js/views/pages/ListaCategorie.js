define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");

    var Utils = require("utils");

    var listaCategorie = Utils.Page.extend({

    	constructorName: "listaCategorie",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.listaCategorie;
    	},

    	id: "",
    	className: "",

/*
**  - Si clicca il tasto categoria e si aprono le eventuali subcategorie..
**  - ..Oppure si va direttamente nella lista dei prodotti di quella categoria
*/
    	events: {
    		
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

    });
    return listaCategorie;
});