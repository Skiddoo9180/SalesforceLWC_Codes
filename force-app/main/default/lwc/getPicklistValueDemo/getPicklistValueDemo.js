import { LightningElement, wire } from 'lwc';
import {getObjectInfo,getPicklistValues} from 'lightning/uiObjectInfoApi'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
export default class GetPicklistValueDemo extends LightningElement 

{

    selectedIndustry=''
    industryOptions=[]

    selectedType=''
    typeOptions=[]

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error})
    {
        if(data)
        {
            console.log(data)
            this.industryOptions=[...this.generatePicklist(data)]
        }
        if(error)
        {
            console.error(error)
        }
    }
    handleChange(event)
    {
        this.selectedIndustry=event.detail.value
    }
   
    // For Account.Type

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:TYPE_FIELD})
    typePicklist({data,error})
    {
        if(data)
        {
            console.log(data)
            this.typeOptions=[...this.generatePicklist(data)]
        }
        if(error)
        {
            console.error(error)
        }
    }

    handleTypeChange(event)
    {
        this.selectedType=event.detail.value
    }

    // Generating Picklist from the array to Label and Values

    generatePicklist(data)
    {
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
}