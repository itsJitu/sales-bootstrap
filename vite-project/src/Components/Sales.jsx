import React from "react";
import "./Sales.css";
import { IoFilterOutline } from "react-icons/io5";
import { GoUpload } from "react-icons/go";
import { FaRegPlusSquare } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,x
} from "chart.js";

ChartJS.register(
  ArcElement,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const dummyData = [
  {
    id: 1,
    customerName: "Ram",
    Type: "wholesaler",
    totalSales: "$788.09",
    TopProducts: "Green Apple, New Mango , Coconut"
  },
  {
    id: 2,
    customerName: "Ram",
    Type: "wholeseler",
    totalSales: "$788.09",
    TopProducts: "Green Apple, New Mango , Coconut"
  },
  {
    id: 3,
    customerName: "Ram",
    Type: "wholeseler",
    totalSales: "$788.09",
    TopProducts: "Green Apple, New Mango , Coconut"
  },
  {
    id: 4,
    customerName: "Ram",
    Type: "wholeseler",
    totalSales: "$788.09",
    TopProducts: "Green Apple, New Mango , Coconut"
  }
]

function Sales() {
  // Data for Sales Overview (Line Chart)
  const salesData = {
    labels: [
      "12 Jun",
      "13 Jun",
      "14 Jun",
      "15 Jun",
      "16 Jun",
      "17 Jun",
      "18 Jun",
    ],
    datasets: [
      {
        label: "Sales",
        data: [2000, 2500, 4000, 4500, 3500, 3000, 2500],
        fill: true,
        backgroundColor: "rgba(0, 122, 255, 0.2)",
        borderColor: "rgba(0, 122, 255, 1)",
        tension: 0.4,
      },
    ],
  };

  // Chart options for responsiveness and aspect ratio
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { maxRotation: 0, minRotation: 0 } },
    },
  };

  // Data for Top Selling Categories (Doughnut Chart)
  const categoryData = {
    labels: ["Apple", "Apple", "Apple", "Apple", "Apple"],
    datasets: [
      {
        data: [30, 30, 30, 5, 5], // Adjusted to sum to 100%
        backgroundColor: [
          "#007AFF",
          "#4A90E2",
          "#7BB1FF",
          "#B3D4FF",
          "#DCEFFF",
        ],
        borderWidth: 6, // Add gap between segments
        borderColor: "#fff",
      },
    ],
  };

  // Doughnut chart options for spacing and size
  const doughnutOptions = {
    cutout: "70%", // Makes the ring thicker
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <>
      {/* main div */}
      <div className="container">
        {/* header */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/* search Bar */}
          <div className="sales-search">
            <input
              type="search"
              placeholder="search items here..."
              className="search-bar"
            />
            <IoFilterOutline />
          </div>

          {/* upload */}
          <div className="upload-icon">
            <GoUpload />
          </div>

          {/* link for second page */}
          <div className="order-box">
            <div className="icon-link">
              <Link to="/createOrder" className="pluse-icon">
                <FaRegPlusSquare /> <span>Create Order</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Boxes */}
        <div className="box-container">
          {/* box-1 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Total Sales</p>
                <p className="count">
                  <b className="bold">$45,87,445.99</b>
                </p>
              </div>
            </div>
            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span className="footer-text-color">
                  includes 1,250 completed sales orders.
                </span>
                <div>
                  <FaArrowRight
                    style={{ fontSize: "15px" }}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* box-2 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Sales Today</p>
                <p className="count">
                  <b className="bold">$5,344.09</b>
                </p>
              </div>
            </div>
            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span className="footer-text-color">
                  Peak sales between 11 AM - 2 PM.
                </span>
                <div>
                  <FaArrowRight
                    style={{ fontSize: "15px" }}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* box-3 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Sales This Month</p>
                <p className="count">
                  <b className="bold">$53,332.81</b>
                </p>
              </div>
            </div>
            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span className="footer-text-color">
                  Highest orders on 5th, 12th & 20th
                </span>
                <div>
                  <FaArrowRight
                    style={{ fontSize: "15px" }}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Box-4 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Total Returns</p>
                <p className="count">
                  <b className="bold">$5,33,729.62</b>
                </p>
              </div>
            </div>
            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span className="footer-text-color">
                  2.1% of total sales returned.
                </span>
                <div>
                  <FaArrowRight
                    style={{ fontSize: "15px" }}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* search, sort & download */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          {/* Search Dropdown */}
          <div style={{ width: "55%" }}>
            <select className="customer-search">
              <option value="Warehouse 01 (Noida)-- Ramesh Verma">
                Warehouse 01 (Noida)-- Ramesh Verma
              </option>
              <option value="Warehouse 01 (Noida)-- Ramesh Verma">
                Warehouse 01 (Noida)-- Ramesh Verma
              </option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div style={{ width: "20%" }}>
            <select className="sort">
              <option value="Last 7 Days">Last 7 Days</option>
            </select>
          </div>

          {/* Download Report */}
          <div style={{ width: "30%" }}>
            <div className="download">
              <span>Download Report</span>
              <GoDownload style={{ color: "#007AFF", fontSize: "20px" }} />
            </div>
          </div>
        </div>

        {/* graph, table & graph */}
        <div style={{ display: "flex", gap: "2%", width: "100%", boxSizing: "border-box", marginTop: "10px" }}>
          {/* Left side - Graphs and Table */}
          <div style={{ width: "59%" }}>
            {/* Line graph for Sales Overview */}
            <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  width: "100%",
                  minWidth: 320,
                  maxWidth: 700,
                  height: 320,
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "24px 24px 24px 24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  boxSizing: "border-box",
                  overflowX: "auto",
                }}
              >
                <h3>Sales Overview</h3>
                <div style={{ width: "100%", height: "220px" }}>
                  <Line
                    data={salesData}
                    options={lineOptions}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            {/* Doughnut graph for Top Selling Categories */}
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  margin: "8px 0",
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  boxSizing: "border-box",
                }}
              >
                {/* Header row: title and dropdown */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ margin: 0, fontSize: 18 }}>
                    Top Selling Categories
                  </span>
                  <select
                    style={{
                      width: "120px",
                      height: "32px",
                      borderRadius: "6px",
                      border: "1px solid #e0e0e0",
                      padding: "2px 8px",
                      background: "#f9f9f9",
                    }}
                  >
                    <option value="This Week">This Week</option>
                  </select>
                </div>

                {/* Divider */}
                <hr
                  style={{
                    border: "none",
                    borderTop: "2px solid #E0E0E0",
                    margin: "16px -20px 0 -20px",
                    width: "calc(100% + 40px)",
                  }}
                />

                {/* Chart and legend row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 260px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Doughnut
                      data={categoryData}
                      options={doughnutOptions}
                      style={{ maxWidth: "220px", maxHeight: "220px" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    {categoryData.labels.map((label, idx) => (
                      <div
                        key={idx}
                        style={{ alignItems: "center", marginBottom: "18px" }}
                      >
                        <input
                          type="checkbox"
                          checked
                          readOnly
                          style={{
                            accentColor:
                              categoryData.datasets[0].backgroundColor[idx],
                            marginRight: "8px",
                          }}
                        />
                        <span style={{ minWidth: 60, fontWeight: 500 }}>
                          {label}{" "}
                          <span style={{ color: "#888", fontWeight: 400 }}>
                            ({categoryData.datasets[0].data[idx]}%)
                          </span>
                        </span>
                        <div
                          style={{
                            flex: 1,
                            marginLeft: 12,
                            marginRight: 8,
                            background: "#eee",
                            borderRadius: 6,
                            height: 8,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: `${categoryData.datasets[0].data[idx]}%`,
                              background: `linear-gradient(90deg, ${categoryData.datasets[0].backgroundColor[idx]}, #007AFF)`,
                              height: "100%",
                              borderRadius: 6,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* table */}
            <div className="sales-table-container">
              <div className="sales-table-card">
                <span className="sales-table-title">Top 5 Customer</span>
                <table className="sales-table">
                  <thead className="sales-table-header">
                    <tr className="sales-table-header-row">
                      <th className="sales-table-header-cell">Customer name</th>
                      <th className="sales-table-header-cell">Type</th>
                      <th className="sales-table-header-cell">Total Sales</th>
                      <th className="sales-table-header-cell">Top products</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyData.map((items) => {
                      return (
                        <tr key={items.id} className="sales-table-body-row">
                          <td className="sales-table-body-cell customer-name">{items.customerName}</td>
                          <td className="sales-table-body-cell type">{items.Type}</td>
                          <td className="sales-table-body-cell sales">{items.totalSales}</td>
                          <td className="sales-table-body-cell products">{items.TopProducts}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right side - Best Seller */}
          <div style={{ width: "39%" }}>
            <div style={{ 
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              boxSizing: "border-box",
              marginTop: "10px"
            }}>
              <span style={{ fontSize: 18, fontWeight: 500, marginBottom: "16px", display: "block" }}>Bestseller</span>
              {[1,2].map((_, idx) => (
                <div key={idx} style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "18px 20px 16px 20px",
                  marginBottom: "16px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}>
                  <div style={{ fontWeight: 600, fontSize: 18, color: '#222', marginBottom: 2 }}>Green Apple</div>
                  <div style={{ color: '#888', fontSize: 14, marginBottom: 14 }}>
                    SKU - APP5844 <span style={{ fontSize: 18, verticalAlign: 'middle', margin: '0 6px' }}>•</span> 110 Kg left
                  </div>
                  <div style={{ background: '#f5f6fa', borderRadius: 8, padding: '10px 14px 8px 14px', marginBottom: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15, color: '#6B7280', marginBottom: 6 }}>
                      <span>Item in stocks</span>
                      <span style={{ color: '#007AFF', fontWeight: 500 }}>899 Kg Sold</span>
                    </div>
                    <div style={{ width: '100%', height: 8, background: '#e5e7eb', borderRadius: 6, overflow: 'hidden' }}>
                      <div style={{
                        width: '80%', // Example: 80% sold
                        height: '100%',
                        background: 'linear-gradient(90deg, #36d1f3 0%, #007AFF 100%)',
                        borderRadius: 6,
                        transition: 'width 0.3s',
                      }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
