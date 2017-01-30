define(function(require) {

    var Backbone = require("backbone");
    var $ = require("jquery");
    var md5= require("md5");


    var autenticazione = function(xhr) {
        var key64 = 'SVlJNk0zNU1MQjhVVlczOFk5OVJZM1lQUVdSWDVYOEg6'; //codifica 64 della API key
        var token = 'Basic '.concat(key64);
        xhr.setRequestHeader('Authorization', token);
    }

    var User = Backbone.Model.extend({

        constructorName: "User",


        /*****************************************************
         * Uso chiave MD5 come da specifica Prestashop
         *****************************************************/

        initialize: function(options) {
            this.prova = "PROVA";
            this.email = options.email;
            this.psw= options.psw;
            console.log(this.prova + "prima di this.psw");
            console.log(this.psw);
            this.psw = md5('7j3EQiXxwscCNaOIORd8YqmvkjfEmDVxs4EcihNJNVNyCG4bHA3ThTnk'+ this.psw);
            console.log(options);
        },

        url: function() {
            var url = 'http://192.168.56.101/loveitaly/api/customers/?io_format=JSON&filter[email]=';
            url += this.email;
            url += '&filter[passwd]=';
            url += this.psw;
            return url;
        },

      parse: function(response) {
            console.log("STIAMO IN PARSE");
            console.log(response);
            return response;
        },

        sync: function(method, collection, options) {
            console.log(" STIAMO IN SYNC ");
            console.log(collection);
            console.log(method);
            options = options || {};
            options.beforeSend = autenticazione;
            return Backbone.Model.prototype.sync.apply(this, arguments);
        }
    });

    return User;
});