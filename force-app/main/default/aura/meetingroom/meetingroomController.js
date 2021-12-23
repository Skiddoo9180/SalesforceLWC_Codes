({
    doInit : function(component, event, helper) {

        component.set("v.meetingroom",[
            {roomname:'a-101' , roomno:'12'},
            {roomname:'a-102' , roomno:'14'},
            {roomname:'b-101' , roomno:'161'},
            {roomname:'b-102' , roomno:'162'},
            {roomname:'b-103' , roomno:'163'},
            {roomname:'b-104' , roomno:'164'},
            {roomname:'b-105' , roomno:'165'},
            {roomname:'b-106' , roomno:'166'},
            {roomname:'b-107' , roomno:'167'},
            {roomname:'b-108' , roomno:'168'}
        ]);
    },
    handleTileClick: function(component,event,helper){
        component.set("v.selectedroomss",event.getParam('roomname'));
    }
})

