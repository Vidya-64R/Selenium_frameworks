Feature: Login functionality

Scenario: Successfull login with valid credentials

Given user is on Login page
And user clicks on Login button1
When user enters valid Username "9739876597" and password "HELLO123"
And clicks on Login button2
Then message displayed login successfully

Scenario: User enters invalid credentials to Login

Given user is on Login page
And user clicks on Login button1 
When user enters invalid Username "1234567891" and password "hello"
And clicks on Login button2
Then error message should be dispalyed
