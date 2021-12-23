import { LightningElement,track,wire } from 'lwc';
import {registerlistener,unregisteralllisteners} from 'c/pubsub';
import {currentpagereference} from 'lightning/navigation';
 export default class Selectedrooms extends LightningElement {

    @track selectedmeetingroom;
   // @wire{currentpagereference} Referencepage;
    connectedCallback(){
        registerlistener('pubsubtileclick',this.onmeetingroomselecthandler,this);
    }
    disconnectedCallback(){
        unregisteralllisteners(this);
    }
    onmeetingroomselecthandler(payload){
        this.selectedmeetingroom=payload;
    }
 }