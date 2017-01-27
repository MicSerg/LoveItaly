define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");

    var aiuto = Utils.Page.extend({

    	constructorName: "aiuto",


    	initialize: function(){
    		this.template = Utils.templates.aiuto;
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
    return aiuto;
});