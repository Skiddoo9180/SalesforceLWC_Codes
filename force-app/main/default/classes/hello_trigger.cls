public class hello_trigger {
    public static void hello(list<position__c> pos){
        system.debug('thanks for calling me trigger'+pos);
    }
}