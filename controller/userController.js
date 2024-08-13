const express = require("express");
const metaData = require("../metaData/metaData")
const fs = require('fs');

exports.Home = (req, res) => {
  fs.readFile('./items.json', (err, itemsData) => {
    if (err) throw err;
    const items = JSON.parse(itemsData);

    fs.readFile('./patients.json', (err, patientData) => {
      if (err) throw err;
      const patients = JSON.parse(patientData);

      res.render('index', {
        ...metaData.Home, // Spread existing Home metaData
        items,
        patients, // Add patients data
      });
    });
  });
};

    

exports.About = (req, res) => {
  res.render('about', metaData.About
  );
}


exports.Service = (req, res) => {
  fs.readFile('./items.json', (err, data) => {
    if (err) throw err;
    const items = JSON.parse(data);
  {res.render('service', {...metaData.Service, items});
}});
};


  
  exports.Contact =  (req,res)=>{res.render('contact', metaData.Contact);}

 
// Blog page
exports.Treatment = (req, res) => {
  fs.readFile('./treatments.json', (err, data) => {
    if (err) throw err;
    const treatments = JSON.parse(data);
    res.render('treatment',metaData.Treatment);
  });
};

// Treatment detail page

exports.TreatmentDetail = (req, res) => {
  const articleId = req.params.id;
  fs.readFile('./patients.json', (err, patientData) => {
    if (err) throw err;
    const patients = JSON.parse(patientData)

  fs.readFile('./treatments.json', (err, data) => {
    if (err) throw err;
    const treatments = JSON.parse(data);

    const article = treatments.find(treatment => treatment.id === articleId);

    if (article) {
      res.render('treatmentDetail', {
        article,
        treatments,
        patients,   // Pass treatments to the template
        title: article.title,
        keywords: article.keywords,
        description: article.summary
      });
    } else {
      res.status(404).send('Article not found');
    }
  });
  });
};


//404 page
exports.Page404 =  (req, res) => {
  res.status(404).render('404',metaData.Page404); // Render the 404 template
};