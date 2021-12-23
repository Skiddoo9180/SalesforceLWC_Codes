public class myexceptionclass {
    public void dowork(){
        try{
            integer i=1;
            if(i<5)
            {
                throw new customexception();
            }
        }catch(exception e){
            system.debug('in exception'+e);
        }
    }
}