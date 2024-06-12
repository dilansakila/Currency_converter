var input_amount = document.getElementById("original-currency-amount");
var from_currency = document.getElementById("fr_currency");
var to_currency = document.gtElementById("to_currency");
var exchange_rate = document.getElementById("exchange-rate");
var exchange = document.getElementById("exchnge");
var output_amount = document.getElementById("output-text");
var output_from = document.getElementById("from");
var outpt_to = document.getElemetById("to");


exchange.addEventListener("click",()=>{
    [from_currency.vlue, to_currency.value] = [to_currency.value, from_currency.value];
    calculate();
})