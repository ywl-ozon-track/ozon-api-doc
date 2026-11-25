---
title: "ListReportsExternal"
description: "Список отчётов, сгенерированных через API"
---

# ListReportsExternal

<Badge type="info" text="GET" /> `/api/client/statistics/externallist`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics/externallist`

::: details View Official Description (Russian)
> 
> Метод для получения списка отчётов, которые сгенерированы через API сервисными аккаунтами.
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `page` | `query` | No | - |
| `pageSize` | `query` | No | - |

## Responses

### HTTP 200 - Список отчётов

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatStatisticsReportsList"
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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/externallist" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/externallist"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/externallist", {
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
