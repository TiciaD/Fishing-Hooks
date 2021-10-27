import React from 'react'
import {Col, Card, Button} from 'react-bootstrap'

export default function ItemPage() {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../img/bait.svg" className="w-50"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
