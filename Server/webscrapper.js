// ! for web scrapping used the puppeteer library of js
const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeWebsite(url, outputFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Example: Scraping title and paragraph text
  const title = await page.title();
  const paragraphText = await page.$eval('h2', element => element.textContent);

  // Create array containing scraped data
  const scrapedData = [
    { title: title, paragraph: paragraphText }
  ];

  // Write scraped data to JavaScript file
  const dataToWrite = `module.exports = ${JSON.stringify(scrapedData)};`;
  fs.writeFile(outputFile, dataToWrite, err => {
    if (err) throw err;
    console.log(`Scraped data saved to ${outputFile}`);
  });

  await browser.close();
}

// Example usage
scrapeWebsite('https://jaihind.edu.in/jcoe/computer/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcei/', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about2', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about3', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about4', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about5', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about6', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about7', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about8', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about9', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about10', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about11', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about12', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about13', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about14', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about15', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about16', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about17', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/about.php#about18', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php#undefined2', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php#undefined3', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php#undefined4', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php#undefined5', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php#undefined6', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/admissions.php#undefined7', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/fe/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/ai/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/civil/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/etc/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/mechanical/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/naac/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/naac/ssr.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/naac/iqac.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/uploads/JCOE/files/Jaihind_College_of_Engineering_Kuran_Tal_Junnar_Dist_Pune20240223.pdf', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/rd/', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/rd/research_committee.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/rd/patents.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/rd/sponsored_projects.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/rd/publications.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/exam/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/nss/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/sw/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/alumni/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/student-section.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/student-section.php#ss2', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/student-section.php#ss3', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/student-section.php#ss4', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/uploads/JCOE/files/CoCurricularActivity.pdf', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/library/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/placements/index.php', 'scraped_data.js');
scrapeWebsite('https://jaihind.edu.in/jcoe/events.php', 'scraped_data.js');



