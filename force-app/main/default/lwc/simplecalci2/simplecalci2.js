import { LightningElement,track } from 'lwc';

export default class Simplecalci2 extends LightningElement {
    numberone;
    numbertw2;
    result;
    previousresult=false;
    @track previousres=[];

    numchangehandler(event){
        const inputboxname =event.target.name;
        if(inputboxname==='firstnumber')
        {
            this.numberone=event.target.value;
        }
        else if(inputboxname==='secondnumber')
        {
            this.numbertw2=event.target.value;
        }
    }

    addhandler(){
        const num1=parseInt(this.numberone);
        const num2=parseInt(this.numbertw2);
       // this.result='Result of '+num1+'+'+num2+' is +(num1+num2)';
        this.result=`Result of ${num1}+${num2} is ${num1+num2}`;
        this.previousres.push(this.result);

    }
    subhandler(){
        const num1=parseInt(this.numberone);
        const num2=parseInt(this.numbertw2);
       // this.result='Result of '+num1+'+'+num2+' is +(num1+num2)';
        this.result=`Result of ${num1}-${num2} is ${num1-num2}`;
        this.previousres.push(this.result);
    }
    mulhandler(){
        const num1=parseInt(this.numberone);
        const num2=parseInt(this.numbertw2);
       // this.result='Result of '+num1+'+'+num2+' is +(num1+num2)';
        this.result=`Result of ${num1}*${num2} is ${num1*num2}`;
        this.previousres.push(this.result);
    }
    divhandler(){
        const num1=parseInt(this.numberone);
        const num2=parseInt(this.numbertw2);
       // this.result='Result of '+num1+'+'+num2+' is +(num1+num2)';
        this.result=`Result of ${num1}/${num2} is ${num1/num2}`;
        this.previousres.push(this.result);
    }
    showpreviousresult(event){
        this.previousresult=event.target.checked;
    }
}