import React from 'react';

const Course = ({ title, description }) => {
  return (
    <div style={{
      backgroundColor: '#FFD700',  // Light yellow background color
      borderRadius: '8px',
      padding: '1.5rem',  // Added padding for inner spacing
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <h1 style={{fontWeight:'100%', color: '#6B2A8E', fontSize: '2.5rem'}}></h1>
      <h2 style={{ color: '#6B2A8E', marginBottom: '0.5rem',fontWeight:'100%' }}>{title}</h2>
      <p style={{ color: '#black', fontSize: '0.8rem' }}>{description}</p> {/* Lightened text color */}
      <button style={{
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#fff',
        color: '#6B2A8E',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        hover:'#FFD700'
      }}>
        Learn More
      </button>
    </div>
  );
};

export default Course;
