import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';


export default class copyright extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            <Link color="inherit" href="https://material-ui.com/">
                                KingBoo
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Col>
                </Row>
            </div>
        )
    }
}