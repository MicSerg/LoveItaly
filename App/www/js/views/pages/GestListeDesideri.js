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

    	events: {
		"click #gld_bottone" : "toListaDesideri",
	},

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},
	   
	toListaDesideri: function(event){
		Backbone.history.navigate("listadesideri",{
                trigger: true
		});
	},

    });
    return gestListeDesideri;
});
