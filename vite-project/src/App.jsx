import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import InvoiceBills from './Components/InvoiceBills';
import Customer from './Components/Customer';
import First from './Components/First';
import AllSales from './Components/AllSales';
import Quotations from './Components/Quotations';
import Sales from './Components/Sales';
import SalesOrder from './Components/SalesOrder';
import Report from './Components/Report';

import './App.css'


const router = createBrowserRouter([
      {
        path: "/",
        element: <First />,

        children: [
          {
            index: true,
            element: <Sales />
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
          path: '/salesReport',
          element: <Report />
         },
         {
          path: "/quotation",
          element: <Quotations />
         },
          {
            path: "/invoiceBills",
            element: <InvoiceBills />
          } 
        ],
      }
    ]);

function App() {
 

  return <RouterProvider router = {router}/>;
 
}

export default App;
