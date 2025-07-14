import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { LuBrickWall } from "react-icons/lu";
import "./sidebar.css";
import { Link } from "react-router-dom";

function First() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const [activeItem, setActiveItem] = useState(null); // new state

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "15px", backgroundColor: '#F5F6FA', padding: '10px 10px'}}>
        <div style={{ width: "20%", backgroundColor:'white' }}>
          <div className="sidebar" onClick={handleIconClick}>
            <Link to="/" className="sidebar-content">
              <LuBrickWall className="brick-icon" />
              <span>sales</span>
            </Link>

            <IoIosArrowForward
              className={showDropdown ? "arrow-icon rotate" : "arrow-icon"}
            />
          </div>
          {showDropdown && (
            <div className="dropdown">
              <ul style={{ listStyle: "none", paddingLeft: 20 }}>
                


                <li
                  className={
                    activeItem === "sales"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("sales")}
                >
                  <Link to="/allSales" className="link">
                    all Sales
                  </Link>
                </li>

                <li
                  className={
                    activeItem === "purchase"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("purchase")}
                >
                  <Link to="/customer" className="link">
                    Customer
                  </Link>
                </li>

                <li
                  className={
                    activeItem === "quotation"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("quotation")}
                >
                  <Link to="/quotation" className="link">
                    Quotations
                  </Link>
                </li>

                 <li
                  className={
                    activeItem === "salesReport"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("salesReport")}
                >
                  <Link to="/salesReport" className="link">
                    Sales Report
                  </Link>
                </li>


                <li
                  className={
                    activeItem === "financial"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("financial")}
                >
                  <Link to="/invoiceBills" className="link">
                    Invoices & Bills
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div style={{ width: "80%" }}>
         
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default First;