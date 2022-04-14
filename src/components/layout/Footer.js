import React from 'react';
import { connect } from 'react-redux';


const Footer = () => {
  return (
    <footer>
      <div className='footer n-container text-center py-4'>
        <p>abcfinance</p>

        <div className='text-center'>
          <span className='mx-3'>Impressum</span>
          <span className='mx-3'>Impressum</span>
          <span className='mx-3'>Impressum</span>
          <span className='mx-3'>Impressum</span>
          <span className='mx-3'>Impressum</span>
        </div>
      </div>
    </footer>
  );
};

export default connect()(Footer);
