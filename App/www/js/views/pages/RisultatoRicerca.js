define(function(require){
    var $ = require("jquery");
    var Backbone = require("backbone");
    var Lista_Ricerca = require("models/SearchList");
    
    var Utils = require("utils");

    var risultatoRicerca = Utils.Page.extend({

        constructorName: "risultatoRicerca",

        model: Lista_Ricerca,

        initialize: function(){
            this.template = Utils.templates.risultatoricerca;
        },

        id: "",
        className: "",

        events: {
            "click .productBox" : "toDettProdotto", 
        },

        render: function(){
            this.el.innerHTML = this.template({});
            return this;
        },

        toDettProdotto: function(event){
            Backbone.history.navigate("dettaglioprodotto",{
                trigger: true
            });
        }

    });
    return risultatoRicerca;
});