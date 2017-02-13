define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");
    var Prodotti = require("models/Prodotti");
    var Carrello = require("collections/Carrello");

    var dettaglioProdotto = Utils.Page.extend({

    	constructorName: "dettaglioProdotto",

    	model: Prodotti,

    	initialize: function(){
    		this.template = Utils.templates.dettaglioProdotto;
    	},

    	id: "dettaglio_Prodotto",
    	className: "",
/*
**  - Si clicca l'azienda e si apre il dettaglio azienda specifico
**  - Si clicca il simbolo del carrello e il prodotto selezionato va nel carrello
*/
    	events: {
    		"click #detAziendaButton" : "toDettAzienda",
    	},

    	render: function(){
            /*
    		this.el.innerHTML = this.template({});
    		return this;*/
            var temp = localStorage.getItem("datoprod");

            var model = new Products({
                id: temp
            });

            var that = this;
            model.fetch({
                success: function() {

                    var temptext = model.get('description');
                    var tempprice = model.get('price');

                    var idprod = model.get('id');
                    var idtemp = model.toJSON();
                    idimg = (idtemp.associations.images[0]).id;
                    idprod = idprod;

                    model.set("img", 'http://192.168.56.101/loveitaly/api/images/products/' + idprod + '/' + idimg + '/?ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H');
                    console.log(model.toJSON());

                    /*****************************************************
                     * Funzione jQuery per eliminare tag HTML/XML
                     * lasciando solo il testo
                     *****************************************************/

                    model.set("description", $(temptext).text());
                    model.set("price", parseFloat(tempprice).toFixed(2));


                    $(that.el).html(that.template(model.toJSON()));

                    

                    return that;
                }
            });


    	},

        toDettAzienda: function(){
            Backbone.history.navigate("dettaglioazienda",{
                trigger: true
            });
        }

    });
    return dettaglioProdotto;
});