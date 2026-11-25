---
title: "SupplyOrderAPI SupplyOrderStatusCounter"
description: "Количество заявок по статусам"
---

# SupplyOrderAPI SupplyOrderStatusCounter

<Badge type="tip" text="POST" /> `/v1/supply-order/status/counter`

## Endpoint Overview

- **Category**：📌 FBO
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/supply-order/status/counter`

::: details View Official Description (Russian)
> Возвращает количество заявок в конкретном статусе.
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Responses

### HTTP 200 - Статус заявки и количество заявок в этом статусе

```json
{
  "items": [
    {
      "count": 1,
      "order_state": "ORDER_STATE_UNSPECIFIED"
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/status/counter" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/status/counter"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/status/counter", {
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
