---
title: "CancellationAPI GetConditionalCancellationListV2"
description: "Получить список заявок на отмену rFBS"
---

# CancellationAPI GetConditionalCancellationListV2

<Badge type="tip" text="POST" /> `/v2/conditional-cancellation/list`

## Endpoint Overview

- **Category**：📌 CancellationAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/conditional-cancellation/list`

::: details View Official Description (Russian)
> Метод для получения списка заявок на отмену rFBS-заказов.
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "filters": {
    "cancellation_initiator": [
      "CLIENT"
    ],
    "posting_number": [
      "34009011-0094-1"
    ],
    "state": "ALL"
  },
  "limit": 500,
  "last_id": 0,
  "with": {
    "counter": true
  }
}
```

## Responses

### HTTP 200 - Список заявок на отмену

```json
{
  "result": [
    {
      "approve_comment": "string",
      "approve_date": "2024-11-27T12:31:43.621Z",
      "auto_approve_date": "2024-11-27T12:31:43.621Z",
      "cancellation_id": 0,
      "cancellation_initiator": "OZON",
      "cancellation_reason": {
        "id": 0,
        "name": "string"
      },
      "cancellation_reason_message": "string",
      "cancelled_at": "2024-11-27T12:31:43.621Z",
      "order_date": "2024-11-27T12:31:43.621Z",
      "posting_number": "string",
      "state": {
        "id": 0,
        "name": "string",
        "state": "ALL"
      },
      "tpl_integration_type": "string"
    }
  ],
  "counter": "1",
  "last_id": 283784254
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v2/conditional-cancellation/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/conditional-cancellation/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/conditional-cancellation/list", {
  method: "POST",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
