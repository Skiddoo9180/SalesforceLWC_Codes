import { LightningElement,api,wire,track } from 'lwc';
import carsearchresult from '@salesforce/apex/CarSearchResultController.getCars'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchResult extends LightningElement {
@track cars;
@api carTypeId;
@track selectedcarid;
@wire(carsearchresult, {carTypeId:'$carTypeId'}) carsearchwired({data,error}){
    if(data){
        this.cars=data;
    }else if(error){
        this. showtoastevent('ERROR',error.body.message,'error');
    }
}
 get carsFound(){

    if (this.cars){

        return true;

    }   return false;
 }

 showtoastevent(title,message,variant){

    const evt=new ShowToastEvent({
        title: title,
        message:message,
        variant:variant,
    });
    this.dispatchEvent(evt);
 }

 carselecthandlerid(event){
     const carid=event.detail;
     this.selectedcarid=carid;
 }
}
