public class mycustomcontroller {
    Public string getname(){
        return 'mycustomcontroller satyam';
    }
    public position__c getposition(){
        Return [select id,name,salary__c from position__c where id=: apexpages.currentpage().getparameters().get('id')];
    }
}