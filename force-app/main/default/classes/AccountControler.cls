public with sharing class AccountControler {
@AuraEnabled(cacheable=true)
public static list<Account> getAccountList()
    {
        return[SELECT Id,Name,Type,Industry from Account limit 10];
    }
}
