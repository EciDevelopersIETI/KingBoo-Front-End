import React, { Component, Fragment } from 'react';
import Title from "./title";
import Header from "./header";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Copyright from '../components/copyright';
import {deleteReserva} from './../api/deleteReserva';

export class MisReservas extends Component{
  constructor(props){
    super(props);
    this.handleCancelar = this.handleCancelar.bind(this);
    this.email = localStorage.getItem('user');
    this.state={
      data:[],
    };
  }

  componentDidMount() {
    fetch('https://kingboooback.herokuapp.com/reservas/activeuser/'+ this.email)
        .then(response => response.json())
        .then(result=>{
          this.setState({
            data : result,
          });
          console.log(result);
          localStorage.setItem("reservas",JSON.stringify(result));
        })
  }

  handleCancelar(e){
    e.preventDefault();
    console.log(e.target.id);

    const deleteres ={

        reservaId: e.target.id,

    }
    deleteReserva(deleteres);

  };

  render(){

    const lista = this.state.data.map((reserva) => {
      return (
        <form  id={reserva.reservaId}  onSubmit={this.handleCancelar} >
          <div className="card reserv padding-60px">
            <div className="lista-datos">
              <h2>
                <span>{reserva.provider.providerName}</span>
              </h2>
              <label>{reserva.provider.description}</label>
              <br></br>
              <li>
              <span>ID Reserva:</span> <label id="reservaId" value={reserva.reservaId} >{reserva.reservaId}</label>
              </li>
              <br></br>
              <li>
                <span>Dirección:</span> {reserva.provider.address}
              </li>
              <br></br>
              <div>
                <TableContainer component={Paper} >
                  <Table size="medium" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell ><span>Servicio</span></TableCell>
                        <TableCell ><span>Fecha y hora de reserva</span></TableCell>
                        <TableCell ><span>Cancelar reserva</span></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell >
                            {reserva.servicios}
                          </TableCell>
                          <TableCell >
                            {reserva.fecha} - {reserva.hora}
                          </TableCell>
                          <TableCell>
                            <button type="submit" variant="contained"  className="btn btn-primary">Cancelar reserva</button>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <img src={reserva.provider.provImgUrl} width="300"></img>
          </div>
        </form>
      );
    });
    if(this.state.data.length==0){
      console.log("Hola, no hay nada men!")
      return (
        <Fragment>
          <h2>
            No tiene ninguna reserva activa
          </h2>
          <p></p>
          <Copyright></Copyright>
          <p></p>
        </Fragment>
      );
    }else{
      return (
        <Fragment>
          <Title hasMargin={false} pageTitle="Mis Reservas" />
          <div className="mt-5">
            {lista}
          </div>
          <p></p>
          <Copyright></Copyright>
          <p></p>
        </Fragment>
      );
    }

  };
}
