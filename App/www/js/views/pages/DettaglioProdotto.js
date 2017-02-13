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

    	events: {
    		"click #detAziendaButton" : "toDettAzienda",
            "click #p_cart" : "addCart",
    	},

    	render: function(){
            
            var temp = localStorage.getItem("datoprod");

            var model = new Prodotti({
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
                    

                   

                    model.set("description", $(temptext).text());
                    model.set("price", parseFloat(tempprice).toFixed(2));


                    $(that.el).html(that.template(model.toJSON()));

                    

                    return that;
                }
            });


    	},

        addCart: function(e){
            
            
            var arraytemp = [];
            if(localStorage.getItem("Carrello") != null){
                
                arraytemp.push(JSON.parse(localStorage.getItem("Carrello")));
            }
            var self = this;
            
            var idprod =e.currentTarget.parentElement.getAttribute("data-prod"),
                nome=e.currentTarget.parentElement.getAttribute("data-nome"),
                prezzo=e.currentTarget.parentElement.getAttribute("data-prz"),
                quantita=e.currentTarget.parentElement.getAttribute("data-qnt");
            

            
            var prod = new Prodotti({
                name: nome,
                id: idprod,
                price: parseFloat(prezzo).toFixed(2),
                quantity: quantita
            });
            
            if(localStorage.getItem("Carrello")){
                var Carrello = JSON.parse(localStorage.getItem("Carrello"));
            }else{
                var Carrello = [];
            }
            Carrello.push(prod);

            localStorage.setItem("Carrello" , JSON.stringify(Carrello));
            
            

        },
        toDettAzienda: function(){
            Backbone.history.navigate("dettaglioazienda",{
                trigger: true
            });
        }

    });
    return dettaglioProdotto;
});
