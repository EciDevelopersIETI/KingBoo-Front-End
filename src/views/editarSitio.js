import React, { Component } from 'react';
import { Container } from 'reactstrap';
import EditarRegistro from '../components/editarRegistro';




export default class crearSitio extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                        <EditarRegistro></EditarRegistro>
                </Container>
            </div>

        )
    }
}
