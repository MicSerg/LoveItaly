/*
Head Menu View è una view che va a raggruppare tutte le pagine aperte
dal sidemenu. Queste pagine in comune hanno soltanto una cosa: il BG.
*/

define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var handlebars = require("handlebars");
    console.log("Entro in HeadMenuView.js");

    var HeadMenuView = Backbone.View.extend({
    	constructorName: "HeadMenuView",
    	id: "HMview",

    	events:{

    	},
    	initialize: function(){
    		console.log("inizializza Head Menu");
    		this.template = Utils.templates.headmenu;

    	},
    	render: function(){
    		this.el.innerHTML = this.template({});
    		this.contentElement = this.$el.find('#menu_content')[0];
    		return this;
    	},
    });
    return HeadMenuView;


});