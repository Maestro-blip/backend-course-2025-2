const { URL } = require("url");


const currency = "USD";
const date_from = "20220707";
const date_to   = "20220719";

const myUrl = new URL("https://bank.gov.ua/NBU_Exchange/exchange_site");

myUrl.searchParams.append("valcode", currency);
myUrl.searchParams.append("start", date_from);
myUrl.searchParams.append("end", date_to);
myUrl.searchParams.append("json", "");

console.log(myUrl.toString());