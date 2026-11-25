---
title: "SupplyOrderAPI GetSupplyOrderTimeslots"
description: "Интервалы поставки"
---

# SupplyOrderAPI GetSupplyOrderTimeslots

<Badge type="tip" text="POST" /> `/v1/supply-order/timeslot/get`

## Endpoint Overview

- **Category**：📌 FBO
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/supply-order/timeslot/get`

::: details View Official Description (Russian)
> <aside class="warning"> Метод устаревает и будет отключён 19 августа 2026 года. Переключитесь на <a href="#operation/SupplyOrderTimeslotList">/v2/supply-order/timeslot/list</a>. </aside>
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "supply_order_id": 84882285
}
```

## Responses

### HTTP 200 - Список интервалов поставки

```json
{
  "timeslots": [
    {
      "from": "2019-08-24T14:15:22Z",
      "to": "2019-08-24T14:15:22Z"
    }
  ],
  "timezone": [
    {
      "iana_name": "MSK",
      "offset": "+3"
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/timeslot/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/timeslot/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/timeslot/get", {
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
