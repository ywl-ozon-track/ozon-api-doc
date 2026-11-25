---
title: "DeliveryAPI DeliveryPointList"
description: "Получить список точек самовывоза"
---

# DeliveryAPI DeliveryPointList

<Badge type="tip" text="POST" /> `/v1/delivery/point/list`

## Endpoint Overview

- **Category**：🛣️ Delivery & Logistics
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/delivery/point/list`

::: details View Official Description (Russian)
> Возвращает координаты всех точек самовывоза без объединения в кластеры.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1DeliveryPointListRequest"
}
```
:::

## Responses

### HTTP 200 - Список точек самовывоза

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1DeliveryPointListResponse"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/delivery/point/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery/point/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery/point/list", {
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
