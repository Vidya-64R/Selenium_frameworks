Feature: login_nike

@regression
Scenario: login with credentials

Given user is on Login page
And user clicks on join/login link
When user enters "email id" and "password"
And clicks on login button
Then verify home page is displayed

#Examples:
|email id               |password   |expected_result|
|vidyarjrv@gmail.com    |Diored1241 |Nike. Just Do It. Nike IN|
|jsagd@gmail.com        |ABCD       |Nike. Just Do It. Nike IN|
|jsahdah@gmail.com      |DJDJD12    |Nike. Just Do It. Nike IN|