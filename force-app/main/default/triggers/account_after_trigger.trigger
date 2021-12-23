trigger account_after_trigger on Account (after insert,after update) {
    List<contact> ct =new list<contact>();
    for(account a:trigger.new){
        contact c= new contact(lastname=a.name,
                               accountid=a.id,
                               fax=a.fax,
                               phone=a.phone);
        ct.add(c);
    }
    insert ct;
}