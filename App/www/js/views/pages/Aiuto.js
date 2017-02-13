define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");

    var aiuto = Utils.Page.extend({

    	constructorName: "aiuto",


    	initialize: function(){
    		this.template = Utils.templates.aiuto;

              $(document).ready(function(){
                $('.collapsible').collapsible();
              });
        
    	},

    	id: "Aiuto_sc",
    	className: "",
/*
**  - Si torna indietro
**  - Si clicca una domanda dell'aiuto e si apre la risposta!
*/
    	events: {
    		"click #t_Back" : "goBackToNavig", 
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        goBackToNavig: function(){ 
            console.log("back toOfferte from Aiuto");
            Backbone.history.navigate("showheadnavig",{
                trigger: true
            });
        },

    });
    return aiuto;
});