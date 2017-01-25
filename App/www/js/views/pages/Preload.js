define(function(require){
	var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");

    console.log("Mi trovo in Preload.js");

    var Preload = Utils.Page.extend({
    	constructorName: "Preload",

    	initialize: function(options){
    		this.template = Utils.templates.preload;
    	},
    	id:"preload",
    	className: "preload page",

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},
    });
    return Preload;

});