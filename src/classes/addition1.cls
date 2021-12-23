public class addition1 {
    public integer no1 ;
     public integer no2;  //or we can use @testvisible ->this is an access modifier
    public integer sum;
    public integer add(){
        sum=no1+no2;
        system.debug('the sum is -> '+sum);
        return sum;
    }
    
    public void checkstring(string name){
        if(name==null){
            name='satyam';
        }
            
    }
}