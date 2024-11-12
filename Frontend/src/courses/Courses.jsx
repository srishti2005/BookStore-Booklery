import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

const Courses = () => {
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar />
      <div style={{
        flex: 1,
        padding: '2rem',
        paddingTop: '8rem', // Adds space below the navbar to prevent overlap
        textAlign: 'center',
        overflowY: 'auto',
      }}>
        <h1 style={{fontWeight:'100%', color: '#6B2A8E', fontSize: '2.5rem'}}>Our Courses</h1>
        <p>Explore our range of courses designed to help you succeed.</p>
        {showCourses && <Cards />}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;