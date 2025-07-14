import React, { useState } from "react";
import "./Customer.css";

function Customer() {
  const [produtsData] = useState([
    {
      id: 1,
      CustomerName: "Laptop",
      PhoneNo: 620583345,
      EmialId: "diwakarKumar0215@gmail.com",
      ToatalAmount: 1200,
      DueAmount:200,
    },
    {
      id: 1,
      CustomerName: "Laptop",
      PhoneNo: 620583345,
      EmialId: "diwakarKumar0215@gmail.com",
      ToatalAmount: 1200,
      DueAmount:200,
    }
  ]);

  const [costumerData] = useState([
    { id: 1, customerFullName: "Jitu Roy" },
    { id: 2, customerFullName: "Jane Smith" },
    { id: 3, customerFullName: "Bob Johnson" }
  ]);
  const [customerName, setCustomerName] = useState("");

  const [salesPersonData] = useState([
    { id: 1, salesMan: "Alice Brown" },
    { id: 2, salesMan: "Charlie Wilson" },
    { id: 3, salesMan: "Diana Davis" }
  ]);
  const [salesPerson, setsalesPerson] = useState("");
  const [PayMethod, setPayMethod] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState('Last 7 Days');
  const [statusFilter, setStatusFilter] = useState('Completed');

  // Filter customers by search term
  const filteredCustomers = produtsData.filter((customer) => {
    const term = searchTerm.toLowerCase();
    return (
      customer.CustomerName.toLowerCase().includes(term) ||
      String(customer.PhoneNo).includes(term) ||
      customer.EmialId.toLowerCase().includes(term)
    );
  });

  // Remove old subtotal, total, tax, and totaldiscount calculations since they don't apply to the new data structure

  return (
    <div className="main">
      <div className="genrate">
        <p>Customer List</p>
      </div>
      <div className="customer-details">
        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          <input
            type="search"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-bar"
            style={{ flex: 2, padding: '8px 12px', borderRadius: 5, border: '1px solid #c7cad5', outline: 'none' }}
          />
          <select
            className="days"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
            style={{ flex: 1, padding: '8px 12px', borderRadius: 5, border: '1px solid #c7cad5', outline: 'none' }}
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <select
            className="days"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            style={{ flex: 1, padding: '8px 12px', borderRadius: 5, border: '1px solid #c7cad5', outline: 'none' }}
          >
            <option>Completed</option>
            <option>Pending</option>
            <option>All Status</option>
          </select>
        </div>
        <div className="table-container">
          <table className="sales-table">
            <thead>
              <tr>
                <th style={{ padding: "10px 30px", borderTopLeftRadius: "10px" }}>
                  Customer Name
                </th>
                <th>Phone No.</th>
                <th>Email id</th>
                <th>Total Amount</th>
                <th>Due Amount</th>
                <th style={{ borderTopRightRadius: "10px" }}>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} style={{ borderBottom: "1px solid gray" }}>
                  <td>{customer.CustomerName}</td>
                  <td>{customer.PhoneNo}</td>
                  <td>{customer.EmialId}</td>
                  <td>${customer.ToatalAmount}</td>
                  <td>${customer.DueAmount}</td>
                  <td>${customer.ToatalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customer;
