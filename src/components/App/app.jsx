import React, { Component } from 'react';
import { Row, Container, Col } from "reactstrap";

import Nav from "../Navbar/Nav";
import Header from "../Header/Header";
import Product from "../Product/Product";

class App extends Component {
    render() {
        return (
            <Row id="main">
                <Nav/>
                <Header/>
                <Product />
            </Row>
        );
    }
}

export default App;