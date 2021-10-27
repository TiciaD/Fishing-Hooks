import React, {useState} from 'react';
import {Tab, Tabs, Container} from 'react-bootstrap';
import './Products.css';

export default function Products() {
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
                    <p>All Items</p>
                </Tab>
                <Tab eventKey="Accessories" title="Accessories">
                    <p>Only Accessories</p>
                </Tab>
                <Tab eventKey="Tools" title="Tools">
                    <p>Only Tools</p>
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
