import React, {useState} from 'react';
import {Tab, Tabs} from 'react-bootstrap';

export default function Products() {
    function ControlledTabs() {
        const [key, setKey] = useState('home');

        return (
            <Tabs id="controlled-tab-example"
                activeKey={key}
                onSelect={
                    (k) => setKey(k)
                }
                className="mb-3">
                <Tab eventKey="home" title="Home">
                    <p>Hello</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>Hello</p>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <p>Hello</p>
                </Tab>
            </Tabs>
        );
    }
    return (
        <div>
            <ControlledTabs/>
        </div>
    )
}
