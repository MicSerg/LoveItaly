define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
    console.log("Entro in GestioneListeDesideri");

    var gestListeDesideri = Utils.Page.extend({
    	constructorName: "GestListeDesideri",
    	initialize: function(){
    		this.template=Utils.templates.gestListeDesideri;
    	},

    	id:"",

    	className:"",

    	events: {},

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},

    });
    return gestListeDesideri;
});