public class batchaccountupdate implements database.batchable<sobject>{
    //start method
    public database.querylocator start(database.batchablecontext bc){
        string query='select id,name from account';
        return database.getquerylocator(query);    //will not returns exception if query returns 1M records
    }
//execute method
    public void execute(database.batchablecontext bc,list<account> scope){
        for (account a:scope){
            a.name=a.name +'BA';
        }
        update scope;
    }
//finish method
    public void finish(database.batchablecontext bc){
        //post processing logic
        system.debug('batch job completed');
    }
}

/*instance
 * batchaccountupdate obj=new batchaccountupdate();
//default 200 but maximum is 2000
id jobid=database.executebatch(obj,2);
//data.executebatch(new batchaccountupdate(),2);
//select id,status from asyncapexjob where id='7075g00000pfizf'
*/