define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");

    var login = Utils.Page.extend({

    	constructorName: "login",

    	//model: login (?),

    	initialize: function(){
    		this.template = Utils.templates.login;
    	},

    	id: "",
    	className: "",

        /* in events in pratica scriviamo: "tipodievento   tagHTMLinteressatoAquelevento :
        qualeFunzionedevievocare -> (La funzione che viene evocata per ora è headNavig che
        è dichiarata dopo la funzione "render". */
    	events: {
    		"click #container" : "headNavig"
    	},

    	render: function(){
    		this.el.innerHTML = this.template({});
    		return this;
    	},

        /*Questo commento è per spiegare il perché viene usato "showheadnavig".
        In questa funzione in pratica diciamo di andare in showheadnavig che sarebbe
        la funzione showHeadNavig in router.js (Se vedi l'inizio di router.js, dove
        c'è l'elenco delle funzioni con i loro "nomi", troverai anche questo:
        showheadnavig : showHeadNavig. usiamo tutte lettere minuscole perché in router.js
        ci riferiamo alla funzione showHeadNavig usando lo stesso nome ma con le lettere
        minuscole*/
        headNavig: function(event){
            Backbone.history.navigate("showheadnavig",{
                trigger: true
            });
        }

    });
    return login;
});