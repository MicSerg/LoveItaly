/**/

define(function(require){
	var $ = require("jquery");
    	var Backbone = require("backbone");
    	var Utils = require("utils");
    	var handlebars = require("handlebars");
	var ListaSearch = require("views/pages/ListaSearch");

    console.log("Entro in HeadInitView.js");

    var HeadInitView = Backbone.View.extend({
    	constructorName: "HeadInitView",
    	id: "main",

    	events: {
    		//Evento click per cambiare pagina qui? Non dovrebbe essere così

    	},


        /*"initialize" è una funzione che viene chiamata ogni volta che viene 
        chiamata l'oggetto HeadInitView, un po' come gli inizializzatori d'istanza
        in java (i blocchi con "static" se non ricordo male)*/
    	initialize: function(){
    		console.log("inizializza headInit");
    		this.template = Utils.templates.headinit;
    		console.log(this.template);
    	},

        /*"render" non ricordo quando venga chiamato ma serve per dire che l'oggetto
        (in questo caso HeadInitView) ha un determinato template(cioè una determinata
        struttura HTML) (this.el.innerHTML è quello)
        this.contentElement invece serve per dire dove inserire il content delle pagine
        minori (login, sceltaCitta vengono CONTENUTE in HeadInitView, che sarebbe la
        VIEW principale)*/
    	render: function(){
    		this.el.innerHTML = this.template({});
    		this.contentElement = this.$el.find('#log_content')[0];
    		return this;
    	},


    });
    return HeadInitView;

});
