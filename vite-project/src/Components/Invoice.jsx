import { useState } from "react";
import "./Invoice.css";

function Invoice() {
  // Mock data instead of backend calls
  const [produtsData] = useState([
    {
      id: 1,
      products: "Laptop",
      title: "Dell XPS 13",
      quantity: 2,
      price: 1200,
      tax: 60,
      discount: 50
    },
    {
      id: 2,
      products: "Mouse",
      title: "Wireless Mouse",
      quantity: 5,
      price: 25,
      tax: 2.5,
      discount: 5
    }
  ]);
  const [costumerData] = useState([
    { id: 1, customerFullName: "John Doe" },
    { id: 2, customerFullName: "Jane Smith" },
    { id: 3, customerFullName: "Bob Johnson" }
  ]);
  const [customerName, setCustomerName] = useState("");
  const [invoiceno, setInvoiceno] = useState("");
  const [invoicedate, setInvoicedate] = useState("");
  const [invoiceDueDate, setInvoiceDueDate] = useState("");
  const [invoiceRef, setInvoiceRef] = useState("");
  const [notes, setNotes] = useState("");
  const [PayMethod, setPayMethod] = useState("");
  const [payAmout, setPaidAmount] = useState("");
  const [dueAmount, setDueAmount] = useState("");
  const [productName, setproductName] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Invoice saved successfully!");
    setInvoiceno("");
    setInvoicedate("");
    setInvoiceDueDate("");
    setInvoiceRef("");
    setNotes("");
    setPayMethod("");
    setPaidAmount("");
    setDueAmount("");
    setproductName("");
    setCustomerName("");
    setStatus("");
  };

  const subtotal = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    const itemTotal = quantity * price;
    return sum + itemTotal;
  }, 0);

  const total = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    const tax = Number(item.tax) || 0;
    const discount = Number(item.discount) || 0;
    const itemTotal = quantity * price + quantity * tax - quantity * discount;
    return sum + itemTotal;
  }, 0);

  const tax = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const tax = Number(item.tax) || 0;
    const totaltax = quantity * tax;
    return sum + totaltax;
  }, 0);

  const totaldiscount = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const discount = Number(item.discount) || 0;
    const totaldis = quantity * discount;
    return sum + totaldis;
  }, 0);

  return (
    <div className="main">
      <form action="" onSubmit={handleSubmit}>
        <div className="genrate">
          <p>Generate Invoices</p>
          {message && <p>{message}</p>}
        </div>
        <div className="customer-details">
          <div>
            <p> Select Customer </p>
            <select
              className="select"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            >
              <option disabled>--select--</option>
              {costumerData.map((costumer) => (
                <option key={costumer.id} value={costumer.customerFullName}>
                  {costumer.customerFullName}
                </option>
              ))}
            </select>
          </div>
          <div className="invoice-details">
            <span>Invoice Details</span>
          </div>
          <div className="invoice-nos">
            <div className="inv-div">
              <span>Invoice Nos.</span>
              <input
                className="select"
                type="text"
                required
                value={invoiceno}
                onChange={(e) => setInvoiceno(e.target.value)}
              ></input>
            </div>
            <div className="inv-div">
              <span>Invoice Date</span>
              <input
                className="select"
                type="date"
                value={invoicedate}
                onChange={(e) => setInvoicedate(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="invoice-nos">
            <div className="inv-div">
              <span>Due Date</span>
              <input
                className="select"
                type="date"
                value={invoiceDueDate}
                onChange={(e) => setInvoiceDueDate(e.target.value)}
              ></input>
            </div>
            <div className="inv-div">
              <span>Reference Nos.</span>
              <input
                className="select"
                type="number"
                value={invoiceRef}
                onChange={(e) => setInvoiceRef(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="db-table">
            <table className="te">
              <thead className="tr-head">
                <tr className="table-rose">
                  <th style={{ padding: "10px 30px", borderTopLeftRadius: "10px" }}>
                    Product Name
                  </th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Tax</th>
                  <th>Discount</th>
                  <th style={{ borderTopRightRadius: "10px" }}>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {produtsData.map((supplier) => (
                  <tr key={supplier._id || supplier.id} style={{ borderBottom: "1px solid gray" }}>
                    <td style={{ padding: "10px 20px", display: "flex" }}>
                      <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
                        <input type="checkbox" />
                      </div>
                      <div>
                        <span style={{ color: "#007AFF" }}>{supplier.products}</span>
                        <br />
                        <span style={{ color: "gray", fontSize: "15px" }}>({supplier.title})</span>
                      </div>
                    </td>
                    <td>{supplier.quantity} pcs</td>
                    <td>${supplier.price}</td>
                    <td>${supplier.tax}</td>
                    <td>{supplier.discount}</td>
                    <td>
                      ${supplier.quantity * supplier.price + supplier.quantity * supplier.tax - supplier.quantity * supplier.discount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "#007AFF" }}> + Add products</p>
          {/* Add more invoice fields as needed */}
        </div>
      </form>
    </div>
  );
}

export default Invoice; 