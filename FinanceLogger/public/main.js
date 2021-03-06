import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// Target the form element
var form = document.querySelector(".new-item-form");
// Target the input fields
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// Target the template
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
