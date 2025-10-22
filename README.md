# Overview
This project is a simple Cypress Automation framework designed for web application Calculator.html testing.
It supports:
1. Data Driven Testing (via Fixtures)
2. POM design approach
3. Test Assertions
4. HTML Report with linked video recording of the test
5. CI/CD with Github Workflow Actions
6. Report Storage in AWS S3
7. Test completion email notifcation via AWS SNS

# Prerequisites
Node.js (latest)
npm
AWS Account
Admin Access IAM user
IAM role for Github as Web entity
S3 Bucket
SNS Topic with Email Subscription


# Installations
1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies via command: npm i

# Run test
1. Open Cypress Test runner (Interactive mode) via command: npm run open.
2. Run Cypress Test in headless mode via command: np run test

# Report
Cypress Mochawesome Reporter

# CI/CD
Github Workflow Actions

# AWS Setup
Federated Identity via OpenIDConnect has been utilised to establish trust relationship between Github and AWS.
OpenIDConnect usage is AWS recommended best practice.
Using AWS secrects directly can make you vulnerable to security attacks, hence avoid it.

# Report Storage
AWS S3
Ensure IAM Role has least privilege policy attached to it for S3.

# Test Completion Notification
AWS SNS - Email
Ensure IAM Role has least privilege policy attached to it for SNS.


