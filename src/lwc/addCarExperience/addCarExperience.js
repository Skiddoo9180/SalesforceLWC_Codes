import { LightningElement,api } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
import {createRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Car_Experience__c.Name';
import EXPERIENCE_FIELD from '@salesforce/schema/Car_Experience__c.Experience__c';
import CAR_FIELD from '@salesforce/schema/Car_Experience__c.Car__c';
import EXPERIENCE_OBJECT from '@salesforce/schema/Car_Experience__c'

export default class AddCarExperience extends LightningElement {
title='';
desc='';
@api carid;
    titlechangehandler(event){
        this.title=event.target.value;
    }

    descriptionchangehandler(event){

        this.desc=event.target.value;
    }

    addexphandler(){

        const fields={};
        fields[NAME_FIELD.fieldApiName]=this.title;
        fields[EXPERIENCE_FIELD.fieldApiName]=this.desc;
        fields[CAR_FIELD.fieldApiName]=this.carid;

        const recordInput={apiName:EXPERIENCE_OBJECT.objectApiName,fields};
        createRecord(recordInput).then(carexp=>{
            this.showtoast('SUCCESS','Experience car Updated','success');
            const recordAdded= new CustomEvent('experienceadded');
            this.dispatchEvent(recordAdded);
        }).catch(error=>{
            this.showtoast('ERROR',error.body.message,'error');
        });  
    }

    showtoast(title,message,variant){

        const evt = new ShowToastEvent({
            title:title,
            message:message,
            variant:variant,
        });
        this.dispatchEvent(evt);
    }
}
        