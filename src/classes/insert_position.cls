public class insert_position {
    Public position__c psn{get;set;}
    Public insert_position(){
        psn=new position__C();
        }
    public pagereference saverec(){
       // try{
            Insert psn;
            //system.debug('the postion enter is '+p); 
            Pagereference ref=new pagereference('https://www.google.com');
            return ref ;
      //  }
     //   catch (dmlexception d)
      //  {
      //      System.debug('please enter valid data'+d);
//        }
        
    }
}