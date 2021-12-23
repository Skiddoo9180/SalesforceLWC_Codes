public with sharing class CarSearchFormController {
    @AuraEnabled(cacheable=true)
    public static list<Car_Type__c> getCarTypes()
    {
        return [SELECT Id,Name FROM Car_Type__c];
       
    }
}


