public class sampleapexclass {
    public integer i=10;
    public integer j=10000;
    
    private integer doaddition(){
        integer r=i+j;
        i=i+j+r;
        system.debug('value of r is .........'+r);
        return i;
    }
    /*system.debug('value of i is--->>'+i);*/
    public static void myvoidmethod(){
        system.debug('this is my void merthod');
    }
    public integer submethodclass(integer a, integer b)
    {
        integer c=a-b;
        system.debug('The valueeeess is ----->>>>'+c);
        return c;
    }    
}