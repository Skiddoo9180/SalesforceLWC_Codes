import { LightningElement } from 'lwc';
const BOOK_URL='https://www.googleapis.com/books/v1/volumes?q='

export default class BookApp extends LightningElement 
{
    key='mark'
    books
    timer
    connectedCallback()
    {
        this.fetchBookData()
    }
    
    fetchBookData()
    {
        fetch(BOOK_URL+this.key)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.books = data
        })
        .catch(error=>console.error(error))
    }

    fetchBookHandler(event)
    {
        this.key=event.target.value
        window.clearTimeout(this.timer)
        this.timer=setTimeout(()=>{this.fetchBookData()},2000)
    }
}