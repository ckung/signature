define(
    [	
         "jQueryUIComponents",
         "libs/Mustache"
    ],
    
    function($, Mustache) {
        
        var Templates = { };
        
        Templates.Transition = function(strategy) {
            if (strategy) { 
                this.strategy = strategy;
            }
        }; 
        
        Templates.Transition.prototype = {
            strategy: function(container, html) { $(container).html(html) },
            
            execute: function(container, html, options) {
                this.strategy(container, html, options);
            }
        };
        
        Templates.TRANSITIONS = {
            DEFAULT: new Templates.Transition(),
            OVERLAY: new Templates.Transition((function() {
                
                var $overlay = $("#overlay");
                
                if ($overlay.size() == 0) {
                    $overlay = $("<div id='overlay' class='overlay module'><div class='content'></div></div>").appendTo("body");
                }  
                
                $overlay.overlay({
                    top: "center",
                    left: "center",
                    mask: {
                        color: '#EEE',
                        loadSpeed: 200,
                        opacity: 0.5
                    },

                    closeOnClick: false
                });
                
                return function(container, html, options) {
                    $(container).html(html);
                    $overlay.find(".content").html(container);
                    $overlay.data("overlay").load();
                    
                    if (options) {
                        var overlayEvents = ["onBeforeLoad", "onLoad", "onBeforeClose", "onClose"];
                        for (var i = 0; i < overlayEvents.length; i++) {
                            var event = overlayEvents[i];
                            
                            $overlay.bind(event, options[event] || $.noop);
                        }
                    }
                };
            })())
        }
        
        Templates.render = function(options) {
            var template = options.template,  /* template data */
                $container = $(options.container),  /* Element or jQuery */
                model = options.model && typeof options.model.toJSON == "function" ? options.model.toJSON() : options.model,  /* Backbone.Model or Object */
                transition = Templates.TRANSITIONS.DEFAULT,  /* Templates.Transition */
                transition_options = options.transition_options,
                $destination = $(options.destination);  /* Object */
            
            if ($container.size() == 0 || !template) { return; }

            if (options.transition) {
                transition = options.transition;
            }
            
            var html =  model ? Mustache.to_html(template, model) : template;
            
            transition.execute($container, html, transition_options);
            
            if ($destination.size() != 0) {
                $destination.html($container);
            }
        };
        
        return Templates;
    }
);