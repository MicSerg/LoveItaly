define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Utils = require("utils");

	var insdatispedizione = Utils.Page.extend({
		constructorName: "insdatispedizione",

		initialize: function(){
			this.template=Utils.templates.insDatiSpedizione;

		},
		id: "spedizione_dati",
		className: "",
		events: {
			"click #t_Back" : "goBackToNavig",
			"click #t_Riepilogo" : "showRiepilogoOrdine",
		},

		render: function(){
			this.el.innerHTML = this.template({});
			return this;
		},
		showRiepilogoOrdine: function(){
			console.log("verso Riepilogo Ordine");
			Backbone.history.navigate("riepilogoordine",{
				trigger: true
			});
		},
		goBackToNavig: function(){
			console.log("da insDatiSpedizione a Offerte");
			Backbone.history.navigate("showheadnavig",{
				trigger: true
			});
		},

	});
	return insdatispedizione;

});