import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../components/modal.css'

const CheckOutPage = () => {
    const[show,setShow] = useState(false);
    const[activeTab,setactiveTab] = useState("visa");

    //handle tab change
    const handleTabchange = (tabId) => {
        setactiveTab(tabId)
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered>
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="#Visa"
                      className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                      role='tab'
                      id="visa-tab"
                      data-toggle="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabchange("visa")}>
                      <img src="https://th.bing.com/th/id/OIP.3YgEWAS2jSqIMFbL14rWGgHaDE?w=860&h=357&rs=1&pid=ImgDetMain" alt="" width="80"/>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                  <a href="#Paypal"
                    className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                    id="paypal-tab"
                    data-toggle="tab"
                    role='tab'
                    aria-controls="paypal"
                    aria-selected={activeTab === "paypal"}
                    onClick={() => handleTabchange("paypal")}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/440px-PayPal.svg.png" alt="" width="80"/>
                  </a>
                </li>

                </ul>
                {/*content*/}
                <div className="tab-content" id="myTabContent">
                    {/*visa content*/}
                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active":""}`}
                        id="visa"
                        role='tabpanel'
                        aria-labelledby='visa-tab'>
                    {/*visa tab content*/}    
                    <div className='mt-4 mx-4'>
                        <div className='text-center'>
                            <h5>Credit Card</h5>
                        </div>
                        <div className='form mt-3'>
                            <div className='inputbox'>
                                <input type='text' name='name' id='name' className='form-control' required min='1' max='999' />
                                <span>Cardholder Name</span>
                            </div>
                            <div className='inputbox'>
                                <input type='text' name='number' id='number' className='form-control' required  min='1' max='999'/>
                                <span>Card Number</span>
                                <i className='fa fa-eye'></i>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className='inputbox'>
                                <input type='text' name='number' id='number' className='form-control' required min='1' max='999' />
                                <span>Expiraton Date</span>
                                </div>
                                <div className='inputbox'>
                                    <span>CVV</span>
                                </div>
                            </div>
                            <div className='px-5 pay'>
                            <button className='btn btn-success btn-block'>
                                Order
                            </button>
                            </div>
                        </div>
                    </div>    
                        
                        </div>
                    {/*paypal content */}
                        

                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CheckOutPage
