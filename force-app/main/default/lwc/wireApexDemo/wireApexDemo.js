import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControler.getAccountList';
export default class WireApexDemo extends LightningElement 
{
    accList
    accLists
    @wire(getAccountList)
    accountlist
   
    @wire(getAccountList)
    accountListHandler({data,error})
    {
        if(data)
        {   
            this.accLists=data

            this.accList = data.map(item=>{
                let newName = item.Name === 'schedulable apex class' ? 'Apex Class': item.Name
    
                return {...item, newName}
                })
            console.log(data)
            console.log(this.accLists)
            console.log(this.accList)
            
        }
        if(error)
        {
            console.error(error)
        }
    }
}