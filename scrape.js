const axios = require('axios');
const cheerio = require('cheerio');

const url = `https://acrowncargo.com/track/#`;

async function getTrackingInfo(trackingNumber) {
    try {
        const { data } = await axios.get(url, {
            params: {
                tracking_number: trackingNumber,
            },
        });
        const $ = cheerio.load(data);

        const trackingInfo = [];
        $('table tr').each((index, element) => {
            const date = $(element).find('td.date').text().trim();
            const status = $(element).find('td.status').text().trim();
            const remarks = $(element).find('td.remarks').text().trim();

            if (date && status && remarks) {
                trackingInfo.push({ date, status, remarks });
            }
        });

        return trackingInfo;
    } catch (error) {
        console.error('Error fetching tracking information:', error);
        return null;
    }
}

module.exports = {
    getTrackingInfo,
};
