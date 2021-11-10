import React, {useState, useContext} from 'react';
import {Tab, Tabs, Container, Row} from 'react-bootstrap';
import Item from '../Components/Item';
import {AppContext} from '../App';
import './Products.css';

export default function Products() {
    const products = useContext(AppContext)
    const filteredAccessories = products.items.filter((item) => item.type === "accessory" );
    const filteredTools = products.items.filter((item) => item.type === "tool" );

    function ControlledTabs() {
        const [key, setKey] = useState('All');

        return (
            <Tabs id="controlled-tab-example"
                activeKey={key}
                onSelect={
                    (k) => setKey(k)
                }
                className="mb-3">
                <Tab eventKey="All" title="All Items">
                    <Row className="g-2">
                    {products.items.map((item) => (
                        <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        description={item.description}/>
                        ))
                    }
                    </Row>
                </Tab>
                <Tab eventKey="Accessories" title="Accessories">
                    <Row className="g-2">
                    {filteredAccessories.map((item) => (
                        <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        description={item.description}/>
                        ))
                    }
                    </Row>
                </Tab>
                <Tab eventKey="Tools" title="Tools">
                    <Row className="g-2">
                    {filteredTools.map((item) => (
                        <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        description={item.description}/>
                        ))
                    }
                    </Row>
                </Tab>
            </Tabs>
        );
    }
    return (
        <Container className="mt-4 shadow-lg p-3 mb-5 bg-body rounded">
            <ControlledTabs/>
        </Container>
    )
}
