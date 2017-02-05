require.config({
	paths: {
		jquery: '../lib/jquery/jquery-2.2.4',
		slider: '../lib/slick/slick.min', 
		materialize: '../lib/materialize/js/materialize.amd',
		underscore: '../lib/underscore/underscore',
		backbone: '../lib/backbone/backbone',
		text: '../lib/require/text',
        async: '../lib/require/async',
        handlebars: '../lib/handlebars/handlebars',
        templates: '../templates',
        spin: '../lib/spin/spin.min',
        preloader: '../lib/preloader/pre-loader',
        utils: '../lib/utils/utils',
        session: '../lib/backbone.session',
        md5: '../lib/md5.min'
	},
	shim: {
		'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },

        'materialize': {
            deps: ['jquery', 'slider'],
            exports: 'Materialize'
        },

        'slider': {
            deps: ['jquery'],
            exports: 'Slider'
        }
	}
});

require(['backbone', 'utils'], function(Backbone, Utils) {
    //console.log("MAIN:> Primo Require backbone / utils");
    require(['preloader', 'router'], function(PreLoader, AppRouter) {
        //console.log("MAIN:> Secondo Require preloader / router");
        //document.addEventListener("deviceready", run, false); // <-- per cordova
        window.onload=run(); // <- per provarlo in browser
        require(['materialize', 'jquery'], function(Materialize, $) {
            //document.addEventListener("deviceready", initComponents, false); // <-- per cordova
            //console.log("MAIN:> Terzo Require materialize / jquery");

            initComponents(); // <-- per provarlo in browser

            function initComponents() {
                console.log("MAIN:> funzione initComponents dentro il terzo require");
                require(
                    ['velocity', 'jquery.easing', 'animation', 'hammerjs', 'jquery.hammer', 'global', 'collapsible', 'dropdown', 'leanModal', 'materialbox', 'parallax', 'tabs', 'tooltip', 'waves', 'toasts', 'sideNav', 'scrollspy', 'forms', 'slider', 'cards', 'pushpin', 'buttons', 'scrollFire', 'transitions', 'picker', 'picker.date', 'character_counter'],
                    function() {

                        $('.button-collapse').sideNav();
                        $('.collapsible').collapsible({
                            accordion: false
                        });
                });

            }

        });


        function run() {
            //console.log("MAIN:> Funzione run()");

            // Here we precompile ALL the templates so that the app will be quickier when switching views
            // see utils.js


            // Questa funzione non viene svolta o almeno non carica i template
            Utils.loadTemplates().once("templatesLoaded", function() {
            console.log("MAIN:> Funzione utils.loadTemplates() dentro Funzione run()");
                var images = []; // here the developer can add the paths to the images that he would like to be preloaded

                if (images.length) {
                    console.log("Images.length esistente - LO SALTA COMPLETAMENTE");
                    new PreLoader(images, {
                        onComplete: startRouter
                    });
                } else {
                    console.log("Images.length non esiste");
                    // start the router directly if there are no images to be preloaded
                    startRouter();
                }

                function startRouter() {
                    // launch the router
                    //console.log("MAIN:> funzione startRouter() in run() ");

                    var router = new AppRouter();

                    //console.log("MAIN:> AppRouter fatto, appena finisce questo faccio history.start");
                    //console.log(AppRouter);
                    Backbone.history.start();
                    //console.log("Ha finito tutto in main!");
                    
                }
            });
        }
       

    });
});
