import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import { loadScript } from 'lightning/platformResourceLoader';


export default class ThirdPartFiles extends LightningElement {
currentDate=''

isLibLoaded=false

renderedCallback()
{
    if(this.isLibLoaded)
    {
        return
    }

    else
    {
        // Promise.all ([ 
                    loadScript(this,MOMENT+'/moment/moment.min.js').then(()=>{
                    // ]).then(()=>{
                         this.setScreenDateAndTime()
                     }).catch(error=>{console.error(error)
            })
        this.isLibLoaded=true
    }
}

setScreenDateAndTime()
    {
        this.currentDate= moment().format('LLLL')
    }
// currentDate=''
// isLibLoaded = false
// renderedCallback(){ 
//     if(this.isLibLoaded){ 
//         return
//     } else { 

//         loadScript(this, MOMENT+'/moment/moment.min.js').then(()=>{ 
//             this.setDateOnScreen()
//         }).catch(error=>{ 
//             console.error(error)
//         })
//         this.isLibLoaded = true
//     }
   
// }
// setDateOnScreen(){ 
//     this.currentDate = moment().format('LLLL')
// }
// }
}