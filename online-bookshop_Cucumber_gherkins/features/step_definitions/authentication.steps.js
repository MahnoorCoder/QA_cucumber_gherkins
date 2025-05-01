const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const users = new Map();
let welcomeEmails = [];

Given('I am a new user', function () {
  users.clear();
  welcomeEmails = [];
  this.registeredEmail = null;
});

When("I enter valid email and password and click on 'Register'", function () {
  const email = 'test@example.com';
  const password = 'password123';
  users.set(email, { password });
  this.registeredEmail = email;
  welcomeEmails.push({ to: email, subject: 'Welcome to Online Bookshop!' });
});

Then('my account should be created', function () {
  assert.ok(users.has(this.registeredEmail), 'User was not registered');
});

Then('I should receive a welcome email', function () {
  const emailSent = welcomeEmails.find(e => e.to === this.registeredEmail);
  assert.ok(emailSent, 'No welcome email was sent');
});
