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
    require(['preloader', 'router'], function(PreLoader, AppRouter) {
        document.addEventListener("deviceready", run, false); 

        require(['materialize', 'jquery'], function(Materialize, $) {
            document.addEventListener("deviceready", initComponents, false); 
            function initComponents() {
                require(
                    ['velocity', 'jquery.easing', 'animation', 'hammerjs', 'jquery.hammer', 'global', 'collapsible', 'dropdown', 'leanModal', 'materialbox', 'parallax', 'tabs', 'tooltip', 'waves', 'toasts', 'sideNav', 'scrollspy', 'forms', 'slider', 'cards', 'pushpin', 'buttons', 'scrollFire', 'transitions', 'picker', 'picker.date', 'character_counter'],
                    function() {

                        $('.collapsible').collapsible({
                            accordion: false
                        });
                });
            }
        });
        //disabilita il tastino "indietro"
        function onBackKeyDown(e) {
            e.preventDefault();
        }

        function run() {
            Utils.loadTemplates().once("templatesLoaded", function() {

                var images = []; 

                if (images.length) {
                    new PreLoader(images, {
                        onComplete: startRouter
                    });
                } else {
                    startRouter();
                }

                function startRouter() {
                    var router = new AppRouter();
                    Backbone.history.start();
                }
            });
        }
       

    });
});
