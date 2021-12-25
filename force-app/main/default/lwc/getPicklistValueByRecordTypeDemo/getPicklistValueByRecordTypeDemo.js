import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType ,getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistValueByRecordTypeDemo extends LightningElement 
{   
    selectedIndustry=''
    industryOptions=[]

    selectedGeoCode=''
    geoCodeOptions=[]

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectinfo

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$objectinfo.data.defaultRecordTypeId'})
    picklistvalues({data,error})
    {
        if(data)
        {
            console.log(data)
            this.industryOptions=[...this.picklistGenerator(data.picklistFieldValues.Industry)]
            this.geoCodeOptions=[...this.picklistGenerator(data.picklistFieldValues.ShippingGeocodeAccuracy)]
        }
        if(error)
        {
            console.error(error)
        }
    }

    picklistGenerator(data)
    {
        return data.values.map(item=>({label:item.label,value:item.value}))
    }

    changeHandler(event)
    {
        const {name,value}=event.detail
        console.log(name+'==>' +value)
        if(name === 'Industry'){
            this.selectedIndustry = value
        }
        if(name === 'ShippingGeocodeAccuracy'){
            this.selectedGeoCode = value
        }
    }
}