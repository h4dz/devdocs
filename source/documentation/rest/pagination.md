---
title: Types
layout: main
permalink: /documentation/rest/pagination/
redirect_from:
  - /documentation/rest/pagination.html
---
# Pagination
Most APIs that list resources are paginated. Pagination is consistent
across all APIs that require it. You can use the `offset` and `limit`
parameters to page through query results.

### Parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| offset | [Integer](/documentation/rest/types#int) | No | The offset of the first record returned. Default is 0. |
| limit | [Integer](/documentation/rest/types#int) | No | The number of records returned. Default (and max limit) is 100 for most APIs. |

The API response will include the `total` number of records that match this query as well as the `limit` and `offset` actually used.

### Response Fields

| Name | Type | Description |
| ---- | ---- | ----------- |
| offset | [Integer](/documentation/rest/types#int) | The offset used in the execution of the query. |
| limit | [Integer](/documentation/rest/types#int) | The limit used in the execution of the query. |
| total | [Integer](/documentation/rest/types#int) | The total number of records available. |
