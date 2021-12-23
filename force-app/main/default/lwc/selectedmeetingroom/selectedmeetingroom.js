import { LightningElement, track, wire } from 'lwc';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Selectedmeetingroom extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    @track selectedrooms= {};

 
    connectedCallback(){
        registerListener('pubsubtileclick', this.selectedroomhandler, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    selectedroomhandler(payload){
        this.selectedrooms=payload;
    }

}