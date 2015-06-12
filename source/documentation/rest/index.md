---
title: REST API Documentation
layout: main
permalink: /documentation/rest/
redirect_from:
  - /documentation/rest/rest.html
  - /documentation/rest/index.html
---
# REST API Documentation

This document describes the PagerDuty REST API, which allows users to
achieve most tasks that can be done from the web UI programmatically.
The API accepts JSON and form encoded content as input. The output is
always in JSON (or empty, in the case of DELETE requests).
Check out the pages below for general information about all of our
REST APIs. To get right to it and dig into specific APIs, use the
navigation on the left side of this site.

### General Information

| Page          | Description   |
| ------------- | ------------- |
| [Authentication](/documentation/rest/authentication/) | How to access the PagerDuty API. |
| [Errors](/documentation/rest/errors/) | How errors are handled. |
| [Types](/documentation/rest/types/) | How to format various data types. |
| [Pagination](/documentation/rest/pagination/) | How data sets are paginated. |

### API Rate Limiting

Each account is limited to the number of API requests it can make
every minute. API requests that exceed the API rate limit will return
an HTTP status code of `403`.
