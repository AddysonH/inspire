//TODO Create methods for constructor, and rendering the quote to the page
import quoteService from "../Services/QuoteService.js"
import { ProxyState } from "../AppState.js"

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
        catch (error) {
            console.error(error)
        }
    }
}