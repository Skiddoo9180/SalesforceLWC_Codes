({
    "echo" : function(cmp) {
        // create a one-time use instance of the serverEcho action
        // in the server-side controller
        var action = cmp.get("c.serverEcho");
        action.setParams({ firstName : cmp.get("v.firstName") });

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState(); //gets the state of the action returned from the server.
            if (state === "SUCCESS") {
                 alert("From server: " + response.getReturnValue()); //gets the value returned from the server.
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
               // do something
               // console.log("Unknown error");
            }
        });
        // $A.enqueueAction adds the server-side action to the queue.
        //$A is how you gain access to the underlying Aura framework, such as enqueuing actions,
        // getting application events,            
        // managing the Aura rendering life cycle, and various utility methods.
        $A.enqueueAction(action);
    }
})