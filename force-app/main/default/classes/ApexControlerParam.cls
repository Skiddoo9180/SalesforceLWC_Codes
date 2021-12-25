public with sharing class ApexControlerParam {


    @AuraEnabled(cacheable=true)
        public static list<Account> getaccount(string type)
        {
            return[SELECT Id,Name,Type,Industry FROM Account WHERE Type=:type limit 20];
        }

    @AuraEnabled(cacheable=true)
        public static list<Account> findAccount(string searchKey)
        {
            string key= '%' + searchKey + '%';
            return [SELECT Id,Name,Type,Industry FROM Account WHERE Name LIKE :key limit 20];
        }

}