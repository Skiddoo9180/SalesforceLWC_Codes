import { LightningElement,track } from 'lwc';

export default class Bmicalc2 extends LightningElement {
height;
weight;
Bmi;

changehandler(event){
    this.height=parseint(event.target.value);
}
changehandler(event){
    this.weight=parseint(event.target.value);
}
bmicalc(){
    this.bmi=this.height*this.weight;
}
}