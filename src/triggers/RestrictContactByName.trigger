trigger RestrictContactByName on Contact (before insert) {
    
    public string lastname;
   	contact con =new contact();
    for (contact c:trigger.new){
        if (c.lastname=='INVALIDNAME'){
           c.AddError('The Last Name "'+c.LastName+'" is not allowed for DML');
        }
    }
       
}