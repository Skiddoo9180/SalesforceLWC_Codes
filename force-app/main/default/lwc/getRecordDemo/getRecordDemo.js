import { LightningElement ,wire,api} from 'lwc';
import { getRecord,getFieldDisplayValue,getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class GetRecordDemo extends LightningElement 
{
    name
    owner
    annualRevenue

    names
    owners
    annualRevenues

    namea
    ownera
    annualRevenuea

    @api recordId

    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]})
    accountHandler({data,error})
    {
        if(data){
            console.log(data)
            this.name=data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.owner=data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value
            this.annualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
        }
    }
    //using layout type

    @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['Edit']})
    accountHandlers({data,error})
    {
        if(data){
            console.log(data)
            this.names=data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.owners=data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value
            this.annualRevenues = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
        }
    }

    //Using getFieldValue and getFieldDisplayValue

    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,OWNER_NAME_FIELD,ANNUAL_REVENUE_FIELD]})
    accountHandlera({data,error})
    {
        if(data){
            console.log(data)
            this.namea=getFieldValue(data,NAME_FIELD)
            this.ownera=getFieldValue(data,OWNER_NAME_FIELD)
            this.annualRevenuea = getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD)
        }
    }
}