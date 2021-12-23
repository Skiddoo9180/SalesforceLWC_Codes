import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class CustomRecordEditForm extends LightningElement 
{
//     objectName=ACCOUNT_OBJECT
//     inputValue=''

//     handleChange(event){ 
//         this.inputValue = event.target.value
//     }
//     handleSubmit(event){ 
//         event.preventDefault()
//         const inputCmp = this.template.querySelector('lightning-input')
//         const value= inputCmp.value
//         if(!value.includes('Australia')){ 
//             inputCmp.setCustomValidity("The account name must include 'Australia'")
//         } else { 
//             inputCmp.setCustomValidity("")
//             const fields = event.detail.fields
//             fields.Name = value
//             this.template.querySelector('lightning-record-edit-form').submit(fields)
//         }
//         inputCmp.reportValidity()

//     }
//     successHandler(event){ 
//         const toastEvent = new ShowToastEvent({ 
//             title:'Account created',
//             message: 'Record ID: '+ event.detail.id,
//             variant:'success'
//         })
//         this.dispatchEvent(toastEvent)

//     }
//     handleError(event){ 
//         const toastEvent = new ShowToastEvent({ 
//             title:"Error creating Account",
//             message: event.detail.message,
//             variant:"error"
//         })
//         this.dispatchEvent(toastEvent)
//     }
// }

    changeHandler(event)
    {
        this.inputValue=event.target.value
    }

    successhandler(event)
    {
        const toastevent= new ShowToastEvent({
            title:"Account created",
            message:"Account created with RecordId->"+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastevent)
    }

    errorhandler(event)
    {
        const toastevent= new ShowToastEvent({
            title:"Error Creating Account",
            message:"event.detail.message",
            variant:"error"
        })
        this.dispatchEvent(eventoasteventt)
    }

    submithandler(event)
    {
        event.preventDefault()
        const inputcmp=this.template.querySelectorAll('lightning-input')
        const value=inputcmp.value
        if (!value.includes('Australia'))
        {
            inputcmp.setCustomValidity("The account namer must contain Australia")
        }
        else
        {
            inputcmp.setCustomValidity("")
            const fields=event.detail.fields
            fields.Name=value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputcmp.reportValidity()
    }
}