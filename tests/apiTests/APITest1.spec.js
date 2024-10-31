const { test, expect } = require('@playwright/test');

test("API Test - Validate response content and place information", async ({ request }) => {
    const url = `http://api.zippopotam.us/de/bw/stuttgart`;

   
    const start = Date.now();
    const response = await request.get(url);
    const duration = Date.now() - start;

   
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/application\/json/);
    expect(duration).toBeLessThan(1000);

   
    const responseData = await response.json();


    expect(responseData.country).toBe("Germany");
    expect(responseData.state).toBe("Baden-Württemberg");

    const placeMatch = responseData.places.find(
        place => place['post code'] == "70597" && place['place name'] == "Stuttgart Degerloch"
    );
    expect(placeMatch).toBeDefined();
});
