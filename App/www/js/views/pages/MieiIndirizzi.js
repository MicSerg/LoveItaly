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

    	events: {
            "click .MI_box" : "toSalvaIndirizzo",
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
	
    	toSalvaIndirizzo: function(event){
            Backbone.history.navigate("salvaindirizzo",{
                trigger: true
            });
    	},
    });
    return mieiIndirizzi;
});
