const { test, expect, request } = require('@playwright/test');

const testData = [
    { country: 'us', postalCode: '90210', placeName: 'Beverly Hills' },
    { country: 'us', postalCode: '12345', placeName: 'Schenectady' },
    { country: 'ca', postalCode: 'B2R', placeName: 'Waverley' }];

test.describe('Zip Code API Data-Driven Tests', () => {
    testData.forEach(({ country, postalCode, placeName }) => {
        test(`Test API response for Country: ${country} ,Postal Code: ${postalCode} `, async ({ request }) => {

            const url = `http://api.zippopotam.us/${country}/${postalCode}`;

            const start = Date.now();

            const response = await request.get(url);

            const responseTime = Date.now() - start;

            expect(response.status()).toBe(200);

            expect(response.headers()['content-type']).toContain('application/json');

            expect(responseTime).toBeLessThan(1000);

            const responseData = await response.json();

            const placeNames = responseData.places.map(place => place['place name']);
            expect(placeNames).toContain(placeName);
        });
    });
});