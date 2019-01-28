import React, { Component } from 'react';
import { Col, Row } from "reactstrap";


class Product extends Component {
    render() {
        
        return (
            <Col id="product" style={{ margin: 0, padding: 0 }} sm="12" md={{ size: 12, order: 3 }} lg="12">
                <Row>
                    <Col style={{ margin: 0, padding: 0, backgroundColor: "#1E1E0A", height: "170vh" }} sm={{ offset: 0, size: 2 }} md={{ offset: 0, size: 2 }} lg={{ offset: 0, size: 2 }}>
                    </Col>
                    <Col sm={{ offset: 0, size: 10 }} md={{ offset: 0, size: 10 }} lg={{ offset: 0, size: 10 }}>
                        <Row>
                            <Col className="features" sm="4" md="4">
                                <a href="#"><img className="img-responsive" src="./images/1.jpg"></img>Bags</a>
                            </Col>
                            <Col className="features" sm="4" md="4">
                                <a href="#"><img className="img-responsive" src="./images/2.jpg"></img>Bikes</a>
                            </Col>
                            <Col className="features" sm="4" md="4">
                                <a href="#"><img className="img-responsive" src="./images/3.jpg"></img>Sale</a>
                            </Col>
                            <Col className="products" sm="6" md="4" lg="4">
                                <div className="inner-pr">
                                    <img className="img-responsive" src="./images/a1.jpg"></img>
                                    <div className="text-center product-price">
                                    <a title="Universal travel knife" href="https://cyak.miiduu.com/universal-travel-knife">Universal travel knife</a><br></br>
                                        <span className="price" title="Price">
                                            <del>$26.00</del>
                                        </span>
                                        <span className="sep_line">&nbsp; | &nbsp;</span>
                                        <span className="price specialpricestyle" title="Special Price">$24.00</span>
                                    </div>
                                    <button type="button">View Dtails</button>
                                </div>
                            </Col>
                            <Col className="products" sm="6" md="4" lg="4">
                                <div className="inner-pr">
                                    <img className="img-responsive" src="./images/a2.jpg"></img>
                                    <div className="text-center product-price">
                                    <a title="Universal travel knife" href="https://cyak.miiduu.com/universal-travel-knife">Universal travel knife</a><br></br>
                                        <span className="price" title="Price">
                                            <del>$26.00</del>
                                        </span>
                                        <span className="sep_line">&nbsp; | &nbsp;</span>
                                        <span className="price specialpricestyle" title="Special Price">$24.00</span>
                                    </div>
                                    <button type="button">View Dtails</button>
                                </div>
                            </Col>
                            <Col className="products" sm="6" md="4" lg="4">
                                <div className="inner-pr">
                                    <img className="img-responsive" src="./images/a3.jpg"></img>
                                    <div className="text-center product-price">
                                    <a title="Universal travel knife" href="https://cyak.miiduu.com/universal-travel-knife">Universal travel knife</a><br></br>
                                        <span className="price" title="Price">
                                            <del>$26.00</del>
                                        </span>
                                        <span className="sep_line">&nbsp; | &nbsp;</span>
                                        <span className="price specialpricestyle" title="Special Price">$24.00</span>
                                    </div>
                                    <button type="button">View Dtails</button>
                                </div>
                            </Col>
                            <Col className="products" sm="6" md="4" lg="4">
                                <div className="inner-pr">
                                    <img className="img-responsive" src="./images/a4.jpg"></img>
                                    <div className="text-center product-price">
                                    <a title="Universal travel knife" href="https://cyak.miiduu.com/universal-travel-knife">Universal travel knife</a><br></br>
                                        <span className="price" title="Price">
                                            <del>$26.00</del>
                                        </span>
                                        <span className="sep_line">&nbsp; | &nbsp;</span>
                                        <span className="price specialpricestyle" title="Special Price">$24.00</span>
                                    </div>
                                    <button type="button">View Dtails</button>
                                </div>
                            </Col>
                            <Col className="products" sm="6" md="4" lg="4">
                                <div className="inner-pr">
                                    <img className="img-responsive" src="./images/a5.jpg"></img>
                                    <div className="text-center product-price">
                                    <a title="Universal travel knife" href="https://cyak.miiduu.com/universal-travel-knife">Universal travel knife</a><br></br>
                                        <span className="price" title="Price">
                                            <del>$26.00</del>
                                        </span>
                                        <span className="sep_line">&nbsp; | &nbsp;</span>
                                        <span className="price specialpricestyle" title="Special Price">$24.00</span>
                                    </div>
                                    <button type="button">View Dtails</button>
                                </div>
                            </Col>
                            <Col className="products" sm="6" md="4" lg="4">
                                <div className="inner-pr">
                                    <img className="img-responsive" src="./images/a6.jpg"></img>
                                    <div className="text-center product-price">
                                    <a title="Universal travel knife" href="https://cyak.miiduu.com/universal-travel-knife">Universal travel knife</a><br></br>
                                        <span className="price" title="Price">
                                            <del>$26.00</del>
                                        </span>
                                        <span className="sep_line">&nbsp; | &nbsp;</span>
                                        <span className="price specialpricestyle" title="Special Price">$24.00</span>
                                    </div>
                                    <button type="button">View Dtails</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Product;