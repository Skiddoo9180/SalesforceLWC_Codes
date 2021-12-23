import { LightningElement,api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {

    @api title

    sendhandler(){

        //const event=new CustomEvent('aurashow',{detail:{"msg":"Hello bro ,I am LWC Event"}})
        
       //this.dispatchEvent(event)

       this.dispatchEvent(new CustomEvent('aurashow',{detail:{msg:'Hello bro ,I am LWC Event'}}))
    }
}

