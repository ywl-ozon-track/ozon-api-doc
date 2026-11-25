---
title: "StatisticsCheck"
description: "Cтатус отчёта"
---

# StatisticsCheck

<Badge type="info" text="GET" /> `/api/client/statistics/{UUID}`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics/{UUID}`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `UUID` | `path` | Yes | Уникальный идентификатор запроса. |

## Responses

### HTTP 200 - Cтатус отчёта

```json
{
  "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1",
  "state": "OK",
  "createdAt": "2020-03-23T19:30:58.264653Z",
  "updatedAt": "2020-03-23T19:30:58.689007Z",
  "request": {
    "attributionDays": "",
    "campaignId": 1,
    "campaigns": [
      12558
    ],
    "dateFrom": "2020-03-01",
    "dateTo": "2020-03-20",
    "from": "2020-03-01T00:00:00Z",
    "groupBy": "DATE",
    "objects": [],
    "to": "2020-03-20T00:00:00Z"
  },
  "link": "string",
  "kind": "STATS"
}
```

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/{UUID}" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/{UUID}"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/{UUID}", {
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
