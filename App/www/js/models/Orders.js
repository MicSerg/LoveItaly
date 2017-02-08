define(function(require) {

    var Backbone = require("backbone");
    var $ = require("jquery");


    var autenticazione = function(xhr) {
        var key64 = 'SVlJNk0zNU1MQjhVVlczOFk5OVJZM1lQUVdSWDVYOEg6'; //codifica 64 della API key
        var token = 'Basic '.concat(key64);
        xhr.setRequestHeader('Authorization', token);
    }

    var Orders = Backbone.Model.extend({

        constructorName: "Orders",

        initialize: function(options) {
            this.id = options.id;
        },

        url: function() {
            var url = 'http://192.168.56.101/loveitaly/api/orders/?io_format=JSON&display=full';
            url += this.id;
            url += '?io_format=JSON';
            return url;
        },

        parse: function(response) {

            return response.orders;
        },
        sync: function(method, collection, options) {
            options = options || {};
            options.beforeSend = autenticazione;
            return Backbone.Model.prototype.sync.apply(this, arguments);
        }
    });

    return Orders;
});