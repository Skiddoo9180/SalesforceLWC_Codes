({
	show : function(component, event, helper) {
		var n1=component.get("v.num1");
        var n2=component.get("v.num2");
        var result=n1+n2;
        component.set("v.calc",result);
	},
    doInit : function(component, event, helper){
        alert('page loadded');
    }
})