import { LightningElement } from 'lwc';

export default class Lifecyclehookschild extends LightningElement {

    constructor(){
        
        super()
        console.log("child construyctor")
    }

    connectedCallback(){
        console.log("child connected callback")
    }

    renderedCallback(){

        console.log('child rendered callback')
    }
    value
    changechild(event){
        this.value=event.target.value
    }

    disconnectedCallback(){
        alert('child disconnected call back')
    }
}