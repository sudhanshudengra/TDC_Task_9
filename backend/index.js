// flights
const { default: puppeteer } = require('puppeteer')
const fs = require('fs')
const { load } = require('cheerio')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const main =  async () => {
  try {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
          height: 768,
          width: 1366
        }
      });
    const page = await browser.newPage();

    await page.goto('https://www.makemytrip.com/flight/search?itinerary=BOM-AMD-01/10/2023&tripType=O&paxType=A-1_C-0_I-0&intl=false&cabinClass=E&ccde=IN&lang=eng')


    const flightInfo = [];

await page.waitForSelector('.listingCard');

const pageContent = await page.content();
const $ = load(pageContent);

$('.listingCard').each((_, el) => {
    const flightCompanyLogo = $('.airline-info-wrapper > span > span', el).css('background-image'); // Use .css() to get the background image URL
    const flightCompany = $('.airlineName', el).text();
    const flightCode = $('.fliCode', el).text();
    const s_time = $('.timeInfoLeft > .flightTimeInfo > span', el).text();
    const d_time = $('.timeInfoRight > .flightTimeInfo > span', el).text();
    const duration = $('.stop-info > p', el).text();
    const price = $('.priceSection > div > div', el).text();
    flightInfo.push({ flightCompanyLogo, flightCompany, flightCode, s_time, d_time, duration, price });
});

await browser.close();

console.log(flightInfo);
    console.log('Scraped data successfully' );
  

// const collection = mongoose.model('flight', flight_schema);
async function connect(){
  for (const data of flightInfo) {
    try {
      await prisma.flights.create({
        data: {
          flightcompanylogo: data.flightCompanyLogo,
          flightcompany: data.flightCompany,
          flightcode: data.flightCode,
          s_time: data.s_time,
          d_time: data.d_time,
          duration: data.duration,
          price: data.price,
        },
      });
      console.log('Data inserted successfully');
    } catch(err){
    console.log(err);
  }
}
}
connect();
// collection.insertMany(flightInfo)
} catch (error) {
  console.error(error);
}

}

main()

