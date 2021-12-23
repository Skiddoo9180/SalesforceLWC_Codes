public class wireclasslwc{
    @auraenabled(cacheable=true)
    public static list<account> getaccountlist(){
        return[select id,name,type,rating from account limit 5];
    }
    }