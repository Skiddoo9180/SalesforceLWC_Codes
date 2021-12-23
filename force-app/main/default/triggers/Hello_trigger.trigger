trigger Hello_trigger on Account (before insert,after update) {
    system.debug('hello trigger');
}