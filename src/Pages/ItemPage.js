import React from 'react';
import Item from '../Components/Item';
import {Container, Row, Col} from 'react-bootstrap';

export default function ItemPage() {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        <Col>
          <Item />
        </Col>
      </Row>
    </Container>
  )
}

