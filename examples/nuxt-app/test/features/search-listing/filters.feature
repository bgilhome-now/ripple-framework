Feature: Search listing - Filter

  As a user I can apply filters to my search

  Background:
    Given the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/reference" with status 200
    And the search autocomplete request is stubbed with "/search-listing/suggestions/none" fixture
    And I am using a "macbook-16" device

  @mockserver
  Example: Raw filter - Should reflect the value from the URL
    Given the endpoint "/api/tide/page" with query "?path=/filters&site=8888" returns fixture "/search-listing/filters/page" with status 200
    And the search network request is stubbed with fixture "/search-listing/filters/response" and status 200
    And the current date is "Fri, 02 Feb 2050 03:04:05 GMT"

    When I visit the page "/filters?rawFilter=Birds&rawFilter=Dogs"
    Then the search listing page should have 2 results
    And the search network request should be called with the "/search-listing/filters/request-raw" fixture

    Then the search listing dropdown field labelled "Raw filter example" should have the value "Dogs, Birds"
    When I click the search listing dropdown field labelled "Raw filter example"
    Then the selected dropdown field should have the items:
      | Cats  |
      | Dogs  |
      | Birds |
    # Close the dropdown
    When I click the search listing dropdown field labelled "Raw filter example"
    And the search listing results should have following items:
      | title   |
      | Apples  |
      | Oranges |

  @mockserver
  Example: Term filter - Should reflect a single value from the URL
    Given the endpoint "/api/tide/page" with query "?path=/filters&site=8888" returns fixture "/search-listing/filters/page" with status 200
    And the search network request is stubbed with fixture "/search-listing/filters/response" and status 200
    And the current date is "Fri, 02 Feb 2050 03:04:05 GMT"

    When I visit the page "/filters?termFilter=Green"
    Then the search listing page should have 2 results
    And the search network request should be called with the "/search-listing/filters/request-term-single" fixture

    Then the search listing dropdown field labelled "Term filter example" should have the value "Green"
    When I click the search listing dropdown field labelled "Term filter example"
    Then the selected dropdown field should have the items:
      | Red   |
      | Green |
      | Blue  |
    # Close the dropdown
    When I click the search listing dropdown field labelled "Term filter example"
    And the search listing results should have following items:
      | title   |
      | Apples  |
      | Oranges |

  @mockserver
  Example: Term filter - Should reflect an array from the URL
    Given the endpoint "/api/tide/page" with query "?path=/filters&site=8888" returns fixture "/search-listing/filters/page" with status 200
    And the search network request is stubbed with fixture "/search-listing/filters/response" and status 200
    And the current date is "Fri, 02 Feb 2050 03:04:05 GMT"

    When I visit the page "/filters?termFilter=Green&termFilter=Red"
    Then the search listing page should have 2 results
    And the search network request should be called with the "/search-listing/filters/request-term-array" fixture

    Then the search listing dropdown field labelled "Term filter example" should have the value "Red, Green"
    When I click the search listing dropdown field labelled "Term filter example"
    Then the selected dropdown field should have the items:
      | Red   |
      | Green |
      | Blue  |
    # Close the dropdown
    When I click the search listing dropdown field labelled "Term filter example"
    And the search listing results should have following items:
      | title   |
      | Apples  |
      | Oranges |


  @mockserver
  Example: Terms (with an 's') - Should reflect a single value from the URL
    Given the endpoint "/api/tide/page" with query "?path=/filters&site=8888" returns fixture "/search-listing/filters/page" with status 200
    And the search network request is stubbed with fixture "/search-listing/filters/response" and status 200
    And the current date is "Fri, 02 Feb 2050 03:04:05 GMT"

    When I visit the page "/filters?termsFilter=Purple"
    Then the search listing page should have 2 results
    And the search network request should be called with the "/search-listing/filters/request-terms-single" fixture

    Then the search listing dropdown field labelled "Terms filter example" should have the value "Purple"
    When I click the search listing dropdown field labelled "Terms filter example"
    Then the selected dropdown field should have the items:
      | Orange |
      | Purple |
      | Yellow |
    # Close the dropdown
    When I click the search listing dropdown field labelled "Terms filter example"
    And the search listing results should have following items:
      | title   |
      | Apples  |
      | Oranges |


  @mockserver
  Example: Terms (with an 's') - Should reflect an array from the URL
    Given the endpoint "/api/tide/page" with query "?path=/filters&site=8888" returns fixture "/search-listing/filters/page" with status 200
    And the search network request is stubbed with fixture "/search-listing/filters/response" and status 200
    And the current date is "Fri, 02 Feb 2050 03:04:05 GMT"

    When I visit the page "/filters?termsFilter=Purple&termsFilter=Orange"
    Then the search listing page should have 2 results
    And the search network request should be called with the "/search-listing/filters/request-terms-array" fixture

    Then the search listing dropdown field labelled "Terms filter example" should have the value "Orange, Purple"
    When I click the search listing dropdown field labelled "Terms filter example"
    Then the selected dropdown field should have the items:
      | Orange |
      | Purple |
      | Yellow |
    # Close the dropdown
    When I click the search listing dropdown field labelled "Terms filter example"
    And the search listing results should have following items:
      | title   |
      | Apples  |
      | Oranges |

  @mockserver
  Example: Should update the URL when the filters are applied
    Given the endpoint "/api/tide/page" with query "?path=/filters&site=8888" returns fixture "/search-listing/filters/page" with status 200
    And the search network request is stubbed with fixture "/search-listing/filters/response" and status 200
    And the current date is "Fri, 02 Feb 2050 03:04:05 GMT"

    When I visit the page "/filters?termsFilter=Purple&termsFilter=Orange"
    Then the search listing page should have 2 results
    And the search network request should be called with the "/search-listing/filters/request-terms-array" fixture

    Then the search listing dropdown field labelled "Terms filter example" should have the value "Orange, Purple"
    When I click the search listing dropdown field labelled "Terms filter example"
    Then the selected dropdown field should have the items:
      | Orange |
      | Purple |
      | Yellow |
    # Close the dropdown
    When I click the search listing dropdown field labelled "Terms filter example"
    And the search listing results should have following items:
      | title   |
      | Apples  |
      | Oranges |

