import React,{useState} from 'react';

function InvoicesList({invoices, setInvoices}) {

 const [showPaid, setShowPaid] = useState(true)
 const [showUnPaid, setShowUnPaid] = useState(true)
 const [selectedInvoices, setSelectedInvoices] = useState([]);

 const handlePaidChnage = () => {
   setShowPaid(!showPaid)
 }

 const handleUnPaidChnage = () => {
   setShowUnPaid(!showUnPaid)
 }

 const handleCheckboxChange = (invoiceId) => {
  if (selectedInvoices.includes(invoiceId)) {
    setSelectedInvoices(selectedInvoices.filter((id) => id !== invoiceId));
  } else {
    setSelectedInvoices([...selectedInvoices, invoiceId]);
  }
};

const handleDeleteSelected = () => {
 const updatedInvoices = invoices.filter(
   (invoice) => !selectedInvoices.includes(invoice.id)
 );
 setInvoices(updatedInvoices);
 setSelectedInvoices([]);
};





 const filteredInvoices = invoices
 ? invoices.filter(
     (invoice) =>
       (showPaid && invoice.paid) || (showUnPaid && !invoice.paid)
   )
 : [];


  return (
    <div className='invoicesList'>
<h1>Invoice List</h1>
<div className='checkboxes'>
  <label>
    <input
    type="checkbox"
    checked={showPaid}
    onChange={handlePaidChnage}
    />
    Show Paid
  </label>
  <label>
    <input
      type="checkbox"
      checked={showUnPaid}
      onChange={handleUnPaidChnage}
      />
      Show Unpaid
  </label>
</div>
{filteredInvoices.length > 0 ? (
 <div className='main-table'>
  <table className='invoice-table'>
    <thead>
      <th>Select</th>
      <th>Company</th>
      <th>Invoice Number</th>
      <th>Amount</th>
      <th>Status</th>
    </thead>
    <tbody className='table-body'>
      {filteredInvoices.map((invoice) => (
        <tr key={invoice.id} >
        <td>
        <input
           type="checkbox"
           checked={selectedInvoices.includes(invoice.id)}
           onChange={() => handleCheckboxChange(invoice.id)}/>
                    </td>
          <td>{invoice.company}</td>
          <td>£{invoice.amount}</td>
          <td>{invoice.number}</td>
          <td className={invoice.paid ? 'Paid ' : 'Unpaid '}>{invoice.paid ? 'Paid ' : 'Unpaid '}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <button
            disabled={selectedInvoices.length === 0}
            onClick={handleDeleteSelected}
           style={{
            fontSize:"18px",
            padding: "8px",
            margin: "20px",
            background: "none",
            borderRadius: "10px",
            backgroundColor:"rgba(0, 0, 0, 0.194)",
            border:"none",
            }}>
            Delete Selected
          </button>
          </div>
  ) : (
    <p>No invoices available</p>
  )}
    </div>
  )
}

export default InvoicesList