/* const puppeteer = require('puppeteer');
const chai = require('chai');
const { expect, assert } = require('chai'); */

import puppeteer from 'puppeteer';

const URL = 'https://www.amazon.com/s?i=fashion&bbn=9056986011&rh=n%3A7141123011%2Cn%3A7147445011%2Cn%3A12035955011%2Cn%3A9103696011%2Cn%3A9056985011%2Cn%3A9056986011%2Cn%3A9056987011%2Cp_6%3AATVPDKIKX0DER%2Cp_n_date_first_available_absolute%3A15196852011&s=exact-aware-popularity-rank&dc&ds=v1%3Ark4VBThyhN9CBkQhj2QzGfxsErY9CMMwWSeBoITz17c&qid=1688781370&rnid=9056986011&ref=sr_nr_n_1';
const selectors = {
    locationButton: '#nav-global-location-popover-link',
    locationBox: '#GLUXZipUpdateInput',
    productLinks: `//a[@class="a-link-normal s-no-outline"]`,
    next: `//a[@class="s-pagination-item s-pagination-next s-pagination-button s-pagination-separator"]`,
};
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
};

export const getLinks = async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800});
        await page.goto(URL);
        const locationButton = await page.waitForSelector(selectors.locationButton);
        await locationButton.click();
        await delay(1000);
        await page.type(selectors.locationBox, '90001');
        await page.keyboard.press('Enter');
        await delay(1000);
        await page.keyboard.press('Enter');
        await delay(2000);
        let productPages = [];
        await page.waitForXPath(selectors.productLinks);
        let productLinks1 = await page.$x(selectors.productLinks);

        const nextButton1 = await page.waitForXPath(selectors.next);
        await nextButton1.click();
        await delay(2000);
        await page.waitForXPath(selectors.productLinks);
        let productLinks2 = await page.$x(selectors.productLinks);

        const nextButton2 = await page.waitForXPath(selectors.next);
        await nextButton2.click();
        await delay(2000);
        await page.waitForXPath(selectors.productLinks);
        let productLinks3 = await page.$x(selectors.productLinks);

        const nextButton3 = await page.waitForXPath(selectors.next);
        await nextButton3.click();
        await delay(2000);
        await page.waitForXPath(selectors.productLinks);
        let productLinks4 = await page.$x(selectors.productLinks);

        const nextButton4 = await page.waitForXPath(selectors.next);
        await nextButton4.click();
        await delay(2000);
        await page.waitForXPath(selectors.productLinks);
        let productLinks5 = await page.$x(selectors.productLinks);

        let productTotalLinks = [...productLinks1, ...productLinks2, ...productLinks3, ...productLinks4, ...productLinks5];

        for (const productLink of productTotalLinks) {
            const link = await productLink.getProperty('href');
            const linkTxt = await link.jsonValue();
            await productPages.push(linkTxt);
        };
        await browser.close();
        return productPages;
};