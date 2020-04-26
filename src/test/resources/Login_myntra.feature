Feature: login_myntra

@regression
Scenario Outline: login with credentials

Given user is on Login page
And clicks on Profile icon
When user clicks on login button
And user enters "<email id>" and "<password>"
And clicks on login button
Then verify home page is displayed "<expected_result>"

Examples:
|email id               |password   |expected_result|
|vidyarajanna1@gmail.com|Diored1241*|Login|
|jsagd@gmail.com        |ABCD       |Login|
|jsahdah@gmail.com      |DJDJD12    |Login|

@smoke
Scenario: verify home page is dispalyed

Given user is on Login page
And clicks on Profile icon
When user clicks on login button
And user enters valid Email id "vidyarajanna1@gmail.com" and valid Password "Diored1241*"
And clicks on login button
Then home page should be displayed 


@ft
Scenario: user searches for a product

Given user is on home page
When user search for product
|product|quantity|
|shoes  |2       |
|watches|3       |
|bags   |4       |
Then product page should be displayed