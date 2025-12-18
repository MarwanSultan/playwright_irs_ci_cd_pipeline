# Playwright Test Automation for IRS.gov

Automated end-to-end tests for [IRS.gov](https://www.irs.gov/) using Playwright.  
Supports **Chromium, Firefox, and WebKit**, with accessibility and UI validation.  
Includes **CI/CD workflow** with automated tests, dependency security scans, and static code analysis (CodeQL).

---

## Features

- End-to-end Playwright tests for IRS.gov
- Cross-browser testing: Chromium, Firefox, WebKit
- Accessibility and UI validation
- CI/CD with GitHub Actions
- Automated dependency security checks (`npm audit`)
- Static code analysis with CodeQL

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn
- Playwright dependencies (`npx playwright install`)

---

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