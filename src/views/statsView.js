import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Estadisticas from '../components/estadisticas';


export default class statsView extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Estadisticas></Estadisticas>
                </Container>
            </div>

        )
    }
}
