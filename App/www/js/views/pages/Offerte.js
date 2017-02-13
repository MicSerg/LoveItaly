define(function(require){
	var $ = require("jquery");

	var Backbone = require("backbone");
    var Utils = require("utils");

    
    var Prodotti_Home = require ("models/Prodotti_Home");
    
    var Prodotti = require ("models/Prodotti");
    var Categorie = require ("collections/Categorie");
    var ProdottiHome = require ("models/ProdottiHome");
    var saleProduct = require ("models/saleProduct");
    var sweetProduct = require ("models/sweetProduct");



    

    var offerte = Utils.Page.extend({

    	constructorName: "offerte",

    	model: Prodotti_Home,

    	initialize: function(){
    		this.template = Utils.templates.offerte;
    	},

    	id: "",
    	className: "",


    	events: {
    		"click .productBox" : "toDettProdotto",
            
    	},

    	render: function(){
            
            

            var that = this;

            var online = new saleProduct();
            var sale2 = new sweetProduct();
            var arraytest = [];
            var loca = localStorage.getItem("localizzazione");
            
            online.fetch({
                success: function() {

                    

                    arraytest[0] = (online.attributes);

                    test = online.attributes;

                    sale2.fetch({
                        success: function() {

                            test = sale2.attributes;
                            arraytest[1] = (sale2.attributes);
                            arraytest[2] = loca;
                            console.log("COMINCIA FOR FATTO SUL SEGUENTE ARRAY");
                            console.log(arraytest[0]);
                            for (var i = 0; i < 5; i++) {
                                console.log("INDICE: >", i);
                                var idprod = ((arraytest[0][i])).id;
                                var idtemp = (arraytest[0][i]);

                                if(idtemp.associations.images != undefined){
                                    idimg = (idtemp.associations.images[0]).id;
                                    idprod = idprod;
                                    var imgSrc = 'http://192.168.56.101/loveitaly/api/images/products/' + idprod + '/' + idimg + '/?ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H';


                                    ((arraytest[0][i])).img = imgSrc;
                                }
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

                            $(document).ready(function () {
                             
                                that.slideInit();
                            });

                            

                            return that;
                        }
                    });

                }
            });
    	},

        slideInit: function(e){
            console.log("COMINCIO SLIDEINIT!!!");
            $('.autoplay').slick({
                
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true

            });
            
        },
        toDettProdotto: function(event){
            event.preventDefault();
            var datoprod = $(event.currentTarget).attr("data-prod");
            localStorage.setItem("datoprod", datoprod);
            Backbone.history.navigate("dettaglioprodotto",{
                trigger: true
            });
        },
        

    });
    return offerte;
});
