public class simpleserversidecontroller {
    //use auraenabled to enable client and server side access to method
    @AuraEnabled
    public static string serverecho(string firstname){
        firstname+='SATYAm';
        return('hello from server, ' +firstname);
    }   
}