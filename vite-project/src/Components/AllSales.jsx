import { useState } from "react";
import "./AllSales.css";
import { LuSquarePlus } from "react-icons/lu";
import { IoIosPrint } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

function Sales() {
  // Mock data instead of backend calls
  const [invoiceData] = useState([
    {
      id: 1,
      invoiceno: "INV-001",
      productName: "Laptop",
      customerName: "John Doe",
      invoicedate: "2024-01-15",
      payAmout: 1200,
      dueAmount: 0,
      status: "Completed",
      invoiceDueDate: "2024-01-30",
    },
    {
      id: 2,
      invoiceno: "INV-002",
      productName: "Mouse",
      customerName: "Jane Smith",
      invoicedate: "2024-01-16",
      payAmout: 25,
      dueAmount: 5,
      status: "Pending",
      invoiceDueDate: "2024-01-31",
    },
    {
      id: 3,
      invoiceno: "INV-003",
      productName: "Keyboard",
      customerName: "Bob Johnson",
      invoicedate: "2024-01-17",
      payAmout: 80,
      dueAmount: 0,
      status: "Completed",
      invoiceDueDate: "2024-02-01",
    },
    {
      id: 4,
      invoiceno: "INV-004",
      productName: "Monitor",
      customerName: "Alice Brown",
      invoicedate: "2024-01-18",
      payAmout: 300,
      dueAmount: 50,
      status: "Pending",
      invoiceDueDate: "2024-02-02",
    },
  ]);

  const [costumerData] = useState([
    { id: 1, customerFullName: "John Doe", CustomerAddress: "123 Main St" },
    { id: 2, customerFullName: "Jane Smith", CustomerAddress: "456 Oak Ave" },
    { id: 3, customerFullName: "Bob Johnson", CustomerAddress: "789 Pine Rd" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "completed";
      case "Pending":
        return "pending";
      default:
        return "default";
    }
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = invoiceData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(invoiceData.length / itemsPerPage);

  return (
    <div className="sale">
      <div className="navbar">
        <p>All sales</p>
        <div className="icon-link">
          <div className="pluse-icon">
            <LuSquarePlus /> <span>Create Order</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="cost">
        <select className="name">
          {costumerData.map((costumer) => (
            <option key={costumer.id}>
              {costumer.customerFullName} - {costumer.CustomerAddress}
            </option>
          ))}
        </select>

        <select className="days">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
        <select className="days">
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Sales Table */}
      <div className="table-container">
        <table className="sales-table">
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Invoice Date</th>
              <th>Paid Amount</th>
              <th>Due Amount</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((invoice) => (
              <tr key={invoice.id} style={{backgroundColor: "white"}}>
                <td>{invoice.invoiceno}</td>
                <td>{invoice.productName}</td>
                <td>{invoice.customerName}</td>
                <td>{invoice.invoicedate}</td>
                <td>${invoice.payAmout}</td>
                <td>${invoice.dueAmount}</td>
                <td>
                  <span className={`status ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
                <td>{invoice.invoiceDueDate}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn print">
                      <IoIosPrint />
                    </button>
                    <button className="action-btn view">
                      <FaEye />
                    </button>
                    <button className="action-btn edit">
                      <MdEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination inside table-container */}
        <div className="pagination">
          <div>
            <span>result Per Page</span>
          </div>
          <button
            className="page-btn"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack style={{color: "#007AFF"}}/>
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="page-btn"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdArrowForwardIos style={{color: "#007AFF"}}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sales;
