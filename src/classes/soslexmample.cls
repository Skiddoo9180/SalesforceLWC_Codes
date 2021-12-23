public class soslexmample {
    public list<contact> conlist=new list<contact>();
    public list<account> acclist=new list<account>();
    public list<candidate__c> canlist=new list<candidate__c>();
    public list<hrs__c> hrlist=new list<hrs__c>();
    public list<position__c> poslist= new list<position__c>();
    public string searchstr='joe';
    public void search(){
        list<list<sobject>> searchlist=[find :searchstr in all fields returning account (id,name,type,phone), 
                                        contact(name,email),candidate__c(name,email_address__c),hrs__c(name)];
        acclist=((list<account>)searchlist[0]);
        conlist=((list<contact>)searchlist[1]);
        canlist=((list<candidate__c>)searchlist[2]);
        hrlist=((list<hrs__c>)searchlist[3]);
        system.debug('account_list----->>'+acclist);
        system.debug('contact_list---->>'+conlist);
        system.debug('candidate_list--->>'+canlist);
        system.debug('hr_list'+hrlist);
    }
}