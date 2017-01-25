/*File js di salvaIndirizzo*/
define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
    console.log("Entro in SalvaIndirizzo");

    var salvaIndirizzo = Utils.Page.extend({
    	constructorName: "SalvaIndirizzo",
    	initialize: function(){
    		this.template=Utils.templates.salvaIndirizzo;
    	},

    	id:"",

    	className:"",

    	events: {},

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},

    });
    return salvaIndirizzo;
});
