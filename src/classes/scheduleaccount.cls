public class scheduleaccount IMPLEMENTS SCHEDULABLE {
//imsert an account at some particular time
    public void execute(schedulablecontext sc){
        account a=new account(name='schedulable apex class');
        insert A;
    }
}
/*
 scheduleaccount obj=new scheduleaccount();
string str='15 15 08 * * ? *';
id myjobid=system.schedule('program scheduler',str,obj);*/

//select id,timetriggered from crontrigger where id=''