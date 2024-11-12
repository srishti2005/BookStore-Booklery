import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#FFFACD', // Light yellow background color
      color: '#6A0DAD',           // Purple text color
    }}>
      <Navbar />
      <div style={{
        flex: 1,
        padding: '8rem',
        textAlign: 'center',
        color: '#6A0DAD',         // Purple color for text
      }}>
        <h1 style={{fontWeight:'100%', color: '#6B2A8E', fontSize: '3rem', padding:'1.5rem'}}>About Our Website</h1>
        <p>
        Welcome to our website! We’re here to help you excel in both your career and personal growth through our range of carefully designed courses. Each course is crafted to provide high-quality, practical knowledge that’s accessible to everyone, regardless of background or skill level. Whether you're looking to advance in your professional journey, explore new skills, or pursue personal development, our offerings are built to empower you with the tools, insights, and support you need to succeed. From foundational skills to advanced training, we prioritize your learning experience, ensuring each course meets rigorous standards of relevance and quality. Join our community of learners, and take a step toward a brighter, more knowledgeable future with us!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
