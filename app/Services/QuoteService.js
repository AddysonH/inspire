import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";

//TODO create methods to retrieve data and update the State
class QuoteService {
    async getQuote() {
        console.log("Here is the quote");
        let res = await api.get('quotes');
        ProxyState.quote = new Quote(res.data)
    }
}

const quoteService = new QuoteService();
export default quoteService;