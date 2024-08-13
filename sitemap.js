const express = require('express');
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'; // Adjust for your base URL

// Load treatments data
const treatments = JSON.parse(fs.readFileSync(path.join(__dirname, './treatments.json'), 'utf-8'));

// Define static routes to include in the sitemap
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/service',
  '/treatment',
];

// Function to generate the XML sitemap
router.get('/xml', async (req, res) => {
  try {
    const smStream = new SitemapStream({ hostname: baseUrl });
    
    // Add static routes
    staticRoutes.forEach(route => {
      smStream.write({ url: route, changefreq: 'daily', priority: 0.7 });
    });

    // Add dynamic routes for each treatment
    treatments.forEach(treatment => {
      smStream.write({ url: `/treatment/${treatment.id}`, changefreq: 'weekly', priority: 0.5 });
    });

    smStream.end();

    const sitemapOutput = await streamToPromise(smStream).then(data => data.toString());

    res.header('Content-Type', 'application/xml');
    res.send(sitemapOutput);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating sitemap');
  }
});

module.exports = router;
