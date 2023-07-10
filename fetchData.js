import puppeteer from 'puppeteer';

const dataSelectors = {
    ASIN: '//*[@id="detailBullets_feature_div"]/ul/li[5]/span/span[2]',
    BSR: '//*[@id="detailBulletsWrapper_feature_div"]/ul[1]/li/span',
    Date: '//*[@id="detailBullets_feature_div"]/ul/li[3]/span/span[2]',
};
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
};
export const fetchData = async (url) => {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800});
        await page.goto(url);

        // scrape ASIN
        const [el] = await page.$x(dataSelectors.ASIN);
        const asin = await el.getProperty('innerText');
        const asinTxt = await asin.jsonValue();

        // scrape BSR
        const [el1] = await page.$x(dataSelectors.BSR);
        const BSR = await el1.getProperty('textContent');
        const bsrTxt = await BSR.jsonValue();
        const startIndex = bsrTxt.search('#');
        const endIndex = bsrTxt.search('in Clothing, Shoes & Jewelry');
        const BSRTxt = bsrTxt.slice(startIndex,endIndex-1);

        // scrape date first available
        const [el2] = await page.$x(dataSelectors.Date);
        const date = await el2.getProperty('innerText');
        const dateTxt = await date.jsonValue();

        // await browser.close();
        return { asinTxt, BSRTxt, dateTxt };
};

