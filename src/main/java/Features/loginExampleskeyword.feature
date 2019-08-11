Feature: LnkedIn Login

Scenario Outline: LinkedIn Login test scenario

Given user is already on login page
When title of login page is LinkedIn
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page

Examples:
 |username			  		|password	 |
 |murali.p83@gmail.com		|Kanathil@123|
 |sajina.thekkil@gmail.com	|Kanathil@123|