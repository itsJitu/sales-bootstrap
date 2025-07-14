import React, { useState } from "react";
import "./Customer.css";
import { FaEye, FaEdit } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";

const mockCustomers = [
  {
    id: 1,
    name: "Customer 01",
    sku: "SKU",
    phone: "98765 43210",
    email: "--",
    total: "2292",
    due: "--",
  },
  {
    id: 2,
    name: "Customer 01",
    sku: "SKU",
    phone: "98765 43210",
    email: "customer01@gmail.com",
    total: "2292",
    due: "--",
  },
  {
    id: 3,
    name: "Customer 01",
    sku: "SKU",
    phone: "98765 43210",
    email: "--",
    total: "2292",
    due: "987",
  },
  {
    id: 4,
    name: "Customer 01",
    sku: "SKU",
    phone: "98765 43210",
    email: "--",
    total: "2292",
    due: "--",
  },
  {
    id: 5,
    name: "Customer 01",
    sku: "SKU",
    phone: "98765 43210",
    email: "customer05@gmail.com",
    total: "2292",
    due: "22",
  },
  {
    id: 6,
    name: "Customer 01",
    sku: "SKU",
    phone: "98765 43210",
    email: "--",
    total: "2292",
    due: "--",
  },
  {
    id: 7,
    name: "Customer 01",
    sku: "SKU",
    phone: "98765 43210",
    email: "--",
    total: "2292",
    due: "--",
  },
];

function Customer() {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("Last 7 Days");
  const [statusFilter, setStatusFilter] = useState("Completed");
  const [page, setPage] = useState(1);

  // Pagination logic
  const itemsPerPage = 7;
  const totalPages = 3;
  const paginated = mockCustomers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="customer-main">
      <div className="customer-header">
        <span>Customer Lists</span>
        <button className="create-order-btn">
          <span style={{ fontSize: 18, fontWeight: "bold", marginRight: 6 }}>+</span>
          Create Order
        </button>
      </div>
      <div className="customer-filters">
        <select className="customer-select">
          <option>Aman Kumar - Rajendra Chowk</option>
        </select>
        <select className="customer-days" value={dateFilter} onChange={e => setDateFilter(e.target.value)}>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
        <select className="customer-status" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>Completed</option>
          <option>Pending</option>
          <option>All Status</option>
        </select>
      </div>
      <div className="customer-table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th></th>
              <th>Customer name</th>
              <th>Phone No.</th>
              <th>Email id</th>
              <th>Total Amount</th>
              <th>Due Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((c, idx) => (
              <tr key={c.id} className={idx === 0 ? "selected-row" : ""}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <span className="customer-link">{c.name}</span>
                  <br />
                  <span className="customer-sku">({c.sku})</span>
                </td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
                <td>$ {c.total}/-</td>
                <td>{c.due === "--" ? "--" : `$ ${c.due}/-`}</td>
                <td>
                  <button className="action-btn"><IoIosPrint /></button>
                  <button className="action-btn"><FaEye /></button>
                  <button className="action-btn"><FaEdit /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="customer-pagination">
          <span>Result Per page</span>
          <select>
            <option>10</option>
          </select>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>{'<'}</button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={page === p ? "active" : ""}
              onClick={() => setPage(p)}
            >
              {p.toString().padStart(2, "0")}
            </button>
          ))}
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default Customer;
