import { LightningElement,wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import { getObjectInfos } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfoDemo extends LightningElement 
{
    recordId

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    accountHandler({data,error})
    {
        if(data)
        {
            console.log(data)
            this.recordId=data.defaultRecordTypeId
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    recordIdProperty

    objectInfosApi=[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    objectInfos
    @wire(getObjectInfos,{objectApiNames:'$objectInfosApi'})
    objectInfosHandler({data,error})
    {
        if(data)
        {
            console.log(data)
            this.objectInfos=data
        }
        if(error){
            console.error(error)
        }
    }
}