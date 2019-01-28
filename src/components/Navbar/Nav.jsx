import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';


const List =[
    {id:1, name:"Home"},
    {id:2, name:"Mountaineering Equipment"},
    {id:3, name:"Tools"},
    {id:4, name:"Delivery"},
    {id:5, name:"Returns"},
    {id:6, name:"Contact US"}
];

class Nav extends Component {
        
    render() {
      var  list = List.map((i,index) =>{
            return(
                <li id={i.id} key={index}><a href="#">{i.name}</a></li>
            )
        });
        return (
            <Col sm="12" style={{ margin: 0, padding: 0 }} md={{ size: 2, offset: 0, order: 1 }} lg="2" className="navigation">
                <Row>
                    <Col style={{ margin: 0, padding: 0 }} sm="12" md="12" lg="12">
                        <div className="logo"><a href="#">Ecogos</a></div>
                        <div className="shopping-cart-widget">
                            <div className="cart-sum">
                                <a href="#">
                                    Cart
										<span id="cart_total">
                                        0 for
										<span>$0.00</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="input-search">
                            <input type="search" ></input>
                            <button type="button"><i className="fa fa-search"></i></button>
                        </div>
                        <div className="navs">
                            <ul>
                                <select>
                                <option>Us Dollar</option>
                                <option>Ruppees</option>
                                <option>Dirham </option>
                                </select>
                                {list}
                            </ul>
                            <ol>
                                <li><a href="#">Log In</a></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Wishlist</a></li>
                            </ol>
                        </div>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Nav;