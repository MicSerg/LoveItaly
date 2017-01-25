define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
    console.log("Entro in MieiIndirizzi.js");

    var mieiIndirizzi = Utils.Page.extend({
    	constructorName: "MieiIndirizzi",
    	initialize: function(){
    		this.template=Utils.templates.mieiIndirizzi;
    	},

    	id:"",

    	className:"",

    	events: {},

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},

    });
    return mieiIndirizzi;
});