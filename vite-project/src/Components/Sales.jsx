import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { GoUpload } from "react-icons/go";

import { Link } from "react-router-dom";

function Sales() {
  return (
    <>
      {/* main div */}
      <div>
        {/* header */}
        <div style={{ display: "flex", backgroundColor: "white"}}>
          {/*search Bar */}
          <div>
            <input type="search" placeholder="search items here..."></input>
            <IoFilterOutline />
          </div>

          {/* upload */}
          <div>
            <GoUpload />
          </div>

          {/* link for second page */}
          <div>
            <Link to="/SalesOrder">Create Order</Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Sales;
