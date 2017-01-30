define(function(require) {

    var Backbone = require("backbone");
    var Prodotti = require("models/Prodotti");

    var Carrello = Backbone.Collection.extend({
        constructorName: "Carrello",
        model: Prodotti
    });

    return Carrello;
});
