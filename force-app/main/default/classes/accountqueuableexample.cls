public class accountqueuableexample implements queueable {
    //append "w" at the end of account name}
    public list<Account> acclist;
    public accountqueuableexample(list<account> acclist)
    {
        this.acclist=acclist;
    }
    public void execute(queueablecontext context){
        for(account a:acclist){
            a.name=a.name+'w';
        }
        update acclist;
    }
}