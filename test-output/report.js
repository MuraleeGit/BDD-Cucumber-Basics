$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp/eclipse-workspace/CucumberBDDBasics/src/main/java/Features/loginExampleskeyword.feature");
formatter.feature({
  "line": 1,
  "name": "LnkedIn Login",
  "description": "",
  "id": "lnkedin-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "LinkedIn Login test scenario",
  "description": "",
  "id": "lnkedin-login;linkedin-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is LinkedIn",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "lnkedin-login;linkedin-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "lnkedin-login;linkedin-login-test-scenario;;1"
    },
    {
      "cells": [
        "murali.p83@gmail.com",
        "Kanathil@123"
      ],
      "line": 13,
      "id": "lnkedin-login;linkedin-login-test-scenario;;2"
    },
    {
      "cells": [
        "sajina.thekkil@gmail.com",
        "Kanathil@123"
      ],
      "line": 14,
      "id": "lnkedin-login;linkedin-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "LinkedIn Login test scenario",
  "description": "",
  "id": "lnkedin-login;linkedin-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is LinkedIn",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"murali.p83@gmail.com\" and \"Kanathil@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8467636265,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_LinkedIn()"
});
formatter.result({
  "duration": 14188870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "murali.p83@gmail.com",
      "offset": 13
    },
    {
      "val": "Kanathil@123",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.user_enters_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 1289365837,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9897895248,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 42636387,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "LinkedIn Login test scenario",
  "description": "",
  "id": "lnkedin-login;linkedin-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is LinkedIn",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"sajina.thekkil@gmail.com\" and \"Kanathil@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11680875092,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_LinkedIn()"
});
formatter.result({
  "duration": 9295988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sajina.thekkil@gmail.com",
      "offset": 13
    },
    {
      "val": "Kanathil@123",
      "offset": 44
    }
  ],
  "location": "LoginStepDefinition.user_enters_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 476601587,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10418435443,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 14096870,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c([1]) LinkedIn\u003e but was:\u003c([3]) LinkedIn\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinition.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:56)\r\n\tat ✽.Then user is on home page(C:/Users/hp/eclipse-workspace/CucumberBDDBasics/src/main/java/Features/loginExampleskeyword.feature:9)\r\n",
  "status": "failed"
});
});