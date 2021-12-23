import { LightningElement } from 'lwc';

export default class Bmicalculator extends LightningElement {
    name='BMI Calculator';
    Changable(event){
        this.name='RAJU';
        console.log('VALUE CHANGED TO:',this.name);
    }
}