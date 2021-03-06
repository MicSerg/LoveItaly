define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
	var Orders = require ("models/Orders");
    console.log("Entro in mieiOrdini");

    var mieiOrdini = Utils.Page.extend({
    	constructorName: "mieiOrdini",
    	initialize: function(){
    		this.template=Utils.templates.mieiOrdini;
    	},

    	id:"",

    	className:"",

    	events: {
    		"click #ord_det" : "toOrdine",
    		"click #tastoIndietro" : "goBack",
    	},

    	render: function(){
    		var stored = JSON.parse(localStorage.getItem("cat"));
            	$(this.el).html(this.template(stored));
            	return this;
    	},
        goBack: function(event){
            Backbone.history.navigate("showheadnavig",{
                trigger: true
            });
        },
    	toOrdine: function(event){
    		Backbone.history.navigate("ordine",{
                    trigger: true
    		});
    	}
	

    });
    return mieiOrdini;
});
