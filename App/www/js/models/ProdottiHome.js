define(function(require) {

    var Backbone = require("backbone");
    var $ = require("jquery");

    var autenticazione = function(xhr) {
        var key64 = 'SVlJNk0zNU1MQjhVVlczOFk5OVJZM1lQUVdSWDVYOEg6'; //codifica 64 della API key
        var token = 'Basic '.concat(key64);
        xhr.setRequestHeader('Authorization', token);
    }

    var ProdottiHome = Backbone.Model.extend({

        constructorName: "ProdottiHome",


        initialize: function(options) {
        },

    });



    return ProdottiHome;
});
