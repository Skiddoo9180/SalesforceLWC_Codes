public class mixeddmloperation {
    //dml on nonsetup object
    public static void insertaccount(){
        account a=new account(name='Mixed dml');
        insert a;       
        insertuser('satyam@gmail.com','saty','satyam@hgdhd.com','s');
        
    }
    //DML on setup object
    @future
    public static void insertuser(string uname,string al,string em,string lname){
        profile p =[select id from profile where name='standard user'];
        userrole r=[select id from userrole where name='coo'];
        user u =new user(alias=al,email=em,
                         emailencodingkey='utf-8',lastname=lname,
                         languagelocalekey='en_us',localesidkey='en_us',
                         profileid=p.id,userroleid=r.id,
                         timezonesidkey='america/los/angeles',
                         username=uname);
        insert u;
    }
}