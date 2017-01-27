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
          "click #tastoIndietro" : "goBack",
        },

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},

        goBack: function(event){
            Backbone.history.navigate("showheadnavig",{
                trigger: true
            });
        },
	   
    	toListaDesideri: function(event){
    		Backbone.history.navigate("listadesideri",{
                    trigger: true
    		});
    	},

    });
    return gestListeDesideri;
});
