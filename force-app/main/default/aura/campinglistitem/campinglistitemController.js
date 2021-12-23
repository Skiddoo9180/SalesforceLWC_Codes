({
    packItem : function(component, event, helper) {
        var a = component.get("v.item",true);
        a.Packed__c = false;
        var btnClicked = event.getSource(); 
        component.set("v.item",a);
                // the button
        //var btnMessage = btnClicked.get("v.label"); // the button's label
        //component.set("v.item.Packed__c", true);
        //component.set("v.disabled", true);
    }
})