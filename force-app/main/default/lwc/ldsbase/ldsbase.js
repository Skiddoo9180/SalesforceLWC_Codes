import { LightningElement,track } from 'lwc';

export default class Ldsbase extends LightningElement {
    @track recordid;
    successhandler(event){
        this.recordid=response.id;
    }
}