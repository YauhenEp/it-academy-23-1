Feature: Youtube search

  Scenario: As a user, I can search video
    Given I navigate to "https://www.youtube.com/"
    And I accept all cookies
    When I input webdriverio to field input#search
    And I click search button
    Then I expect that element span.style-scope.ytd-playlist-renderer contain text webdriverio
