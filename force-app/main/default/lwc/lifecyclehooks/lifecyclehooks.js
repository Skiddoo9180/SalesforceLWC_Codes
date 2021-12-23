import { LightningElement } from 'lwc';

import tempone from './tempone.html'
import temptwo from './temptwo.html'
import lifecyclehooks from './lifecyclehooks.html'

export default class Lifecyclehooks extends LightningElement {

    constructor(){
        
        super()
        console.log("parent construyctor")
    }

    connectedCallback(){
        console.log("parent connected callback")
    }

    renderedCallback(){

        console.log('parent rendered callback')
    }

    value
    changeparent(event){
        this.value=event.target.value
    }
    bool=false
    showbutton=true
    clickhandler(){
        this.bool=true
        this.showbutton=false

    }
    noclickhandler(){
        this.bool=false
        this.showbutton=true

    }

    render()
    {
        return this.selbtn === 'signup' ? tempone:
               this.selbtn === 'signin' ? temptwo:
               lifecyclehooks
    
    }
    selbtn=''
    handleclick(event){
        this.selbtn=event.target.label
    }
    
    submitHandler(event){ 
        console.log(`${event.target.label} Successfully!!`)
    }
}