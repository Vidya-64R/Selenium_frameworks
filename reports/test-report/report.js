$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login_myntra.feature");
formatter.feature({
  "name": "login_myntra",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "clicks on Profile icon",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cemail id\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "verify home page is displayed \"\u003cexpected_result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email id",
        "password",
        "expected_result"
      ]
    },
    {
      "cells": [
        "vidyarajanna1@gmail.com",
        "Diored1241*",
        "Login"
      ]
    },
    {
      "cells": [
        "jsagd@gmail.com",
        "ABCD",
        "Login"
      ]
    },
    {
      "cells": [
        "jsahdah@gmail.com",
        "DJDJD12",
        "Login"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Profile icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_Profile_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"vidyarajanna1@gmail.com\" and \"Diored1241*\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify home page is displayed \"Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Steps1.verify_home_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Profile icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_Profile_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"jsagd@gmail.com\" and \"ABCD\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify home page is displayed \"Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Steps1.verify_home_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Profile icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_Profile_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"jsahdah@gmail.com\" and \"DJDJD12\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify home page is displayed \"Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Steps1.verify_home_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify home page is dispalyed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Profile icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_Profile_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid Email id \"vidyarajanna1@gmail.com\" and valid Password \"Diored1241*\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_enters_valid_Email_id_and_valid_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps1.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Steps1.home_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user searches for a product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ft"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for product",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Steps1.user_search_for_product(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Steps1.product_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});