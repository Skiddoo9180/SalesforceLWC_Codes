@istest
public class TestRestrictContactByName {
    public string lname = 'INVALIDNAME';
    @istest
    static void testlastname(){
        contact c=new contact(lastname='INVALIDNAME');
            //insert c;
        // Perform test
        Test.startTest();
        Database.SaveResult result = Database.insert(c, false);
        Test.stopTest();
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        System.assertEquals('Cannot create contact with invalid last name.',
                             result.getErrors()[0].getMessage());
    }
}