import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor'
import ID from '@salesforce/user/Id'
import IS_GUEST from  '@salesforce/user/isGuest'

import manageLeads from '@salesforce/userPermission/ManageLeads'
import myCustomPrmission from '@salesforce/customPermission/show_details'
export default class FormFactor extends LightningElement {

    formFactor=FORM_FACTOR

    userId= ID
    isGuest=IS_GUEST

    manageleads=manageLeads
    custompermission=myCustomPrmission


    
    // get hasViewAllDataAvialable(){ 
    //     return hasViewAllData
    // }

    // get hasCustomPermission(){ 
    //     return myCustomPermission
    // }

}


