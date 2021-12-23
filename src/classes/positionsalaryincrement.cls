public class positionsalaryincrement {
    public static void increasesalary(position__c[] pos){
        for(position__c p:pos)
        {
            p.salary__c+=5000;
            system.debug('newsalary=> '+p);
        }
    }
}