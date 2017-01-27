/*Codice js ListaDesideri*/
define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
    console.log("Entro in ListaDesideri");

    var listaDesideri = Utils.Page.extend({
    	constructorName: "ListaDesideri",
    	initialize: function(){
    		this.template=Utils.templates.listaDesideri;
    	},

    	id:"",

    	className:"",

    	events: {},

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},

    });
    return listaDesideri;
});
