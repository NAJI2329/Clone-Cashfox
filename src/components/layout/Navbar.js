import React, { Fragment } from 'react';

const Header = ({connectWallet, address}) => {
   return (
    <Fragment>  
      <div className='header primary-bg'>
        <div className='n-container'>
          <div className='d-flex justify-content-between'>
            <img src='/img/logo.svg' alt="" />
            <p>Registration</p>
          </div>
        </div>
      </div>
     </Fragment>
  );
};

export default Header;
