@istest
public class testpositiontriggerclass {
    @testsetup
    static void setupposition(){
        position__c p=new position__C(name='sfdc deveeloper',salary__c=100000);
        system.debug('salary before inserting position-->> ' +p.salary__C);
   		//test.starttest();
        insert p;
        //test.stoptest();
    }
	@istest
    static void validateposition(){
        position__c posi=new position__c();
        posi=[select salary__c from position__c where name='sfdc deveeloper' limit 1];
        system.debug('new salary-->'+posi.salary__c);
        system.assertequals(105000,+posi.salary__c);
    }
}