---
title: "VendorStatisticsCheck"
description: "Информация об отчёте по UUID"
---

# VendorStatisticsCheck

<Badge type="info" text="GET" /> `/api/client/vendors/statistics/{UUID}`

## Endpoint Overview

- **Category**：🌐 External Traffic Analytics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `UUID` | `path` | Yes | - |
| `vendor` | `query` | Yes | - |

## Responses

### HTTP 200 - Информация об отчёте

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatVendorStatisticsResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}", {
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
