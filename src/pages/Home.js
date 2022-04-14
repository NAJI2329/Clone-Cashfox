import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const Home = () => {

    

    return (
        <section>
            <div className='home'>
                <div className='primary-bg pb-5'>
                    <div className='n-container'>
                        <Row className="align-items-center">
                            <Col lg="5" sm="12" className="text-light">
                                <h1 className='CashfoxT'>Simply be liquid with Cashfox</h1>
                                <div className='d-flex justify-content-left CashfoxTItem'>
                                    <img src="/img/confirm_icon.png" alt="" height={"32"} width="32" /> 
                                    <p>Immediate liquidity for small and medium-sized companies, freelancers and the self-employed</p>
                                </div>
                                <div className='d-flex justify-content-left CashfoxTItem'>
                                    <img src="/img/confirm_icon.png" alt="" height={"32"} width="32" /> 
                                    <p>Factoring on demand – you decide which invoices to submit</p>
                                </div>
                                
                                <div className='d-flex justify-content-left CashfoxTItem'>
                                    <img src="/img/confirm_icon.png" alt="" height={"32"} width="32" /> 
                                    <p>Your customer will not find out that you have assigned the claim</p>
                                </div>
                                
                                <div className='d-flex justify-content-left CashfoxTItem'>
                                    <img src="/img/confirm_icon.png" alt="" height={"32"} width="32" /> 
                                    <p>Personal support and registration by one of our consultants</p>
                                </div>
                                
                                <button className='secureLiqusityNowBtn'>Secure liquidity now</button>
                            </Col>
                            <Col lg="7" sm="12">
                                <img src='/img/cashfox_interface_preview.png' alt='' className='w-100' />
                            </Col>
                        </Row>
                    </div>
                </div>
                <img src='/img/down.png' alt="" style={{width: '100%', height: "auto", "marginTop": "-2px"}} />
                {/* <svg xmlns="http://www.w3.org/2000/svg" className='poslyton'>
                    <polygon fill="rgba(0,0,102,1)" points="0,0 951.5,0 1903,0 1903,0 1903,0 256,128 0,24 0,12 "></polygon>
                </svg> */}
                
                <div className="my-5 text-center pb-5">
                    <div className='n-container chritt'>
                        <h1 className='chritt_title my-5'>In 3 steps to liquidity</h1>
                        <Row className='mt-5'>
                            <Col lg="4" sm="12" className='text-center'>
                                <div style={{position: "relative"}}>
                                    <p className='number my-4'>1<div className='leftlineDiv'></div></p>
                                    
                                </div>
                                <h1 className='tit'>to register</h1>
                                <p className='comme'>Register for Cashfox together with your personal advisor.</p>
                            </Col>
                            <Col lg="4" sm="12" className='text-center'>
                                <div style={{position: "relative"}}>
                                    <p className='number my-4'>2<div className='leftlineDiv'></div></p>
                                </div>
                                <h1 className='tit'>upload</h1>
                                <p className='comme'>Register for Cashfox together with your personal advisor.</p>
                            </Col>
                            <Col lg="4" sm="12" className='text-center'>
                                <div style={{position: "relative"}}>
                                    <p className='number my-4'>3</p>
                                </div>
                                <h1 className='tit'>to register</h1>
                                <p className='comme'>Register for Cashfox together with your personal advisor.</p>
                            </Col>
                        </Row>

                    </div>
                </div>

                <div className='primary-bg text-light py-5'>
                    <div className='n-container bene'>
                        <Row className='my-5'>
                            <Col lg="4" sm="12">
                                <h2>your benefits at a glance</h2>
                                <button className='secureLiqusityNowBtn my-4 px-5'>Secure liquidity Now</button>
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
                                <h2 style={{maxWidth: "400px"}} >Cashfox simply explained</h2>
                                <div style={{width: "400px", height: "200px", background: "white"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='n-container'>
                    <Row>
                        <Col lg="6" sm="12" className='trusitem'>
                            <h1>Trust in more than 40 years of experience</h1>
                            <p>Behind Cashfox stands abcfinance - your strong partner for medium-sized companies.</p>

                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                            <p>Financing expert for almost all industries</p>
                        </Col>
                        <Col lg="6" sm="12" className='trusitem'>
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
