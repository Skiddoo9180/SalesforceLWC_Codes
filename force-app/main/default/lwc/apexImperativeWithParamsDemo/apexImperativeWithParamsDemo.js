import { LightningElement } from 'lwc';
import findAccount from '@salesforce/apex/ApexControlerParam.findAccount'

export default class ApexImperativeWithParamsDemo extends LightningElement {
    accounts
    timer 
    searchKey=''
    
    searchHandler(event)
    {   
        window.clearTimeout(this.timer)
        this.searchKey=event.detail.value
        this.timer=setTimeout(()=>{
            this.callApex()
        },2000)
    }

    callApex()
    {   
        findAccount({searchKey:this.searchKey}).then(result=>{
            this.accounts=result
        }).catch(error=>{
            console.error(error)
        })

    }
}