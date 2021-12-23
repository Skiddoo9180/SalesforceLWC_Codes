import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Myroom3 extends LightningElement {
@api meetingroominfo;

@api showroom= false;

@wire(CurrentPageReference) pageReference;  

tileclickhandler(){

 //   const tileclicked=new CustomEvent('tileclick',{detail:this.meetingroominfo});
 // event for listener programticaallyy
  const tileclicked=new CustomEvent('tileclick',{detail:this.meetingroominfo,bubbles:true});

    this.dispatchEvent(tileclicked);
    fireEvent(this.pageReference,'pubsubtileclick',this.meetingroominfo);
}
}