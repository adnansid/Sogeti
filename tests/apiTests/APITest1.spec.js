const { test, expect } = require('@playwright/test');

test("API Test - Validate response content and place information", async ({ request }) => {
    const url = `http://api.zippopotam.us/de/bw/stuttgart`;

    // Track response time and check the request status
    const start = Date.now();
    const response = await request.get(url);
    const duration = Date.now() - start;

    // Verify that the response was successful and JSON formatted
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/application\/json/);
    expect(duration).toBeLessThan(1000);

    // Parse JSON response body and inspect its content
    const responseData = await response.json();

    // Confirm 'country' and 'state' fields match expected values
    expect(responseData.country).toBe("Germany");
    expect(responseData.state).toBe("Baden-Württemberg");

    // Check for specific location based on postal code and name
    const placeMatch = responseData.places.find(
        place => place['post code'] == "70597" && place['place name'] == "Stuttgart Degerloch"
    );
    expect(placeMatch).toBeDefined();
});
