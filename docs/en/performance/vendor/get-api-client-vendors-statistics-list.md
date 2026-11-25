---
title: "VendorStatisticsListReports"
description: "Список запрошенных отчётов с аналитикой внешнего трафика"
---

# VendorStatisticsListReports

<Badge type="info" text="GET" /> `/api/client/vendors/statistics/list`

## Endpoint Overview

- **Category**：🌐 External Traffic Analytics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/vendors/statistics/list`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `page` | `query` | No | - |
| `pageSize` | `query` | No | - |

## Responses

### HTTP 200 - Отчёты

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatVendorStatisticsReportsList"
}
```
:::

### HTTP default - Ошибка запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X GET "https://api-performance.ozon.ru/api/client/vendors/statistics/list" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics/list"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics/list", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
