export default class Quote {
    constructor(data) {
        console.log("Hello quote data", data)
        this.quote = data.quote.body
    }
}