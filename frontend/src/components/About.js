import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const About = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
    <div className="about-container">
      <h2 className="about-header">About Lecture Material Analysis System</h2>
      <div className="about-content">
        <p>The Lecture Material Analysis System (LMAS) is an innovative platform designed to enhance the educational experience by providing comprehensive analysis and insights into lecture materials uploaded to the Learning Management System (LMS). Developed with the needs of both professors and students in mind, LMAS offers a range of powerful features aimed at improving content delivery, understanding, and engagement.</p>
        <h3>Key Features:</h3>
        <ul>
          <li>Lecture Material Upload</li>
          <li>LLM Video Analysis</li>
          
          <li>LLM PDF Analysis</li>
          <li>Content Matching and Analysis</li>
          <li>Interface and Reporting</li>
          <li>Student Engagement Analysis (Optional)</li>
        </ul>
        <h3>Our Mission:</h3>
        <p>At LMAS, our mission is to revolutionize the educational landscape by providing cutting-edge tools for content analysis and enhancement. By empowering educators with actionable insights and fostering student engagement, we aim to create a dynamic learning environment conducive to academic success and lifelong learning.</p>
      </div>
    </div>

    </>
  );
};

export default About;
