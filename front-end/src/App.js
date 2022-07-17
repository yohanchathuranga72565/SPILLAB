import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './Components/NavBarComponent';
import HomeComponent from './Components/HomeComponent';
import SalesOrderComponent from './Components/SalesOrderComponent';
import { getInvoices, getClients, getStkItems, getOrderItems } from './Services/apiCall';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Context } from './Context/ContextComponent';

function App() {
  const [Invoices, setInvoices] = useState([]);
  const [Clients, setClients] = useState([]);
  const [StkItems, setStkItems] = useState([]);
  const [OrderItems, setOrderItems] = useState([]);
  const [editInvoice,setEditInvoice] = useState({});

  useEffect(() => {
    InvoiceData();
    ClientsData();
    StkItemsData();
    OrderItemData();
  });

  const InvoiceData = async () => {
    const response = await getInvoices();
    setInvoices(response);
  };

  const ClientsData = async () => {
    const response = await getClients();
    setClients(response);
  };

  const StkItemsData = async () => {
    const response = await getStkItems();
    setStkItems(response);
  };

  const OrderItemData = async () => {
    const response = await getOrderItems();
    setOrderItems(response);
  }

  return (
    <Context.Provider value={{ Invoices, Clients, StkItems, setInvoices, OrderItems}}>
      <div>
        <NavBarComponent />
      </div>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomeComponent setEditInvoice={setEditInvoice}/>} />
          <Route path="/addNew" element={<SalesOrderComponent  />} />
          <Route path="/editInvoice" element={<SalesOrderComponent editInvoice = {editInvoice} />} />
        </Routes>
      </div>
    </Context.Provider>

  );
}

export default App;
