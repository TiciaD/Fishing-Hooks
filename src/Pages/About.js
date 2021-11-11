import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

export default function About() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="m-5">
                        <Card className="shadow-sm p-3 mb-5 bg-body rounded mx-auto" body>We sell fishing stuff!</Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
