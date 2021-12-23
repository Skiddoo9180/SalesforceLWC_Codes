public class AccountController {
@AuraEnabled
public static List<contact> getContactsRelatedToAccount(String accountId) {
return [SELECT Name,Phone, CreatedDate FROM Contact WHERE AccountId = :accountId ORDER BY CreatedDate DESC LIMIT 10];
    
}
}