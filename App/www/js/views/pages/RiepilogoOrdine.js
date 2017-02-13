define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Utils = require("utils");

	var riepilogoordine = Utils.Page.extend({
		constructorName: "riepilogoordine",

		initialize: function(){
			this.template=Utils.templates.riepilogoOrdine;

		},
		id: "riepilogo_ordine", // ID che tiene TUTTO riepilogo ordine
		className: "",
		events: {
			"click #t_Back" : "goBackToNavig",
		},

		render: function(){
			this.el.innerHTML = this.template( JSON.parse(localStorage.getItem("Carrello")) );
			return this;
		},

		goBackToNavig: function(){
			console.log("torna ad offerte");
			Backbone.history.navigate("showheadnavig",{
				trigger: true
			});
		},

	});
	return riepilogoordine;

});