import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'

import NAME_FIELD from '@salesforce/schema/Contact.Name'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'

export default class RecordEditForm extends LightningElement 
{
    objectName=CONTACT_OBJECT
    fields={name:NAME_FIELD,
            title:TITLE_FIELD,
            phone:PHONE_FIELD,
            email:EMAIL_FIELD,
            accountId:ACCOUNT_FIELD
        }

    handleReset()
    {
        const resField=this.template.querySelectorAll('lightning-input-field') //this will give node of list hence we should first make it Array of list then only indexing is possible
        if(resField)
        {
            Array.from(resField).forEach(fields=>{
                fields.reset()
            })
        }
    }
}