
# Sogeti Playwright Test Project

This repository contains automated tests for the [Sogeti website](https://www.sogeti.com/), built with [Playwright](https://playwright.dev/) in JavaScript (Node.js). Dynamic test data is generated using Faker.

## Project Overview

- **playwright-report**: Stores HTML reports of test runs.
- **test-results**: Contains test result data.
- **tests**: Organized test files:
  - **apiTests**: API test cases.
  - **fixtures**: Setup configurations and reusable test data.
  - **pages**: Page Object Model (POM) files for structured page interactions.
  - **webTests**: End-to-end UI tests.

## Requirements

- **Node.js** (v14+): [Download here](https://nodejs.org/)
- **Playwright** for browser automation.
- **Faker.js** for generating test data.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/adnansid/Sogeti.git
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Key Configuration

Settings in `playwright.config.js`:
- **Sequential Tests**: Tests run one after another.
- **Screenshots/Videos**: Captured on failures.
- **HTML Report**: Automatically generated.
- **Base URL**: Configured for Sogeti’s website.

## Running Tests

- **Run All Tests**:
  ```bash
  npx playwright test tests --headed --workers=1
  ```

- **Run Specific Test**:
  ```bash
  npx playwright test tests/webTests/test1.spec.js
  ```

- **View HTML Report**:
  ```bash
  npx playwright show-report
  ```

## Troubleshooting Tips

- **Timeout Adjustments**: Modify `timeout` in `playwright.config.js`.
- **Missing Browsers**: Run `npx playwright install` to resolve.
- **Debugging**: Run tests in headed mode:
   ```bash
   npx playwright test --headed
   ```
