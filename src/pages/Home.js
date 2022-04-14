import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';


const Home = () => {

    

    return (
        <section>
            <div className='home'>
                <Row className="n-container primary-bg">
                    <Col lg="5" sm="12" className="text-light">
                        <h1>Simply be liquid with Cashfox</h1>
                        <p>Immediate liquidity for small and medium-sized companies, freelancers and the self-employed</p>
                        <p>Immediate liquidity for small and medium-sized companies, freelancers and the self-employed</p>
                        <p>Immediate liquidity for small and medium-sized companies, freelancers and the self-employed</p>
                        <p>Immediate liquidity for small and medium-sized companies, freelancers and the self-employed</p>
                        <button className='btn btn-warning'>Secure now</button>
                    </Col>
                    <Col lg="7" sm="12">
                        <img src='/img/cashfox_interface_preview.png' alt='' className='w-100' />
                    </Col>
                </Row>
                
                <Row className="n-container my-5 text-center">
                    <h1>In 3 steps to liquidity</h1>
                    <Row className='mt-5'>
                        <Col lg="4" sm="12" className='text-center'>
                            <h1>to register</h1>
                            <p>Register for Cashfox together with your personal advisor.</p>
                        </Col>
                        <Col lg="4" sm="12" className='text-center'>
                            <h1>to register</h1>
                            <p>Register for Cashfox together with your personal advisor.</p>
                        </Col>
                        <Col lg="4" sm="12" className='text-center'>
                            <h1>to register</h1>
                            <p>Register for Cashfox together with your personal advisor.</p>
                        </Col>
                    </Row>
                </Row>

                <div className='n-container primary-bg text-light py-5'>
                    <Row className='my-5'>
                        <Col lg="4" sm="12">
                            <h2>your benefits at a glance</h2>
                            <button className='btn btn-primary'>Secure liquidity Now</button>
                        </Col>
                        <Col lg="4" sm="12">
                            <h2>Together to the goal</h2>
                            <p>Receive your <b>financing approval</b> within a few minutes . The first registration takes place within 10 minutes - together with your personal consultant .</p>
                            
                            <h2>Together to the goal</h2>
                            <p>Receive your <b>financing approval</b> within a few minutes . The first registration takes place within 10 minutes - together with your personal consultant .</p>
                            
                            <h2>Together to the goal</h2>
                            <p>Receive your <b>financing approval</b> within a few minutes . The first registration takes place within 10 minutes - together with your personal consultant .</p>
                        </Col>
                        <Col lg="4" sm="12">
                            <h2>Together to the goal</h2>
                            <p>Receive your <b>financing approval</b> within a few minutes . The first registration takes place within 10 minutes - together with your personal consultant .</p>
                            
                            <h2>Together to the goal</h2>
                            <p>Receive your <b>financing approval</b> within a few minutes . The first registration takes place within 10 minutes - together with your personal consultant .</p>
                        </Col>
                    </Row>
                    <div>
                        <div className="d-flex">
                            <h1 style={{maxWidth: "400px"}} >Cashfox simply explained</h1>
                            <div style={{width: "400px", height: "200px", background: "white"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='n-container py-5'>
                    <Row className="m-5 ">
                        <Col lg="6" sm="12">
                            <h1>Trust in more than 40 years of experience</h1>
                            <p>Behind Cashfox stands abcfinance - your strong partner for medium-sized companies.</p>

                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                        </Col>
                        <Col lg="6" sm="12">
                            <h1>abcfinance Logo in numbers</h1>
                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                            
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6" sm="12">
                            

                        </Col>
                        <Col lg="6" sm="12">
                            <button className='btn btn-warning'>Become a customer now</button>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default connect()(Home);
