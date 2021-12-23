trigger positiontriggerfortestclass on Position__c (before insert) {
position__c [] positions=trigger.new;
    positionsalaryincrement.increasesalary(positions);
}