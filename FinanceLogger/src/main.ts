import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';

import { HasFormatter } from './interfaces/HasFormatter.js';

// Target the form element
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Target the input fields
const type = document.querySelector("#type") as HTMLInputElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Target the template
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul); 

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, "start");
});