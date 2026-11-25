---
title: "OrderAPI OrderCreate"
description: "Создать заказ"
---

# OrderAPI OrderCreate

<Badge type="tip" text="POST" /> `/v2/order/create`

## Endpoint Overview

- **Category**：📋 Order Management
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/order/create`

::: details View Official Description (Russian)
> Создаёт заказ для покупателя и получателя в системе Ozon. Передайте вариант доставки из ответа метода [/v2/delivery/checkout](#operation/DeliveryCheckout).
> 
> В ответе могут быть не все отправления. Получите список всех отправлений по номеру заказа `order_number` методом:
> - [/v2/posting/fbo/list](#operation/PostingAPI_GetFboPostingList) — для схемы FBO;
> - [/v3/posting/fbs/list](#operation/PostingAPI_GetFbsPostingListV3) — для схемы FBS.
> 
> Значение параметра `delivery_schema` должно совпадать с тем, что вы передали в [/v2/delivery/checkout](#operation/DeliveryCheckout).
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
  "$ref": "#/components/schemas/v1OrderCreateRequest"
}
```
:::

## Responses

### HTTP 200 - Заказ создан

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1OrderCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v2/order/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/order/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/order/create", {
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
