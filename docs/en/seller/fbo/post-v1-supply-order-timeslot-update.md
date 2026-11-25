---
title: "SupplyOrderAPI UpdateSupplyOrderTimeslot"
description: "Обновить интервал поставки"
---

# SupplyOrderAPI UpdateSupplyOrderTimeslot

<Badge type="tip" text="POST" /> `/v1/supply-order/timeslot/update`

## Endpoint Overview

- **Category**：📌 FBO
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/supply-order/timeslot/update`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "supply_order_id": 84882285,
  "timeslot": {
    "from": "2019-08-24T14:15:22Z",
    "to": "2019-08-24T14:15:22Z"
  }
}
```

## Responses

### HTTP 200 - Интервал обновлён

```json
{
  "errors": [
    "UPDATE_TIMESLOT_ERROR_UNSPECIFIED"
  ],
  "operation_id": "89ta-98sk123451"
}
```

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/timeslot/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/timeslot/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/timeslot/update", {
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
