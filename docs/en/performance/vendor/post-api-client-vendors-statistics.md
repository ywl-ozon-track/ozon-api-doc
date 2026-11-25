---
title: "VendorStatisticsSubmitRequest"
description: "Отчёт с аналитикой внешнего трафика"
---

# VendorStatisticsSubmitRequest

<Badge type="tip" text="POST" /> `/api/client/vendors/statistics`

## Endpoint Overview

- **Category**：🌐 External Traffic Analytics
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/vendors/statistics`

::: details View Official Description (Russian)
> 
> Метод для запуска формирования отчёта с аналитикой внешнего трафика.
> 
> Разница между `dateFrom` и `dateTo` должна быть не больше трёх месяцев. Если разница больше, 
> отчёт сформируется за 3 месяца с даты, указанной в `dateFrom`.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Успешно

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/vendors/statistics" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
