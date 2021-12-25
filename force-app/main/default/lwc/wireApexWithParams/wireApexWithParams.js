import { LightningElement ,wire} from 'lwc';
import getaccount from '@salesforce/apex/ApexControlerParam.getaccount'

export default class WireApexWithParams extends LightningElement 
{
    selectedType=''

    @wire(getaccount,{type:'$selectedType'})
    accTypeList

    typeHandler(event)
    {
        this.selectedType=event.target.value
    }

    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }
}