trigger bulkoppr on Opportunity (before insert) {
    list<task> a=new list<task>();
    for (opportunity opp:trigger.new){
        
        task t=new task();
        t.whatid=opp.id;
        t.OwnerId=opp.OwnerId;
        t.Subject='hello';
        t.Status='open';
        t.Priority='normal';
        a.add(t);
    }
    insert a;
    
}