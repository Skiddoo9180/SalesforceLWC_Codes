import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track currentresult
    @track previousresult = [];
    @track showresult=false;
firstnumber;
secondnumber;
    numberchangehandler(event){
        const inputboxname=event.target.name;
        if(inputboxname=='firstnumber')
        {
            this.firstnumber=event.target.value;
            this.previousresult.push(this.currentreult)
        }
        elseif (inputboxname == 'secondnumber')
        {
        this.secondnumber=event.target.value;
        }
    }
    addhandler(){
        const firstn=parseInt(this.firstnumber);
        const secondn=parseInt(this.secondnumber);

        this.currentresult='Result of $(firstn) + $(secondn) is $(firstn+secondn)';
    }
    showpreviousresult(event){

        this.showresult=true;

    }
}

