import { LightningElement } from 'lwc';

export default class Dynamiccss extends LightningElement {

    percent
    sizecss(event){

    this.percent=event.target.value

    }

    get percentage(){

        return `width:${this.percent}%`
    }
}