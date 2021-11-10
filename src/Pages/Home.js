import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './Home.css';

function Home(props) {
    const productNav = () => {
        props.history.push('/products');
    };

  return (
  <div>
      <img src='/img/tree_background.jpg' className="img-fluid" alt="outdoors"/>
      <Container className="position-absolute top-50 start-50 translate-middle">
        <Row xs={1}
            md={2}
            className="g-3">
            <Col className="d-flex justify-content-center mt-5"
                xs={12}
                md={6}>
              <Card className="shadow-lg p-3 mb-5 bg-body rounded"
                  style={
                      {width: '18rem'}
              }>
                  <Card.Img variant="top" src="../img/baitbox_background.jpg"/>
                  <Card.Body>
                    <Button variant="dark" className="stretched-link" onClick={() => productNav()}>See Accessories</Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center mt-5"
              xs={12}
              md={6}>
              <Card className="shadow-lg p-3 mb-5 bg-body rounded"
                  style={
                      {width: '18rem'}
              }>
                  <Card.Img variant="top" src="../img/fishing_rods_background.jpg"/>
                  <Card.Body>
                    <Button variant="dark" className="stretched-link" onClick={() => productNav()}>See Tools</Button>
                  </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>
  </div>
  )
}

export default withRouter(Home);