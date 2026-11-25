---
title: "OrderAPI OrderCancel"
description: "Отменить заказ"
---

# OrderAPI OrderCancel

<Badge type="tip" text="POST" /> `/v1/order/cancel`

## Endpoint Overview

- **Category**：📋 Order Management
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/order/cancel`

::: details View Official Description (Russian)
> Отменяет заказ со всеми отправлениями. Используйте идентификатор причины отмены `reasons.id` из метода [/v1/cancel-reason/list-by-order](#operation/CancelReasonListByOrder).
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
  "$ref": "#/components/schemas/v1OrderCancelRequest"
}
```
:::

## Responses

### HTTP 200 - Заказ отменён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1OrderCancelResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/order/cancel" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/order/cancel"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/order/cancel", {
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
