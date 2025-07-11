import React from "react";
import "./Sales.css";
import { IoFilterOutline } from "react-icons/io5";
import { GoUpload } from "react-icons/go";
import { FaRegPlusSquare } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { Link } from "react-router-dom";

function Sales() {
  return (
    <>
      {/* main div */}
      <div className="container">
        {/* header */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/*search Bar */}

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
              <Link to="/" className="pluse-icon">
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
                {/* <span>
                  <b>+62</b>
                </span> */}
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
                {/* <span>
                  <b>+62</b>
                </span> */}
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
          <div style={{ width: "20%" }}>
            <div className="download">
              <span>Download Report</span>
              <GoDownload style={{color: "#007AFF", fontSize: "20px"}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
