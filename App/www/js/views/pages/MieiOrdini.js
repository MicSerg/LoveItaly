define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
    console.log("Entro in mieiOrdini");

    var mieiOrdini = Utils.Page.extend({
    	constructorName: "mieiOrdini",
    	initialize: function(){
    		this.template=Utils.templates.mieiOrdini;
    	},

    	id:"",

    	className:"",

    	events: {
		"click #MI_box" : "toSalvaIndirizzo",
	},

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},
	
	toSalvaIndirizzo: function(event){
            Backbone.history.navigate("salvaindirizzo",{
                trigger: true
            });
	},

    });
    return mieiOrdini;
});
