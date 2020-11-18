import React, { Fragment, Component }from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Title from '../components/title'
import Button from 'react-bootstrap/Button'
import Image2 from '../img/peluqueria2.jpg'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import axios from "axios";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
            KingBoo
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default class Proveedor extends Component{
  constructor(props){
    super(props);
    this.state={
      datos:[],
    };
  }
  componentDidMount() {
    console.log("Im in comp")
    fetch('https://kingboooback.herokuapp.com/provider/'+localStorage.getItem("provider"))
        .then(response => response.json())
        .then(result=>{
          this.setState({
            datos : result,
          });
          console.log(this.state.datos);
        })
  }
  render(){
    //this.componentDidMount();
    var dato = this.state.datos;
    var lista = this.state.datos.services;
    //console.log(lista);
    var serv = [];
    for(var value in lista){
      //console.log(lista[value]);
      serv.push(lista[value]);
    }
    //var serv = JSON.stringify(dato.services)
    console.log(serv);
    return (
        <Fragment>
            <Title hasMargin={false} pageTitle="Salon De Belleza" />
            <br></br>
            <div>
                <h1>
                  {dato.providerName}
                </h1>
                <div className="card reserv padding-60px">
                    <div className="lista-datos">
                        <span><h3>Descripción: </h3></span>
                        <label>{dato.description}</label>
                        <br></br>
                        <li>
                        <span>Dirección:</span>{dato.address}
                        </li>
                        <br></br>
                        <li>
                        <span>Cupo por Turno:</span>{dato.capacity}
                        </li>
                        <br></br>
                        <div>
                            <TableContainer component={Paper} >
                                <Table size="medium" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell ><span>Servicios</span></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {serv.map((servicios, index) => (
                                        <TableRow key={index}>
                                            <TableCell >
                                            {servicios}
                                            </TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>




                                </Table>
                            </TableContainer>
                        </div>
                        <br></br>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Button className="btn btn-primary" href="/reservauser"> ¡Haz tu reserva ahora! </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <img src={Image2} alt={dato.providerName}></img>
                </div>
            </div>
            <p></p>
            <Copyright></Copyright>
            <br></br>
        </Fragment>
    );
  }
}

