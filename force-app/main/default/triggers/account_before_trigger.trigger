trigger account_before_trigger on Account (before insert,before update) {
    
    for (account a:trigger.new){
        If(a.industry=='banking' || a.industry=='Healthcare')
            a.rating='hot';
    }
    
}