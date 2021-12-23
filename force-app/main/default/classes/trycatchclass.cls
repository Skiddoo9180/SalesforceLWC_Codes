public class trycatchclass {
    public void mymethod(){
        try{
            //account acc= [select id,rating,name from account limit 1];
            list<account> emptylist =new list<account>();
            account accrecord=emptylist[0];
            system.debug('in try block');
        }
        catch(queryexception e){
            system.debug('in query exception'+e);
        }
        catch(listexception e){
            system.debug('in list exception---->>'+e);
        }catch(exception e){
            system.debug('in exception');
        }
        finally{
            system.debug('in finally block');
        }
    }
}