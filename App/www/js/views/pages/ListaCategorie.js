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

    	events: {
    		
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

    });
    return listaCategorie;
});