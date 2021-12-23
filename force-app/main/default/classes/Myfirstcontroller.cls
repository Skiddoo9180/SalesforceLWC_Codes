public class Myfirstcontroller {
    
    public string getname(){
        return 'SATYAM';
    }
    public position__c getposition(){
        Return [select id,name,salary__c from position__c where id= :apexpages.currentpage().getparameters().get('id')];
    }
}