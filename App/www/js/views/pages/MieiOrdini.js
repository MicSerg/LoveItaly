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

    	events: {},

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},

    });
    return mieiOrdini;
});