import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControler.getAccountList'
export default class ApexImperativeDemo extends LightningElement 
{
    acclist

    accoundHandler()
    {   
        getAccountList().then(result=>{
            this.acclist=result
        }).catch(error=>{
            console.error(error)
        })

    }
}