import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/wireclasslwc.getaccountlist';
export default class AccountListLWC extends LightningElement {
    @wire(getAccountList) accounts;
}
