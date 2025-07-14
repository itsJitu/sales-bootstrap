import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sales from './Components/Sales';
import First from './Components/First';
import SalesOrder from './Components/SalesOrder';
import AllSales from './Components/AllSales';

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
        element: <div>Customer Page</div>
      },
      {
        path: "/quotation",
        element: <div>Quotations Page</div>
      },
      {
        path: "/salesReport",
        element: <div>Sales Report Page</div>
      },
      {
        path: "/invoiceBills",
        element: <div>Invoices & Bills Page</div>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
