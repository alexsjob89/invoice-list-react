
import React,{useState} from 'react';
import './App.css';
import InvoicesList from './InvoicesList';

function App() {
  const [invoices, setInvoices] = useState([
    {id: 1, company: "Apple", number: "INV001", amount: 100.0, paid: true},
    {id: 2, company: "Apple", number: "INV002", amount: 200.0, paid: false},
    {id: 3, company: "Apple", number: "INV003", amount: 300.0, paid: true},
    {id: 4, company: "Apple", number: "INV004", amount: 400.0, paid: true},
    {id: 5, company: "Apple", number: "INV005", amount: 500.0, paid: false},
    {id: 6, company: "Apple", number: "INV006", amount: 600.0, paid: true},
    {id: 7, company: "Apple", number: "INV007", amount: 700.0, paid: false},
    {id: 8, company: "Apple", number: "INV008", amount: 800.0, paid: true},
    {id: 9, company: "Apple", number: "INV009", amount: 900.0, paid: false},
   ])
  return (
    <div className="App">
<InvoicesList invoices={invoices} setInvoices={setInvoices}/>
    </div>
  );
}

export default App;
