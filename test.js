import puppeteer from 'puppeteer'

const test = async (url) => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto(url, { waitUntil: 'networkidle0' })

    const html = await page.content()
    console.log(html)
}

test('https://stackoverflow.com/')