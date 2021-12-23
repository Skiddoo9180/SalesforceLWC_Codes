public class accountwrappercontroller {
    public class wrapaccount{
        public account acc{get;set;}
        public boolean selected{get;set;}
        public wrapaccount(account a){
            acc=a;
            selected=false;
        }
    }
    public list<wrapaccount> wrapaccountlist{get;set;}
    public list<account> selectedaccounts{get;set;}
    
    public accountwrappercontroller(){
        if(wrapaccountlist==NULL){
            wrapaccountlist=new list<wrapaccount>();
            for (account a:[select id,name,phone,billingcity,website FROM account limit 20]){
                wrapaccountlist.add(new wrapaccount(a));}
        }
        
    }
    
    public void processselected(){
        selectedaccounts=new list<account>();
        for(wrapaccount wrapaccountobj:wrapaccountlist){
            if(wrapaccountobj.selected==true){
                selectedaccounts.add(wrapaccountobj.acc);
                    }
        }
    }
}