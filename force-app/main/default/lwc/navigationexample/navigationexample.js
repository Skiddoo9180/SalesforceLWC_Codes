import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import IsStandard from '@salesforce/schema/Pricebook2.IsStandard';
export default class Navigationexample extends NavigationMixin (LightningElement ){

    openSFDCFacts(){

        this[NavigationMixin.Navigate]({

            type:'standard__webPage',
            attributes:{
                url : 'https://sfdcfacts.com'
            }
        });
    }
    openAccountHome(){
        this[NavigationMixin.navigate]({

            type:'standard__objectPage',
            attributes:{
                ObjectApiName:'Account',
                actionName:'home'

            }        });
    }
  createNewContact(){
        this[NavigationMixin.navigate]({

            type:'standard__objectPage',
            attributes:{
                ObjectApiName:'Contacts',
                actionName:'New'
            }
        });
    }
}



