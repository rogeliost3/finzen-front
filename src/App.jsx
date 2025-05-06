//IMPORTS DEL PRIMER SISTEMA USADO
// import { useState, useEffect } from 'react'; //librerias externas
// import { login } from "./utils/api/auth.js";
// import Auth from ".components/auth/Auth";
// import { removeToken, saveToken } from './utils/localStorage';
// import TransactionList from './components/transactionList/TransactionList.jsx';
// import BudgetList from './components/budget/BudgetList.jsx';
// import {budgets, transactions} from './utils/data.js';
// import './App.css';

//IMPORTS DEL SEGUNDO SISTEMA USADO CON ROUTECHANGE
// import { useEffect, useState } from 'react';
// import Navbar from './components/navbar/Navbar';
// import ProductList from './pages/productList/ProductList';
// import StandList from './pages/standList/StandList';
// import Auth from './components/auth/Auth';
// import RouteContext from './context/RouteContext';
// import { AuthProvider } from './context/AuthContext';
// import './App.css'
// import Greeting from './components/greeting/Greeting';

function App() {

// PRIMER SISTEMA USADO, MAS PRIMITIVO. SE LLAMAN A LOS COMPONENTES DIRECTAMENTE
  /*const [budgets, setBudgets] = useState([]); // Ponemos un array vacio por defecto para que el map no falle

  useEffect(()=>{
    //useEffect no es async, no espera a que se resuelva handleFetchData
    //Si queremos que espere a que se resuelva, tenemos que ponerlo dentro de handleFetchData, despues del fetchData
    handleFetchData();
  },[]);

  const handleFetchData = async() => {
    const data= await fetchData("/budget/report/2025");
    setBudgets(data);
  }

  return (
    <>
      <BudgetList budgets={budgets}/>
      <TransactionList transactions={transactions} />}
    </>
  )*/

//SEGUNDO SISTEMA USADO. SE USA EL CAMBIO DE RUTA PARA LLAMAR A LOS COMPONENTES
    /*const [route, setRoute] = useState("home");

    const handleRouteChange = (newRoute) => {
      setRoute(newRoute);
    }
    const routes = {
      home: <h1>Merk2</h1>,
      stand: <StandList />,
      product: <ProductList />,
      login: <Auth />
    }
    return (
      <>
        <RouteContext value={{ route: route, onRouteChange: handleRouteChange }} >
          <AuthProvider>
            <Navbar />
            <Greeting />
            {routes[route]}
          </AuthProvider>
        </RouteContext>
      </>
    )*/

// TERCER SISTEMA, SE USA RouterProvider+routes.jsx. YA NO USAMOS APP.JSX SINO ROUTES.JSX
}

export default App;
