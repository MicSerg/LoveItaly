define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");
    //inserimento modelli
    var Prodotti_Home = require ("models/Prodotti_Home");
    //nuovo modello prodotti_home che filtra i primi 5 prodotti
    var Prodotti = require ("models/Prodotti");
    var Categorie = require ("collections/Categorie");
    var ProdottiHome = require ("models/ProdottiHome");
    var saleProduct = require ("models/saleProduct");
    var sweetProduct = require ("models/sweetProduct");



    console.log("Sono dentro Offerte.js");

    var offerte = Utils.Page.extend({

    	constructorName: "offerte",

    	model: Prodotti_Home,

    	initialize: function(){
    		this.template = Utils.templates.offerte;
    	},

    	id: "",
    	className: "",

/*
**  - Si clicca il prodotto e si entra nel dettaglio prodotto specifico
**  - Si clicca il simbolo del carrello e il prodotto selezionato va nel carrello
*/
    	events: {
    		"click .productBox" : "toDettProdotto", 
    	},

    	render: function(){
            //inizio modifiche
            /*****************************************************
             * Riempio la home con i miei oggetti di interesse
             *****************************************************/

            var that = this;

            var online = new saleProduct();
            var sale2 = new sweetProduct();
            var arraytest = [];
            var loca = localStorage.getItem("localizzazione");

            online.fetch({
                success: function() {

                    /*****************************************************
                     * Aggiungo immagini e setto a float i prezzi in modo
                     * adeguato
                     *****************************************************/

                    arraytest[0] = (online.attributes);

                    test = online.attributes;

                    sale2.fetch({
                        success: function() {

                            test = sale2.attributes;
                            arraytest[1] = (sale2.attributes);
                            arraytest[2] = loca;

                            for (var i = 0; i < 5; i++) {

                                var idprod = ((arraytest[0][i])).id;
                                var idtemp = (arraytest[0][i]);
                                idimg = (idtemp.associations.images[0]).id;
                                idprod = idprod;
                                var imgSrc = 'http://192.168.56.101/loveitaly/api/images/products/' + idprod + '/' + idimg + '/?ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H';


                                ((arraytest[0][i])).img = imgSrc;
                                ((arraytest[0][i])).price = parseFloat(((arraytest[0][i])).price).toFixed(2);
                            }

                            for (var i = 0; i < 5; i++) {

                                var idprod = ((arraytest[1][i])).id;
                                var idtemp = (arraytest[1][i]);
                                idimg = (idtemp.associations.images[0]).id;
                                idprod = idprod;
                                var imgSrc = 'http://192.168.56.101/loveitaly/api/images/products/' + idprod + '/' + idimg + '/?ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H';


                                ((arraytest[1][i])).img = imgSrc;
                                ((arraytest[1][i])).price = parseFloat(((arraytest[1][i])).price).toFixed(2);
                            }

                            $(that.el).html(that.template(arraytest));

                            //that.slideInit(); vanno modificati
                            //that.startnav();

                            return that;
                        }
                    });
                }
            });
    	},

        slideInit: function(e){
            $('.autoplay').slick({
                
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:true,
                centerPadding:'65px',
                arrows:false
                //autoplay: true,
                //autoplaySpeed: 2000
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
