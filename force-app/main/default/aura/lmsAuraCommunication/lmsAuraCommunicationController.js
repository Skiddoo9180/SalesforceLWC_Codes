({
   
    handleMessage:function(component,message)
    {
        if(message!=null && message.getParam("lmsData")!=null)
        {
            component.set("v.messagereceived",message.getParam("lmsData").value)
        }
    },

    inputhandler:function(component,event)
    {
        // console.log('Messgae Entered->',event.target.value)
        console.log(event.target.value)
        component.set("v.messagevalue",event.target.value)
    },

    publishMessage:function(component)
    {
        let msg=component.get("v.messagevalue")
        let message=
        {
            lmsData:{value:msg}
        }

        component.find("messageDemo").publish(message)
    }
})
