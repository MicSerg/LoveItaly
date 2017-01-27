define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");

    var opzioni = Utils.Page.extend({

    	constructorName: "opzioni",

    	//model: sceltaCitta (?),

    	initialize: function(){
    		this.template = Utils.templates.opzioni;
    	},

    	id: "",
    	className: "",

    	events: {
    		"click #tastoIndietro" : "goBackToNavig", 
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        goBackToNavig: function(){ 
            console.log("back toOfferte from Opzioni");
            Backbone.history.navigate("showheadnavig",{
                trigger: true
            });
        },

    });
    return opzioni;
});