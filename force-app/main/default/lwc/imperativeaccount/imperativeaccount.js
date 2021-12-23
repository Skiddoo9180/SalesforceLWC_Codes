import { LightningElement ,track} from 'lwc';
import accountlist from '@salesforce/apex/accountmanager.accountlist';
import {showtoastevent} from 'lightning/platformshowtoatevent';
export default class Imperativeaccount extends LightningElement {
// @track noofrecords;
// @track accounts;
//     changehandler(event){
//         this.noofrecords=track.event.value;
//     }
//     submit(){
//         accountlist({noofrecords:this.noofrecords}).then(response =>
//             // this.account=response
//             // const toaatevent = new showToastEvent({
//             //     title :'Account loaded',
//             //     message:this.noofrecords +'account loaded',
//             //     variant:'success'
//             // })
//             // ).catch(error =>
//             //     console.error(error.body.message)
//             //     const toatevent=new showtoastevent({
//             //         title:'error',
//             //         message: error.body.message,
//             //         variant:'failure'
//                 })
//                 )
//     }
}