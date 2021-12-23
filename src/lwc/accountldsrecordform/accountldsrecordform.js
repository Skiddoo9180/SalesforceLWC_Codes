import { LightningElement,track } from 'lwc';
import account_name from '@salesforce/schema/Account.Name';
import account_phone from '@salesforce/schema/Account.Phone';
import account_website from '@salesforce/schema/Account.Website';
export default class Accountldsrecordform extends LightningElement {
    @track recordid;
  //  fieldarray=['Name','Phone','Website'];
      fieldarray=[account_name,account_phone,account_website];
    successhandler(event){

        this.recordid=event.detail.id;
    }
}