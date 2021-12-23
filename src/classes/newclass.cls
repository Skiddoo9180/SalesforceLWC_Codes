global class newclass {
    protected integer i=10;
    account[] acclist=new list<account>{new account()};
        public static void method(){
            map<id,contact> m=new map<id,contact>([select id,lastname,firstname from contact limit 1]);
            system.debug('map-->  '+m);
            
        }
    
}