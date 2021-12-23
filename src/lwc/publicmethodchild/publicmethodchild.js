import { LightningElement,api,track} from 'lwc';

export default class Publicmethodchild extends LightningElement {
    value = 'red';


    options=[
        { label: 'Black Marker', value: 'Black' },
        { label: 'red Marker', value: 'red' },
        { label: 'brown Marker', value: 'brown' },
        { label: 'green Marker', value: 'green' },
        { label: 'yellow Marker', value: 'yellow' },
        { label: 'blue Marker', value: 'blue' }
    ]
   
    @api selectcheckbox(checkboxvalue){
        const selectedcheckbox=this.options.find(checkbox =>{
            return checkboxvalue ===checkbox.value
        })
        if (selectedcheckbox){
            this.value=selectedcheckbox.value;
        }
        return "no value found";
    }
}

