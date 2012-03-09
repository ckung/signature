define(function() {
   
    /*
    // Singleton which will maintain dynamic state of the application.
    //
    // Use get and set to read and update Application state.
    //
    // This has been formalized as an object rather than a simple object
    //  to enforce certain unwanted types can't go in here.
    //
    // Please avoid loading this up with namespaces and modules, that's not its purpose.
    */
    var AppState = (function() {
        
        var state = {};
        
        return {
            
            set: function(key, value) {
                
                if (key == "") {
                    throw new Error("You must pass a key to set value on application state");
                }
                
                if (typeof value == "function") {
                    throw new Error("Functions cannot be set into application state");
                }
                
                state[key] = value;
            },
        
            get: function(key) {
                return state[key];
            }
        };
    })();
    
    return AppState;
});