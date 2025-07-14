import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sales from './Components/Sales';
import First from './Components/First';
import SalesOrder from './Components/SalesOrder';
import AllSales from './Components/AllSales';
import Quotations from './Components/Quotations';
import Customer from './Components/Customer';
import InvoicesBills from './Components/InvoiceBills';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        path: "/",
        element: <Sales />
      },
      {
        path: "/createOrder",
        element: <SalesOrder />
      },
      {
        path: "/salesOrder",
        element: <SalesOrder />
      },
      {
        path: "/allSales",
        element: <AllSales />
      },
      {
        path: "/customer",
        element: <Customer />
      },
      {
        path: "/quotation",
        element: <Quotations />
      },
      {
        path: "/invoiceBills",
        element: <InvoicesBills />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
