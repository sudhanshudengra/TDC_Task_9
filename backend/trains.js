
const { default: puppeteer } = require('puppeteer')
const fs = require('fs')
const { MongoClient } = require('mongodb');
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

    await page.goto('https://www.makemytrip.com/railways/listing?classCode=&className=All%20Classes&date=20231001&destCity=Ahmedabad&destStn=ADI&srcCity=Mumbai&srcStn=KYN')


    const trainInfo = [];

await page.waitForSelector('.single-train-detail');

const pageContent = await page.content();
const $ = load(pageContent);

$('.single-train-detail').each((_, el) => {
    const trainName = $('.train-name', el).text();
    const trainNo = $('.train-depart-number > div', el).text();
    const s_name = $('.station-name', el).text();
    const s_time = $('.depart-time', el).text();
    const d_time = $('.arrival-time', el).text();
    const d_name = $('.station-name', el).text();
    const duration = $('.duration', el).text();
    const price = $('.ticket-price', el).text();
    trainInfo.push({ trainName, trainNo, s_name, s_time, d_time, d_name, duration, price });
});

await browser.close();

console.log(trainInfo);
    console.log('Scraped data successfully' );
  

async function connect(){
    for (const data of trainInfo) {
        try {
          await prisma.trains.create({
            data: {
                trainName: data.trainName, 
                trainNo: data.trainNo, 
                s_name: data.s_time, 
                s_time: data.s_time,
                d_time: data.d_time,
                d_name: data.d_name, 
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
// collection.insertMany(trainInfo)
} catch (error) {
  console.error(error);
}
}

main()








// Array.from(document.querySelectorAll(".listingCard")).forEach(s => {
//   let obj = {}
//   obj.flightCompanyLogo = s.querySelector(".airline-info-wrapper > span > span").style.backgroundImage
//   obj.flightCompany = s.querySelector(".airlineName").innerText
//   obj.flightCode = s.querySelector(".fliCode").innerText
//   obj.s_time = s.querySelector(".flightTimeInfo > span").innerText
//   obj.d_time = s.querySelector(".timeInfoRight > .flightTimeInfo > span").innerText
//   obj.duration = s.querySelector(".stop-info > p").innerText
//   obj.price = s.querySelector(".priceSection > div > div").innerText
//   console.log(obj)
  
// })