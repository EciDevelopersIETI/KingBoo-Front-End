import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';
import SignUp from './components/signUp';
import Home from './components/home';
import Proveedor from './components/proveedor';
import Reserva from './components/reserva';
import SignUpShop from "./components/signUpShop";
import CrearSitio from "./views/crearSitio";
import ListaSitios from "./views/listaSitios";
import Categoria from "./views/categoria";
import ListadoReservas from "./components/listadoReservas";
import {ReservasEnSitio} from "./components/reservasEnSitio";
import {HomeUser} from "./components/homeUser";
import {CategoriaUser} from "./components/categoriaUser";
import {ProveedorUser} from "./components/proveedorUser";
import {ReservaUser} from "./components/reservaUser";
import EditarSitio from "./views/editarSitio";
import {MisReservas} from "./components/misReservas";
import OpcionesProveedor from "./components/opcionesProveedor";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {PrivateRoute} from "./PrivateRoute";
import {PrivateRoute2} from "./PrivateRoute2";

function App() {

  const LoginView = () => <Login />;
  const SignUpView = () => <SignUp />;
  const SignUpShopView = () => <SignUpShop />;
  const home = () => <Home />;
  const proveedor = () => <Proveedor />;
  const reserva = () => <Reserva />;
  const crearSitio = () => <CrearSitio/>;
  const listaSitios = () => <ListaSitios/>;
  const listadoReservas = () => <ListadoReservas/>;
  const reservasEnSitio = () => <ReservasEnSitio/>;
  const homeUser = () => <HomeUser/>;
  const categoriaUser = () => <CategoriaUser/>;
  const proveedorUser = () => <ProveedorUser/>;
  const reservaUser = () => <ReservaUser/>;
  const editarSitio = () => <EditarSitio/>;
  const misReservas = () => <MisReservas/>;
  const opcionesProveedor = () => <OpcionesProveedor/>;
  const categoria = () => <Categoria/>;			 

  return (
    <Router>
    <div className="App">
      <div>
        <Route exact path="/" component={home} />
        <Route exact path="/sign-up" component={SignUpView} />
        <Route exact path="/sign-up-provider" component={SignUpShopView} />
        <Route exact path="/login" component={LoginView} />
        <PrivateRoute exact path="/proveedor" component={proveedor} />
        <PrivateRoute exact path="/reserva" component={reserva} />
        <Route exact path="/nuevositio" component={crearSitio} />
        <Route exact path="/listasitios" component={listaSitios} />
        <PrivateRoute2 exact path="/listadoreservas" component={listadoReservas} />
        <PrivateRoute2 exact path="/reservasEnSitio" component={reservasEnSitio} />
        <PrivateRoute exact path="/homeuser" component={homeUser} />
        <PrivateRoute exact path="/categoriauser" component={categoriaUser} />
        <PrivateRoute exact path="/proveedoruser" component={proveedorUser} />
        <PrivateRoute exact path="/reservauser" component={reservaUser} />
        <PrivateRoute2 exact path="/editarsitio" component={editarSitio} />
        <PrivateRoute exact path="/misReservas" component={misReservas} />
        <PrivateRoute2 exact path="/opcionesProveedor" component={opcionesProveedor} />
        <PrivateRoute exact path="/categoria" component={categoria} />
      </div>
    </div>
  </Router>
  );
}

export default App;
