import { LightningElement , wire,track} from 'lwc';
import getcartypes from '@salesforce/apex/CarSearchFormController.getCarTypes';
import { NavigationMixin } from 'lightning/navigation';
import ShowToastEvent from 'lightning/platformShowToastEvent';

export default class CarSearchForm extends NavigationMixin(LightningElement) {

@track carTypes;

@wire(getcartypes) wirecartypes({data,error}){
    if(data){
        this.carTypes=[{Value:'',label:'AllTypes'}];
        data.forEach(element =>{
            const cartype={};
            cartype.label=element.Name;
            cartype.value=element.Id;
            this.carTypes.push(cartype);
        });
    }else if (error){
        this.showtoastevent('ERROR',error.body.message,'error');
    }
}

handleCarTypeChange(event){
    const carTypeId=event.detail.value;
    const carTypeSelectionChangeEvent=new CustomEvent('cartypeselect',{detail:carTypeId});
    this.dispatchEvent(carTypeSelectionChangeEvent);
}

createNewCarType(){

    this[NavigationMixin.Navigate]({
        type:'standard__objectPage',
        attributes:{
            objectApiName:'Car_Type__c',
            actionName: 'new'
        }
    });
}

    showtoastevent(title,message,variant){
        const evt=new ShowToastEvent({
            title:title,
            message:message,
            variant:variant,
        });
        this.dispatchEvent(evt);
    }
}

