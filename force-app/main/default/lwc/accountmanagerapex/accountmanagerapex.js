import { LightningElement,wire } from 'lwc';
import accountlist from '@salesforce/apex/accountmanager.accountlist';
export default class Accountmanagerapex extends LightningElement {

    @wire(accountlist)
    accounts;

    get responsereceived(){
        if(this.account){
            return true;
        }return false;
    }
}