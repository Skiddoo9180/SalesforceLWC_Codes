trigger ClosedOpportunityTrigger on Opportunity (after insert,after update) {
    list<task> tsk=new list<task>();
    for (Opportunity a : [SELECT Id,StageName,(SELECT WhatId,Subject FROM Tasks) FROM Opportunity
                          WHERE Id IN :Trigger.New AND StageName LIKE '%Closed Won%']) {
                              
                              task t=new task(WhatId=a.Id, Subject='Follow Up Test Task');
                              tsk.add(t);
                          }
    if (tsk.size()>0){
        insert tsk;
    }
}