import { LightningElement ,api,track} from 'lwc';

export default class Meetingrooms extends LightningElement {
    @track meetingroom=[
        {roomname:'a-101' , roomcapacity:'12'},
        {roomname:'a-102' , roomcapacity:'14'},
        {roomname:'b-101' , roomcapacity:'161'},
        {roomname:'b-102' , roomcapacity:'162'},
        {roomname:'b-103' , roomcapacity:'163'},
        {roomname:'b-104' , roomcapacity:'164'},
        {roomname:'b-105' , roomcapacity:'165'},
        {roomname:'b-106' , roomcapacity:'166'},
        {roomname:'b-107' , roomcapacity:'167'},
        {roomname:'b-108' , roomcapacity:'168'}
    ];
    }