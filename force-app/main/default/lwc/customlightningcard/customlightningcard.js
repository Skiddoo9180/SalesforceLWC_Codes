import { LightningElement } from 'lwc';

export default class Customlightningcard extends LightningElement {

    slotchangehandler(){

        const footerElem=this.template.querySelector('.slds-card__footer')
        if(footerElem){
            footerElem.classList.remove('slds-hide')
        }
    }
}