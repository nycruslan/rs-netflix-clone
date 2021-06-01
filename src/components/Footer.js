import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        color: '#808080',
        fontSize: '1vw',
        zIndex: 200,
      }}
    >
      <img
        style={{ maxWidth: '15%', marginBottom: '3rem' }}
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Logo'
      />
      <p>© 2021 Netflix. All rights reserved.</p>
    </div>
  );
};

export default Footer;
