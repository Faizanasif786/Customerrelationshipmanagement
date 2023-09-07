import React, { useState } from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './Invioce.css'

function InvoiceModal({ data, onClose }) {
  const [invoiceNumber, setInvoiceNumber] = useState(""); // State to store the invoice number

  const generatePdf = async () => {
    const content = document.getElementById("pdf-content");
    if (!content) {
      return;
    }

    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("invoice.pdf");
  };

  function getDayOfWeek(date) {
    if (!date) return ''; // Handle null or undefined date
    const options = { weekday: 'long' }; // 'long' will return the full day name
    const dayOfWeek = new Date(date).toLocaleDateString('en-US', options);
    return dayOfWeek;
  }

  const generateInvoiceNumber = () => {
    // You can generate the invoice number as per your requirements.
    // For simplicity, we will use a random number in this example.
    const randomInvoiceNumber = Math.floor(Math.random() * 100000);
    
    setInvoiceNumber(randomInvoiceNumber.toString()); // Set the generated invoice number to state
  };

  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>

      <br />

      <div className="modal-content">
        {data.map((invoice, index) => (
          <div id="pdf-content" key={index} className="modal-group">
            <div className="top">
              <h1>SELF - BIL+B2:K55LED INVOICE</h1>
            </div>
            <div>
              <div className="aft-heading">
                <div className="top-left">
              <p>For Deliveries Made During the week no 20</p>
              <p>Period 25/06/2023 to 01/07/2023</p>
                </div>
              <div className='invoice-no'>
                <p>Invoice Number: {invoiceNumber || generateInvoiceNumber()}</p>
                Site: {invoice.items[0].site}
              </div>
              </div>
           
              <div className='bill-from'>
                <h2>Bill From</h2>
                <h3>Transport ID: {invoice.transportId}</h3>
                <p>
                  Name: {invoice.items[0].drivefirstname} {invoice.items[0].drivelastname}
                  <br />
                </p>
              </div>
            </div>
            <div className="Bill-to-Ship-to">
              <div className="Bill-to">
                <h2>Bill To</h2>
                <p>Raina Ltd.</p>
                <p>Digital World Centre </p>
                <p>1 Lowry Plaza</p>
                <p>The Quays</p>
                <p>Salford</p>
                <p>Manchester</p>
                <p>M50 3UB</p>
                <p>VAT No. 266927460</p>
              </div>
              <div className="Bill-to">
                <h2>Ship To</h2>
                <p>DXM5</p>
                <p>Unit F2 , G & H </p>
                <p>Lomax Wy</p>
                <p>Bolton</p>
                <p>BL5 1FQ</p>
              </div>
            </div>
            <table className="invoice-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Days</th>
      <th>Service Type</th>
      <th>Unit Rate</th>
      <th>Byod</th>
      <th>Miles</th>
      <th>Mileage</th>
      <th>Additional Services</th>
      <th>Additional Rate</th>
      <th>Peak Incentive</th>
      <th>Total Amount</th> {/* Add a new header for Total Amount */}
    </tr>
  </thead>
  <tbody>
    {invoice.items.map((item, itemIndex) => {
      // Remove currency symbol and non-numeric characters from unitrate and brate
      const unitRate = item.unitrate ? parseFloat(item.unitrate.replace(/[^0-9.]/g, '')) || 0 : 0;
      const additionalRate = item.brate ? parseFloat(item.brate.replace(/[^0-9.]/g, '')) || 0 : 0;
      const totalAmount = unitRate + additionalRate;

      return (
        <tr key={itemIndex}>
          <td>{item.date}</td>
          <td>{getDayOfWeek(item.date)}</td>
          <td>{item.services}</td>
          <td>{item.unitrate}</td>
          <td>{item.brate}</td>
          <td>{item.miles}</td>
          <td>{item.mileage}</td>
          <td>{item.addtionalServices}</td>
          <td>{item.urate}</td>
          <td>{item.peakincentive}</td>
          <td>{totalAmount.toFixed(2)}</td> {/* Display the calculated Total Amount with 2 decimal places */}
        </tr>
      );
    })}
  </tbody>
</table>

            <table className="deduction-table">
                <thead>
                  <th>Deduction</th>
                  <th>Amount</th>
                  <th>Partially</th>
                  <th>Vat 20%</th>
                  <th>Total</th>
                </thead>
                <tbody >
                {invoice.items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    
                    <td>{item.driverdeductionservices}</td>
                    <td>{item.rate}</td>
                    <td>20%</td>
                   
                   <td>{item.vatnumber}</td> 

                  </tr>
                     ))}
                </tbody>
                
            </table>
            <button id="Generate-Invioce" onClick={generatePdf}>Generate Invoice</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvoiceModal;
