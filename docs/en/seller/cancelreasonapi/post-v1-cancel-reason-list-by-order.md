---
title: "CancelReasonListByOrder"
description: "Причины отмены заказа"
---

# CancelReasonListByOrder

<Badge type="tip" text="POST" /> `/v1/cancel-reason/list-by-order`

## Endpoint Overview

- **Category**：❌ Cancellation Reasons
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/cancel-reason/list-by-order`

::: details View Official Description (Russian)
> Возвращает возможные причины отмены для заказа.
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
  "$ref": "#/components/schemas/v1CancelReasonListByOrderRequest"
}
```
:::

## Responses

### HTTP 200 - Причины отмены заказа

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CancelReasonListByOrderResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/cancel-reason/list-by-order" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cancel-reason/list-by-order"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cancel-reason/list-by-order", {
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
