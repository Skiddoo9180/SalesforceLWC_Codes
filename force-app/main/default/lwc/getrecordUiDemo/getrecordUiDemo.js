import { LightningElement ,wire,api} from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetrecordUiDemo extends LightningElement 
{
    @api recordId

    formFields=[
                    {"fieldName":"AccountId", "label":"Account Id"},
                    {"fieldName":"Email", "label":"Email"},
                //    {"fieldName":"ReportsTo", "label":"Reports To"},
                    {"fieldName":"Account", "label":"Account"}
               ]

    @wire(getRecordUi,{recordIds:'$recordId',layoutTypes:'Full',modes:'Edit'})
    accoundRecordUiHandler({data,error})
    {
        if(data){
            console.log(data)
            this.formFields=this.formFields.map(item=>{
                // return{...item, value:data.records[this.recordId].fields[item.fieldName].value}
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error)
        {
            console.error(error)
        }
    }
}
