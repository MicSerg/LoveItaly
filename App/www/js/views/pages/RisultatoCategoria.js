define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Lista_Prod_Cat = require("models/ListaProdottiDaCategoria");
    var Prodotti = require ("models/Prodotti");
    var VistaProdotti = require ("views/pages/VistaProdotti");
	
    var Utils = require("utils");

    var risultatoCategoria = Utils.Page.extend({

    	constructorName: "risultatoCategoria",

    	model: Lista_Prod_Cat,

    	initialize: function(){
    		this.template = Utils.templates.risultatoCategoria;
    	},

    	id: "",
    	className: "",

    	events: {
    		//"click #container" : "toDettProdotto", 
    	},

    	render: function(){
    		var temp = localStorage.getItem("datocategoria");
            var model = new Lista_Prod_Cat({
                id: temp
            });

            var that = this;
            model.fetch({
                success: function() {
                    var temp= model.toJSON();


                    /*****************************************************
                     * Riempio gli oggetti dell'array con le immagini
                     * in modo da usufruirne nella lista, mostrandole
                     * all'utente
                     *****************************************************/

                    for (var i = 0; i < (Object.keys(temp).length)-1; i++) {

                        var idprod = ((model.toJSON())[i]).id;
                        var idtemp= model.toJSON()[i];
                        idimg = (idtemp.associations.images[0]).id;
                        idprod = idprod;
                        var img2 = 'http://192.168.56.101/loveitaly/api/images/products/' + idprod + '/' + idimg + '/?ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H';
                        ((model.toJSON())[i]).img= img2;
                        ((model.toJSON())[i]).price= parseFloat(((model.toJSON())[i]).price).toFixed(2);
                    }


                    $(that.el).html(that.template((model.toJSON())));
                    return that;
                }
            });
    	},

        toDettProdotto: function(event){
            Backbone.history.navigate("dettaglioprodotto",{
                trigger: true
            });
        }

    });
    return risultatoCategoria;
});
