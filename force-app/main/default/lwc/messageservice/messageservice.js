import { LightningElement,track,wire } from 'lwc';
import messageDemo from "@salesforce/messageChannel/messageDemo__c";
import { APPLICATION_SCOPE,createMessageContext,messageContext,publish,releaseMessageContext,subscribe,unsubscribe } from 'lightning/messageService';
export default class Messageservice extends LightningElement {
    // @track messages=[];
    // @wire(messagecontext) msgcontext;
    // sendhandler(){
    //     const inputelement=this.template.queryselector("lightning-input");
    //     if(inputelement){
    //         const msg=inputelement.value;
    //         this.messages.push({
    //             id:this.messages.length,
    //             value:msg,
    //             from:"LWC"
    //         })
    //     }
    // }
    // const messagePayLoad={
    //     message : msg
    // };

    // publish(this.msgcontext,messageDemo,messagePayload);
}