import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToLwc extends NavigationMixin(LightningElement )
{
    navigateLwc()
    {
        var defination=
        {
            componentDef:'c:navigateLwcTarget',
                 attributes:
            {
                    recordId:'787778445265565'
            }
        }

        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
       
    }
}