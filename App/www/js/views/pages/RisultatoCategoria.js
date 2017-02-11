define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Lista_Prod_Cat = require("models/ListaProdottiDaCategoria");
	
    var Utils = require("utils");

    var risultatoCategoria = Utils.Page.extend({

    	constructorName: "risultatoCategoria",

    	model: Lista_Prod_Cat,

    	initialize: function(){
    		this.template = Utils.templates.risultatoCategoria;
    	},

    	id: "",
    	className: "",

    	events: {
    		//"click #container" : "toDettProdotto", 
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
    return risultatoCategoria;
});