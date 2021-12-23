import { LightningElement,wire } from 'lwc';
import getaccountalllist from '@salesforce/apex/apexaccountwire.getaccountlist';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Accountauraenable extends LightningElement {
accounts;

noofaccount;


  //  @wire (getaccountalllist) accounts;

    get responses(){

        if (this.accounts){
            return true;
        }return false;
    }

    onchangehandler(event){

        this.noofaccount=event.target.value;
    }

    onclickhandler(){

        getaccountalllist({noa:this.noofaccount}).then(response =>{
            console.log('Account fetcheched succesfully',response)
            this.accounts=response;

            const showtoastevent= new ShowToastEvent({
                title:"Account fetched",
                message:this.noofaccount+ 'no of acocunt fetched',
                variant:'success'
            });
            this.dispatchEvent(showtoastevent);
        }).catch(error =>{
            console.error('Unsuccessfull', error.body.message)
            const showtoastevent= new ShowToastEvent({
                title:'Error',
                message:error.body.message,
                variant:'error'
            });
            this.dispatchEvent(showtoastevent);
        })
    }
}
