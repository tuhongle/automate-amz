import { getLinks, wsChromeEndpointurl } from './links.js'
import { fetchData } from './fetchData.js'

import puppeteer from 'puppeteer';

const Endpointurl = wsChromeEndpointurl;

const pageURL = 'https://tuhongle.github.io/automate-amz/';
const getData = async () => {
    const productPages = await getLinks();
    const browser = await puppeteer.connect({
        browserWSEndpoint: Endpointurl,
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await page.goto(pageURL);
    for (let i = 0; i < productPages.length; i ++) {
        const dataPage = await fetchData(productPages[i]);

        await page.evaluate((i, dataPage) => {
            if (dataPage.BSRTxt) {
                document.querySelector(`#data${i+1}_0`).innerHTML = `${i+1}`;
                document.querySelector(`#data${i+1}_1`).innerHTML = dataPage.asinTxt;
                document.querySelector(`#data${i+1}_1`).href = `http://amazon.com/dp/${dataPage.asinTxt}`;
                document.querySelector(`#data${i+1}_2`).innerHTML = dataPage.BSRTxt;
                document.querySelector(`#data${i+1}_3`).innerHTML = dataPage.dateTxt;
                document.querySelector(`#data${i+1}_4`).innerHTML = dataPage.titleTxt;
            }
        }, i, dataPage);
    };
};

getData();