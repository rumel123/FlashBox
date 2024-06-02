import puppeteer from 'puppeteer';

async function scrapeData() {
    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://acrowncargo.com/track/');
    await page.waitForSelector('#TrackNo');

    // Type the tracking number and submit
    await page.type('#TrackNo', 'ACCE2171');
    await page.click('#btnTrack');

    // Wait for the network to be idle or for specific content change
    await page.waitForNetworkIdle();
    await page.waitForFunction(
        () => !document.querySelector('.table-responsive').innerText.includes('Please wait ...'),
        { timeout: 10000 }
    );

    // Extract the data
    const result = await page.evaluate(() => {
        const table = document.querySelector('.table-responsive');
        return Array.from(table.querySelectorAll('tr')).map(row => {
            return Array.from(row.querySelectorAll('th, td')).map(cell => cell.innerText.trim());
        });
    });

    console.log(result);
    await browser.close();
}

scrapeData();
