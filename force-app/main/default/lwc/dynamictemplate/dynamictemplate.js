import { LightningElement } from 'lwc';
import firsttemplate from './dynamictemplate.html';
import templateone from './templateone.html';
import templatetwo from './templatetwo.html';
export default class Dynamictemplate extends LightningElement {
    templateone=false;
    templatetwo=false;
    render(){
        if(!this.templateone && !this.templatetwo){
            return firsttemplate ;
        }elseif(this.templateone)
        {
            return templateone;
        }
        elseif(this.templatetwo)
        {
            return templatetwo;
        }
    }
    templateone(){
        this.templateone=false;
        this.templatetwo=false;
    }
    templatetwo(){
        this.templateone=true;
        this.tempolatetwo=false;
    }
    templatethree(){
        this.templateone=false;
        this.templatetwo=true;
    }
}