trigger not_bulk_trigger on Account (before insert) {
    //account a=trigger.new[0];
    for(account a:trigger.new){
        a.description='not bulk';
    }
}