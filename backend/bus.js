
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

    await page.goto('https://www.redbus.in/bus-tickets/mumbai-to-ahmedabad?fromCityName=Mumbai&fromCityId=462&srcCountry=IND&toCityName=Ahmedabad&toCityId=551&destCountry=IND&onward=1-Oct-2023&opId=0&busType=Any')


    const busInfo = [];

await page.waitForSelector('.bus-items');

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


$('.bus-items > div').each((_, el) => {
    const busCompany = $('.travels', el).text();
    const busType = $('.bus-type', el).text();
    const s_name = $('.dp-loc', el).text();
    const s_time = $('.dp-time', el).text();
    const d_name = $('.bp-loc', el).text();
    const d_time = $('.bp-time', el).text();
    const duration = $('.dur', el).text();
    const price = $('.fare > span', el).text();
    busInfo.push({ busCompany, busType, s_name, s_time, d_name, d_time, duration, price });
});

await browser.close();

console.log(busInfo);
    console.log('Scraped data successfully' );
  
async function connect(){
  for (const data of busInfo) {
    try {
      await prisma.buses.create({
        data: {
            buscompany: data.busCompany,
            bustype: data.busType,
            s_name: data.s_name,
            s_time: data.s_time,
            d_name: data.d_name,
            d_time: data.d_time,
            duration: data.duration,
            price: data.price
        },
      });
      console.log('Data inserted successfully');
    } catch(err){
    console.log(err);
  }
}
}
connect();
} catch (error) {
  console.error(error);
}

}

main()

