/*import { LightningElement ,track} from 'lwc';
import {createrecord,getrecord} from "lightning/uirecordapi";
const fieldarray=['account.name','account.phone'];

export default class Accountcreate extends LightningElement {
       accountname;
     phone;
     website;
    @wire(getrecord,{recordid:'$recordid',field:'fieldarray'})
    namechangehandler(event){
      /*  this.accountname=track.event.value;
    }

    accountcreate(){
        const field={'name':this.accountname,'phone':this.phone};
        const recordinput={apiName:'account',field};

    }
  createrecord(recordinput).then{response=>{
        console.log('account created',response.id);
        recordid=response.id;
  /*  }catch(error=>{
        console.log("eeror ',error.body.mesage)
    })
}
get retaccname(){
    if(this.recordid.data)
    return this,recordid.data.fields.name.value
}*/
