$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "I want to use this template for my feature file",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Successful Login",
  "description": "",
  "id": "login;successful-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enters Valid credentials",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User navigates to landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Login.userIsOnHomePage()"
});
formatter.result({
  "duration": 125011591,
  "status": "passed"
});
formatter.match({
  "location": "Login.userNavigatesToLoginPage()"
});
formatter.result({
  "duration": 63716,
  "status": "passed"
});
formatter.match({
  "location": "Login.entersValidCredentials()"
});
formatter.result({
  "duration": 54613,
  "status": "passed"
});
formatter.match({
  "location": "Login.userNavigatesToLandingPage()"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "location": "Login.welcomeMessageDisplayed()"
});
formatter.result({
  "duration": 75094,
  "status": "passed"
});
});