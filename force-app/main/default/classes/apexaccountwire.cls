public with sharing class apexaccountwire {
    @AuraEnabled(cacheable=true)
    public static list<Account> getaccountlist(integer noa){

        return [SELECT Id, Name, Phone FROM Account Limit :noa];     
    }
}