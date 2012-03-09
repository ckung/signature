define(function(require) {

    var $ = require("jQueryUIComponents");
    var Backbone = require("Backbone");
    var Templates = require("Templates");
    var User = require("models/User");
    var Login = require("models/Login");
    var loginTemplate = require("text!templates/guest/loginForm.html");

    var LoginFormView = Backbone.View.extend({
        el : $("#page"),
        initialize : function() {
            this.model = new Login();
        },
        events : {
         //   "submit form" : "login",
            "change input" : "inputChanged"
        },
        exampleBind : function(model) {
            //console.log(model);
        },
        render : function() {
            this.$el.html(loginTemplate);
            this.$el.find(".login-form").validator({
                errorClass:"error",
                errorInputEvent: null
            });
        },
        inputChanged : function(e) {
            bindByInputName($(e.currentTarget), this.model);
        }
    });

    function bindByInputName(field, targetModel) {
        var data = {};
        data[field.attr('name')] = field.val();
        targetModel.set(data);
    }

    return LoginFormView;
});
