@istest
public class testaddition {

    @istest
    static void testpositiveaddition(){
        addition1 add=new addition1();
        add.no1=10;
        add.no2=20;
        integer result=add.add();
        system.assertequals(30,result);
    }
    
    @istest
    static void testnegativeaddition(){
        addition1 add=new addition1();
        add.no1=20;
        add.no2=20;
        integer result=add.add();
        system.assertnotequals(30,result,'work fine');
    }
    @istest
    static void testcheckstring(){
        addition1 add=new addition1();
        add.checkstring(NULL);
    }
}