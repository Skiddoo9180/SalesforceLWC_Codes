trigger position_trigger on Position__c (before insert,before update ,after insert) {
    if (trigger.isbefore){
        system.debug('Inside before');
    }
    if (trigger.isinsert){
        system.debug('inside isinsert');
        hello_trigger.hello(trigger.new);
    }
    
}