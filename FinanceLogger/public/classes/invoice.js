var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        var _this = this;
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.format = function () {
            return _this.client + " owes \u20B9" + _this.amount + " for " + _this.details;
        };
    }
    ;
    return Invoice;
}());
export { Invoice };
