import React from 'react'
import { Link } from 'react-router-dom';
import {useState } from 'react';
import "./Quotations.css";


function Quotations() {

   
     const [costumerData] = useState([
       { id: 1, customerFullName: "John Doe" },
       { id: 2, customerFullName: "Jane Smith" },
       { id: 3, customerFullName: "Bob Johnson" }
     ]);
     const [customerName, setCustomerName] = useState("");
     const [quotationDate, setQuotationDate] = useState("");
     const [validUntil, setValidUntil] = useState("");
     const [notes, setNotes] = useState("");
     const [selectedProducts, setSelectedProducts] = useState(new Set());
     const [produtsData, setProductsData] = useState([
       {
         id: 1,
         products: "Laptop",
         title: "Dell XPS 13",
         quantity: 2,
         price: 1200,
         tax: 60,
         discount: 50
       },
       {
         id: 2,
         products: "Mouse",
         title: "Wireless Mouse",
         quantity: 5,
         price: 25,
         tax: 2.5,
         discount: 5
       }
     ]);

     // Handle checkbox selection
     const handleProductSelection = (productId) => {
       const newSelected = new Set(selectedProducts);
       if (newSelected.has(productId)) {
         newSelected.delete(productId);
       } else {
         newSelected.add(productId);
       }
       setSelectedProducts(newSelected);
     };

     // Add new product
     const addNewProduct = () => {
       const newProduct = {
         id: Date.now(),
         products: "New Product",
         title: "Product Description",
         quantity: 1,
         price: 0,
         tax: 0,
         discount: 0
       };
       setProductsData([...produtsData, newProduct]);
     };

     // Update product data
     const updateProduct = (id, field, value) => {
       setProductsData(produtsData.map(product => 
         product.id === id ? { ...product, [field]: value } : product
       ));
     };

     // Remove selected products
     const removeSelectedProducts = () => {
       setProductsData(produtsData.filter(product => !selectedProducts.has(product.id)));
       setSelectedProducts(new Set());
     };

     // Form validation
     const isFormValid = () => {
       return customerName && quotationDate && validUntil && produtsData.length > 0;
     };

     // Handle form submission
     const handleSubmit = (action) => {
       if (!isFormValid()) {
         alert("Please fill in all required fields and add at least one product.");
         return;
       }
       
       const quotationData = {
         customerName,
         quotationDate,
         validUntil,
         notes,
         products: produtsData,
         subtotal,
         totalTax: tax,
         totalDiscount: totaldiscount,
         total,
         status: action === 'send' ? 'sent' : 'draft'
       };
       
       console.log('Quotation Data:', quotationData);
       alert(`Quotation ${action === 'send' ? 'sent' : 'saved as draft'} successfully!`);
     };

       const subtotal = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;

    const itemTotal = quantity * price;

    return sum + itemTotal;
  }, 0);

  const total = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    const tax = Number(item.tax) || 0;
    const discount = Number(item.discount) || 0;

    const itemTotal = (quantity * price + quantity * tax) - (quantity * discount);

    return sum + itemTotal;
  }, 0);

  
  const tax = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const tax = Number(item.tax) || 0;

    const totaltax = (quantity * tax);

    return sum + totaltax;
  }, 0);

  
  const totaldiscount = produtsData.reduce((sum, item) => {
    const quantity = Number(item.quantity) || 0;
    const discount = Number(item.discount) || 0;

    const totaldis = (quantity * discount);

    return sum + totaldis;
  }, 0);


  return (
     <div className="main">
        <div className="genrate">
          <p>Create New Quotations</p>
        </div>

        {/* Quotations section */}
        <div className="customer-details">
         

          <div className="invoice-nos">
            {/* Customer Selection */}
            <div className="inv-div">
              <span>Select Customer *</span>
               <select
              className="select"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            >
              <option value="">Select a customer</option>
              {costumerData.map((costumer) => (
                <option key={costumer.id} value={costumer.customerFullName}>
                  {costumer.customerFullName}
                </option>
              ))}
            </select>
            </div >  
          </div>

        
          <div className="invoice-nos">
              {/* Quotation Date */}
            <div className="inv-div">
                <span>Quotation Date *</span>
                <input 
                  className="select" 
                  type="date"
                  value={quotationDate}
                  onChange={(e) => setQuotationDate(e.target.value)}
                  required
                />
            </div>
            {/* Valid Until */}
            <div className="inv-div">
                <span>Valid Until *</span>
                <input 
                  className="select" 
                  type="date"
                  value={validUntil}
                  onChange={(e) => setValidUntil(e.target.value)}
                  required
                />
            </div>

          </div>

          {/* Add products */}
          <div className="add-products">
            <span> Add Products </span>
            {selectedProducts.size > 0 && (
              <button 
                onClick={removeSelectedProducts}
                className="remove-selected-btn"
              >
                Remove Selected ({selectedProducts.size})
              </button>
            )}
          </div>

          {/* products Details */}
       
          <div className="db-table">
         <table className="te">
          <thead className="tr-head">
            <tr className="table-rose">
              <th style={{ padding: "10px 30px", borderTopLeftRadius: "10px" }}>
                Product Name
              </th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Discount</th>
              <th style={{borderTopRightRadius: "10px"}}>Total Amount</th>
            </tr>
          </thead>
             <tbody >
            {produtsData.map((supplier) => (
              <tr key={supplier._id || supplier.id } style={{borderBottom: "1px solid gray"}}>
                <td style={{ padding: "10px 20px", display:'flex' }}>

                  <div style={{display:'flex', alignItems:'center', padding:'5px'}}>
                    <input 
                      type="checkbox" 
                      checked={selectedProducts.has(supplier.id)}
                      onChange={() => handleProductSelection(supplier.id)}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      value={supplier.products}
                      onChange={(e) => updateProduct(supplier.id, 'products', e.target.value)}
                      className="product-name-input"
                    />
                    <br></br>
                    <input
                      type="text"
                      value={supplier.title}
                      onChange={(e) => updateProduct(supplier.id, 'title', e.target.value)}
                      className="product-desc-input"
                      placeholder="Product description"
                    />
                  </div>

                </td>
                <td>
                  <input
                    type="number"
                    value={supplier.quantity}
                    onChange={(e) => updateProduct(supplier.id, 'quantity', Number(e.target.value))}
                    className="quantity-input"
                    min="1"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={supplier.price}
                    onChange={(e) => updateProduct(supplier.id, 'price', Number(e.target.value))}
                    className="price-input"
                    min="0"
                    step="0.01"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={supplier.tax}
                    onChange={(e) => updateProduct(supplier.id, 'tax', Number(e.target.value))}
                    className="tax-input"
                    min="0"
                    step="0.01"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={supplier.discount}
                    onChange={(e) => updateProduct(supplier.id, 'discount', Number(e.target.value))}
                    className="discount-input"
                    min="0"
                    step="0.01"
                  />
                </td>
                <td>
                  $
                  {supplier.quantity * supplier.price +
                    supplier.quantity * supplier.tax -
                    supplier.quantity * supplier.discount}
                </td>
              </tr>
            ))}
          </tbody>

          </table>
          </div>

          
          <p 
            style={{ color: " rgb(24, 138, 169)", cursor: "pointer" }} 
            onClick={addNewProduct}
            className="add-products-link"
          > 
            + Add products
          </p>

         <div >
            <p className="notes">Notes</p>
            <textarea 
              className="select-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Please review and approve the quotations."
            />
         </div>

         {/* Bill details table */}
     
        {/* Bill details table */}
        <div className="table-cont">
          <table>
            <thead className="bill-details">
              
              {/*Sub Total */}
              
              <tr>
                <td
                  className="subtotal"
                  style={{ width: "10%", textAlign: "right" }}
                >
                  Subtotal
                </td>
                <td className="amount" style={{ textAlign: "left" }}>
                  ${subtotal.toFixed(2)}
                </td>
              </tr>

              {/* Total Discount */}

              <tr>
                <td
                  className="subtotal"
                  style={{ width: "10%", textAlign: "right" }}
                >
                  Total Discount
                </td>
                <td className="amount" style={{ textAlign: "left" }}>
                  ${totaldiscount.toFixed(2)}
                </td>
              </tr>

              {/* Total Tax */}
              <tr>
                <td
                  className="subtotal"
                  style={{ width: "10%", textAlign: "right" }}
                >
                  Total tax
                </td>
                <td className="amount" style={{ textAlign: "left" }}>
                  ${tax.toFixed(2)}
                </td>
              </tr>
            </thead>
          </table>
        </div>

        {/* total table */}

        <div className="total-cont">
          <div className="total-amount">
            <div>
              <hr></hr>

              <div className="total-dis">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>


         <hr />


         {/* save & send */}

         <div className="button">
            <button 
              onClick={() => handleSubmit('draft')} 
              className="save-btn"
              disabled={!isFormValid()}
            > 
              Save as Draft
            </button>
             <button 
               onClick={() => handleSubmit('send')} 
               className="send-btn"
               disabled={!isFormValid()}
             > 
               Send
             </button>
         </div>

          
        </div>
     </div>
  )
}

export default Quotations