define(function(require) {

    var Backbone = require("backbone");
    var Azienda = require("models/Azienda");

    var AziendeColl = Backbone.Collection.extend({
        constructorName: "AziendeColl",
        model: Azienda
    });

    return AziendeColl;
});