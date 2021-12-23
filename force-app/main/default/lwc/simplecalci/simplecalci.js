import { LightningElement} from 'lwc';
export default class simplecalci extends LightningElement {
    nme='world';
   changehandler(event){
       this.nme=event.target.value;
       
   } 
}
