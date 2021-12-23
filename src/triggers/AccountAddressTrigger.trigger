trigger AccountAddressTrigger on Account (before insert, before update) {
//For this challenge, you need to create a trigger that, before insert or update, checks for a checkbox, and if the checkbox field is true, sets the Shipping Postal Code (whose API name is ShippingPostalCode) to be the same as the Billing Postal Code (BillingPostalCode).

//The Apex trigger must be called 'AccountAddressTrigger'.
//The Account object will need a new custom checkbox that should have the Field Label 'Match Billing Address' and Field Name of 'Match_Billing_Address'. The resulting API Name should be 'Match_Billing_Address__c'.
//With 'AccountAddressTrigger' active, if an Account has a Billing Postal Code and 'Match_Billing_Address__c' is true, the record should have the Shipping Postal Code set to match on insert or update.
    for (account acct:trigger.new)
    {if(acct.Match_Billing_Address__c == true)
       {acct.shippingPostalCode = acct.billingPostalCode;}
    }
//my code states that if the Match Billing Checkbox is checked then before an account is inserted
/// or updated then the billing and shipping codes will be matched and added as new to the database.
/// my question is why is line 9 and action.  When I first tried to write it I wanted to write "then" as in if/then
}
/*trigger AccountAddressTrigger on Account (before insert,before update) {
    
for (account a:trigger.new)
{
    if (trigger.isinsert){
    if(a.Match_Billing_Address__c==true){
        if(a.Billingpostalcode==a.Shippingpostalcode){
            system.debug('conditions met');
        }
    }
    }
}
}*/