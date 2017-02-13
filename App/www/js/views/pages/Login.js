define(function(require){
	var $ = require("jquery");
	var Backbone = require("backbone");
    var Utils = require("utils");
	var User = require("models/User");


    var login = Utils.Page.extend({

    	constructorName: "login",

    	model: User,

    	initialize: function(){
            
    		this.template = Utils.templates.login;
            
    	},

    	id: "",
    	className: "",
        switchDes: false,
        menuView: "insdatispedizione",
        
    	events: {
    		"click #buttonLogin" : "doLogin"
    	},

    	render: function(){
            console.log("Render?");

    		this.el.innerHTML = this.template({});

    		return this;
    	},

        
        doLogin: function(event){
            

            el: $("lForm");
            var self=this;
            var nickname=$(this.el).find("#fusername").val();
            var passw = $(this.el).find("#fpassword").val();

            var utente= new User({
                email: nickname,
                psw: passw
            });
            utente.fetch({
                success: function(){


                    localStorage.setItem("sessione", nickname);
                    localStorage.setItem("idsess", (utente.attributes.customers)[0].id);
                    localStorage.setItem("keyorder", (utente.attributes.customers)[0].secure_key);
                        

                    if(self.switchDes){
                            
                            
                            Backbone.history.navigate("showheadmenu",{
                                trigger: true
                            });
                    }else{
                            
                            
                            
                            Backbone.history.navigate("showheadnavig",{
                                trigger: true
                            });
                    }
            
                    
                },
                error: function(){
                    
                    
                }
            });

            
        }

    });
    return login;
});
