import { LightningElement } from 'lwc';

export default class LearningSlotsChild extends LightningElement {

    slotchangehandler(){
       const footerElem=this.template.querySelector('.slds-card__footer')
       if(footerElem){
           footerElem.classList.remove('slds-hide')
       }
    }
}

