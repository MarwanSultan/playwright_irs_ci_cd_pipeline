# Playwright Test Automation Framework for IRS.gov

This repository contains a Playwright-based test automation framework designed to validate functionality and accessibility on [IRS.gov](https://www.irs.gov/).

## Features

- Automated end-to-end tests for IRS.gov pages
- Supports Chromium, Firefox, and WebKit browsers
- Accessibility and UI validation
- Configurable base URL and test settings
- Parallel test execution

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn
- Playwright dependencies (installed via `npm install`)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/MarwanSultan/playwright_irs_ci_cd_pipeline.git
cd playwright_irs_ci_cd_pipeline
```

## Install dependencies
```npm install
npx playwright install
```

## Execute tests
```
npx playwright test
```

## Generate HTML report
```
npx playwright show-report
```