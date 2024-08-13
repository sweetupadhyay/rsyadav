const express = require("express");
const items = require('../items.json');
const treatments = require('../treatments.json');




exports.Home = { 
  title: 'Home - Dr. Ram Singh Yadav', 
  description: 'Discover exceptional cardiac care with best Cardiac Surgeon Dr. Ram Singh Yadav at Jaipur Hospital. Specializing in heart surgery, our expert team provides top-notch medical services. Schedule your consultation today.', 
  keywords: 'Cardiac Surgeon, Dr. Ram Singh Yadav, Jaipur Hospital, Heart Surgery, bypass, cabg, angiography, angioplasty, best cardiac surgeon, heart disease, heart treatments', 

 
};

exports.About = {title: 'About - Dr. Ram Singh Yadav',
  description: 'Learn about Dr. Ram Singh Yadav, a leading cardiac Surgeon in Jaipur. Discover his expertise, experience, and commitment to providing the best cardiac care at Jaipur Hospital.',
  keywords: 'Dr. Ram Singh Yadav, Cardiac Surgeon, Jaipur, Heart Specialist, Medical Expertise, Cardiac Care,  best ctvs in jaipur, About Us, avr, dvr,'};

  exports.Service = { 
    title: 'Our Services - Dr. Ram Singh Yadav',
    description: 'Explore the comprehensive cardiac care services offered by Dr. Ram Singh Yadav at Jaipur Hospital. From heart surgery to preventive care, get expert medical services tailored to your needs.',
    keywords: 'Cardiac Care Services, Heart Surgery, Preventive Cardiology, Dr. Ram Singh Yadav, Jaipur Hospital, Best Cardiologist Jaipur, Medical Services, Heart Health',
   
  };

  exports.Contact = { title: 'Contact Us - Get in Touch with Dr. Ram Singh Yadav',
    description: 'Get in touch with Dr. Ram Singh Yadav at Jaipur Hospital for expert cardiac care. Find our contact details, location, and office hours here. Schedule your appointment today.',
    keywords: 'Contact, Dr. Ram Singh Yadav, Jaipur Hospital, Cardiac Care, Appointment, Heart Specialist, Contact Details'
};

exports.Treatment = { 
  title: 'Treatment', 
  description: 'List of blog articles', 
  keywords: 'treatment, articles, cardiac surgery', 
  treatments: treatments 
};


exports.Page404 = {title: 'Dr. Ram Singh Yadav-Page Not Found',
  description: 'Learn about Dr. Ram Singh Yadav, The page you are looking for could not be found. Please check the URL or use the navigation above to find what you are looking for.',
  keywords: 'Dr. Ram Singh Yadav, page not found, error 404, website error'}