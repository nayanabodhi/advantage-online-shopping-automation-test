# Advantage Online Shopping Automation Test

## Overview
This project contains an automated test case for validating mandatory field error messages on the registration page of Advantage Online Shopping.

Test Case Implemented:
LOG001 - Mandatory field error messages display & clear

## Tech Stack
- Playwright
- JavaScript
- Page Object Model (POM)

## Framework Design
The project follows a lightweight Page Object Model design to ensure maintainability and scalability for future test cases.

Structure:
pages/ - Page Object classes
tests/ - Test specifications
test-data/ - Test data

## Test Flow
1. Navigate to Advantage Online Shopping
2. Click user icon
3. Open registration page
4. Trigger validation errors by clicking into and out of required fields
5. Verify mandatory field error messages are displayed
6. Enter valid data
7. Verify error messages are cleared

## How to Run

Install dependencies:

npm install

Run tests:

npx playwright test

Run in headed mode:

npx playwright test --project=chromium --headed
