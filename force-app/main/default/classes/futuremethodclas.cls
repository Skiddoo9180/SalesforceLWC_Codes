public class futuremethodclas {
    public void syncworkready(){
        system.debug('geeting ready for work');
    }
    @future
    public static void asynccarrepaired(){
        system.debug('car being repaired');
        asynccleaning();
    }
    public void syncstudy(){
        system.debug('studying sfdc');
    }
    @future
    public static void asynccleaning(){
        system.debug('cleaning');
    }
    public void methodcall(){
        syncworkready();
        asynccarrepaired();
        syncstudy();
    }
}