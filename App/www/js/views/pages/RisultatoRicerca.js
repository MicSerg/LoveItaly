define(function(require){
    var $ = require("jquery");
    var Backbone = require("backbone");
    var Utils = require("utils");
    var Lista_Ricerca = require("models/SearchList");
    var Prodotti = require("models/Prodotti");
    var DettaglioProdotto = require ("views/pages/DettaglioProdotto");


    var risultatoRicerca = Utils.Page.extend({

        constructorName: "risultatoRicerca",

        model: Lista_Ricerca,

        initialize: function(variabile){
            this.template = Utils.templates.risultatoRicerca;
        },

        id: "r_ricerca",
        className: "",

        events: {
            "click .productBox" : "toDettProdotto", 
        },

        render: function(){
            var temp = localStorage.getItem("datoricerca");

            console.log("MIAO");
            console.log(temp);

            var model = new Lista_Ricerca({
                id: temp
            });
            console.log("MODELL MIAO");
            console.log(model);
            var that = this;
            model.fetch({
                success: function(){
                    var temp= model.toJSON();
                    
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
                    return this;

                }
            });
        },

        toDettProdotto: function(event){
            event.preventDefault();
            var datoprod = $(event.currentTarget).attr("data-prod");
            localStorage.setItem("datoprod", datoprod);
            Backbone.history.navigate("dettaglioprodotto",{
                trigger: true
            });
        }

    });
    return risultatoRicerca;
});