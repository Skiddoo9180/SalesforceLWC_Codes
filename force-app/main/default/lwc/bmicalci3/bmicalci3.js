import { LightningElement,track } from 'lwc';

export default class bmicalci3 extends LightningElement {
   @track bmidata={
    height:0,
    weight:0,
    bmi:0
   }
    heighthandler(event){
        this.bmidata.height=parseFloat(event.target.value);
    }

    weighthandler(event){
        this.bmidata.weight=event.target.value;
    }

    bmihandler(){
        this.bmidata.bmi=this.bmidata.height * this.bmidata.weight / (this.bmidata.height + this.bmidata.weight);
    }
}