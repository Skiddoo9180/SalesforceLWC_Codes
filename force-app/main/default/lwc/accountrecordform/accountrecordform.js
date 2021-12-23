import { LightningElement } from 'lwc';
import name_field from'@salesforce/schema/account.name';
import phn_field from '@salesforce/schema/account.phone'
export default class Accountrecordform extends LightningElement {
    fieldarray=[name_field,phn_field];
   /* @track recordid; */
    handlesucess(event){
        this.recordid=event.detail.id;
    }
}