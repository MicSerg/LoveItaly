define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");


    console.log("Sono dentro Offerte.js");

    var offerte = Utils.Page.extend({

    	constructorName: "offerte",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.offerte;
    	},

    	id: "",
    	className: "",

        //in offerte c'è solo l'evento che ti porta al dettaglio prodotto.
    	events: {
    		"click #prova" : "toDettProdotto", 
    	},

    	render: function(){
            var self = this;
    		self.el.innerHTML = self.template({});
            self.slideInit();
    		return self;
    	},

        slideInit: function(e){
            $(".single-item").slick({
                dots: true,
                arrows: true,
                adaptiveHeight: true
            });
        },
        toDettProdotto: function(event){
            Backbone.history.navigate("dettaglioprodotto",{
                trigger: true
            });
        },

    });
    return offerte;
});