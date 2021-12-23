public class soqlclass {
    public void forsoqlmethod(){
        //show 10 account in debug logs
        for(account a:[select id,name from account limit 10]){
            system.debug('values--->>' +a);
        }
    }
}