import { LightningElement,track } from 'lwc';

export default class Accountmanagerldsforms extends LightningElement {

    @track recordid;
    successhandler(event){
        this.recordid=event.detail;
    }
}