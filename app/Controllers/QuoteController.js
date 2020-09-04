import { ProxyState } from "../AppState.js"
import quoteService from "../Services/QuoteService.js"
//TODO Create methods for constructor, and rendering the quote to the page

function _drawQuote() {
    console.log("Quote here", ProxyState.quote);
    document.getElementById("quotes").innerHTML = `${ProxyState.quote.quote}`
}

export default class QuoteController {
    constructor() {
        ProxyState.on("quote", _drawQuote)
        this.getQuote()
    }

    getQuote() {
        try {
            quoteService.getQuote()
        }
        catch (e) {
            console.error(e)
        }
    }
}