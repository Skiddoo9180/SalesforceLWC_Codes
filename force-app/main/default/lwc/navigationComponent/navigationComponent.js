import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavigationComponent extends NavigationMixin(LightningElement) {

homeHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__namedPage',
        attributes:{
            pageName:'home'
        }
    })

}

chatterHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__namedPage',
        attributes:{
            pageName:'chatter'
        }
    })
}


contactHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
            objectApiName:'Contact',
            actionName:'new'
        }
    })
}
contacDefaulttHandler()
{
    const defaultValue=encodeDefaultFieldValues({
        FirstName:'Classmate'
        ,LastName:'Natraj'
        ,LeadSource:'Other'
    })

    this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValue
            }

    })
}

contacListViewtHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__objectPage'
        ,attributes:{
            objectApiName:'Contact',
            actionName:'list'
        },
        state:{
            filterName:'Recent'
        }
    })
}

fieViewHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
            objectApiName:'ContentDocument',
            actionName:'home'
        }
    })
}

contactEditHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__recordPage',
        attributes:{
            recordId:'0035g00000GjWQLAA3',
            objectApiName:'Contact',
            actionName:'edit'
        }
    })
}

contactViewHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__recordPage',
        attributes:{
            recordId:'0035g00000GjWQLAA3',
            objectApiName:'Contact',
            actionName:'view'
        }
    })
}

vfTabHandler()
{
    this[NavigationMixin.Navigate]({
        type:'standard__navItemPage',
        attributes:{
            apiName:'vf_page'
        }
    })
}

recordRelationship()
{
    this[NavigationMixin.Navigate]({
        type:'standard__recordRelationshipPage',
        attributes:{
            recordId:'0015g00000RvDFTAA3',
            objectApiName:'Account',
            relationshipApiName:'Contact',
            actionName:'view'
        }
    })
}

facebookNav(){
    this[NavigationMixin.Navigate]({
        type:'standard__webPage',
        attributes:{
            url:'https://www.udemy.com'
        }
    })
}
}
