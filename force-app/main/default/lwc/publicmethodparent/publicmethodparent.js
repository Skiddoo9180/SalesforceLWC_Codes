import { LightningElement,track } from 'lwc';

export default class Publicmethodparent extends LightningElement {

     value;

    checkboxselectedhandler(){
        const selectval=this.template.querySelector('c-publicmethodchild');
        const returned=selectval.selectcheckbox(this.value);
    }

    changehandler(event){
        this.value=event.target.value;
    }
}