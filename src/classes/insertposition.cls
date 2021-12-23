public class insertposition {
    public position__c pos{get;set;}
    public insertposition(){
        pos=new position__c();
    }
    Public pagereference save(){
        insert pos;
        PageReference pageRef = new PageReference('https://www.google.com');
        return  pageref;
    }
}