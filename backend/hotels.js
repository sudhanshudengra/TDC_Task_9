
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

    await page.goto('https://www.easemytrip.com/hotels/hotels-in-ahmedabad/?e=2023919165451&city=Ahmedabad,%20India&cin=01/10/2023&cOut=02/10/2023&Hotel=NA&Rooms=1&pax=2')


    const hotelInfo = [];

await page.waitForSelector('.hotel-box');

async function scrollPage() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(3000);
  }
  let previousHeight = 0;
  let currentHeight = await page.evaluate(() => document.body.scrollHeight);

  while (previousHeight !== currentHeight) {
    previousHeight = currentHeight;
    await scrollPage();
    currentHeight = await page.evaluate(() => document.body.scrollHeight);
  }

const pageContent = await page.content();
const $ = load(pageContent);


$('.hotel-box').each((_, el) => {
    const hotelImage = $('.hotel-image > div > ul > li ', el).css('img');
    const hotelName = $('.htl_ttl', el).text();
    const hotelAddress = $('.address', el).text();
    const hotelFacilities = $('.am_ties', el).text();
    const hotelDistance = $('.distance-fr', el).text();
    const hotelPrice = $('.act_price', el).text();
    hotelInfo.push({ hotelImage, hotelName, hotelAddress, hotelFacilities, hotelDistance, hotelPrice});
});
console.log(hotelInfo);

await browser.close();

console.log(hotelInfo);
    console.log('Scraped data successfully' );
  
async function connect(){
  for (const data of hotelInfo) {
    try {
      await prisma.hotels.create({
        data: {
            hotelImage: data.hotelImage,
            hotelName: data.hotelName,
            hotelAddress: data.hotelAddress,
            hotelFacilities: data.hotelFacilities,
            hotelDistance: data.hotelDistance,
            hotelPrice: data.hotelPrice
        },
      });
      console.log('Data inserted successfully');
    } catch(err){
    console.log(err);
  }
}
}
// connect();
} catch (error) {
  console.error(error);
}

}

main()

