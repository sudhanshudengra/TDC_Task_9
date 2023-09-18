
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

    await page.goto('https://cabs.makemytrip.com/dt_cabsListing?fromCity=%7B%22address%22%3A%22Mumbai%22%2C%22latitude%22%3A19.0759837%2C%22longitude%22%3A72.8776559%2C%22pincode%22%3A%22%22%2C%22place_id%22%3A%22ChIJwe1EZjDG5zsRaYxkjY_tpF0%22%2C%22is_city%22%3Atrue%2C%22city%22%3Anull%2C%22city_code%22%3Anull%2C%22google_city%22%3A%22Mumbai%22%7D&toCity=%7B%22address%22%3A%22Ahmedabad%2C%20Gujarat%2C%20India%22%2C%22latitude%22%3A23.022505%2C%22longitude%22%3A72.5713621%2C%22pincode%22%3A%22%22%2C%22place_id%22%3A%22ChIJSdRbuoqEXjkRFmVPYRHdzk8%22%2C%22is_city%22%3Atrue%2C%22city%22%3Anull%2C%22city_code%22%3Anull%2C%22google_city%22%3A%22Ahmedabad%22%7D&tripType=OW&departDate=01-10-2023&pickupTime=9%3A00&returnDate=&dropTime=&packageKey=&fromAirport=false&toAirport=false&sourceAirportId=0&destinationAirportId=0')


    const cabInfo = [];

await page.waitForSelector('#List');

const pageContent = await page.content();
const $ = load(pageContent);

$('#List > div').each((_, el) => {
    const cabCar = $('.cabDetails > div > div > span', el).text();
    const cabFacilities = $('.cabUtilities', el).text();
    const cabPrice = $('.cabBookDetails > div > div > div > p', el).text();
    cabInfo.push({ cabCar, cabFacilities, cabPrice });
});

await browser.close();

console.log(cabInfo);
    console.log('Scraped data successfully' );
  

async function connect(){
  for (const data of cabInfo) {
    try {
      await prisma.cabs.create({
        data: {
            cabCar: data.cabCar,
            cabFacilities: data.cabFacilities,
            cabPrice: data.cabPrice
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

