define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");

    var opzioni = Utils.Page.extend({

    	constructorName: "opzioni",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.opzioni;
    	},

    	id: "",
    	className: "",

    	events: {
    		"click #tastoIndietro" : "toOfferte", 
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        toOfferte: function(){ 
            Backbone.history.navigate("dettaglioazienda",{
                trigger: true
            });
        }

    });
    return opzioni;
});