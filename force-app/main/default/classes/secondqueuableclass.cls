public class secondqueuableclass implements queueable {
    public void execute(queueablecontext context){
        //code logic
        list<account> acclist=[select id,name from account limit 10];
        system.enqueuejob(new accountqueuableexample(acclist));
    }
}