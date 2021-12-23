import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/messageDemo__c";
import {publish,subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    input
    
    recievedMessage
    subscription
    @wire(MessageContext) context

    connectedCallback()
    {
        this.subscribeMessage()
    }

    subscribeMessage()
    {
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        this.subscription= subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message)
    {
        this.recievedMessage = message.lmsData.value? message.lmsData.value :'NO Message published'
    }

    unsubscribeMessage()
    {
        unsubscribe(this.subscription)
        this.subscription = null
    }    

    valuechange(event)
    {
        this.input=event.target.value
    }

    sendhandler()
    {
        const message =
        {
            lmsData:{value:this.input}
        }
        
        publish(this.context,SAMPLEMC,message)

    }

}


