import { LightningElement, wire } from 'lwc';
import { createRecord,getRecord } from 'lightning/uiRecordApi';

const fieldarray=['Account.Name', 'Account.Phone', 'Account.Website'];
export default class Acountmanagerlds extends LightningElement {

    accountname;
    accountphone;
    accountmail;

    recordid;
  


    @wire(getRecord,{recordId:'$recordid',fields: fieldarray}) fetchrecord;

    namechangehandler(event){
        this.accountname=event.target.value;
    }

    phonechangehandler(event){
        this.accountphone=event.target.value;
    }

    websitechangehandler(event){

        this.accountmail=event.target.value;
    }

    accountcreatehandler(){

        const fields={'Name':this.accountname,'Phone':this.accountphone,'Website':this.accountmail};
        const recordInput={apiName:'Account',fields};

        createRecord(recordInput).then(response => {

            console.log('Account succesfully created:', response.id);
            this.recordid=response.id;
        }).catch(error =>{
            console.error('account not crreated:', error.body.message);
        });
    }

    get fetchname(){
        if (this.fetchrecord.data){
            return this.fetchrecord.data.fields.Name.value;
        } return undefined;
    }

    get fetchphone(){
        if (this.fetchrecord.data){
            return this.fetchrecord.data.fields.Phone.value;
        } return undefined;
    }

    get fetchurl(){
        if (this.fetchrecord.data){
            return this.fetchrecord.data.fields.Website.value;
        } return undefined;
    }
}


