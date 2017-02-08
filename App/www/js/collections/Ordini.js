define(function(require) {

    var autenticazione = function(xhr) {
        var key64 = 'SVlJNk0zNU1MQjhVVlczOFk5OVJZM1lQUVdSWDVYOEg6'; //codifica 64 della API key
        var token = 'Basic '.concat(key64);
        xhr.setRequestHeader('Authorization', token);
    }

    var Backbone = require("backbone");
    var Orders = require("models/Orders");

    var Ordini = Backbone.Collection.extend({
        constructorName: "Ordini",
        model: Orders,


        url: 'http://192.168.56.101/loveitaly/api/orders/?io_format=JSON&display=full',

        parse: function(data) {
            return data.orders;
        },

        sync: function(method, collection, options) {
            options = options || {};
            options.beforeSend = autenticazione;
            return Backbone.Collection.prototype.sync.apply(this, arguments);
        },

    });

    return Ordini;
});