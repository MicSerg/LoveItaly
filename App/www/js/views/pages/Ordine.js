/*Codice di ordine.js*/
define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
    console.log("Entro in Ordine");

    var ordine = Utils.Page.extend({
    	constructorName: "Ordine",
    	initialize: function(){
    		this.template=Utils.templates.ordine;
    	},

    	id:"",

    	className:"",

    	events: {
            "click #tastoIndietro" : "goBack"
        },

    	render: function(){
    		this.el.innerHTML=this.template({});
    		return this;
    	},
        goBack: function(event){
            Backbone.history.navigate("mieiordini",{
                trigger: true
            });
        },

    });
    return ordine;
});
