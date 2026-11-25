---
title: "DeliveryCheckout"
description: "Получить доступные варианты доставки"
---

# DeliveryCheckout

<Badge type="tip" text="POST" /> `/v2/delivery/checkout`

## Endpoint Overview

- **Category**：🛣️ Delivery & Logistics
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/delivery/checkout`

::: details View Official Description (Russian)
> Проверяет доступность доставки товаров на указанный адрес или в точку выдачи и отображает сроки доставки.
> 
> Проверяйте наличие товаров и маршруты во время оформления заказа, чтобы точно рассчитать сроки доставки.
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
  "$ref": "#/components/schemas/v1DeliveryCheckoutRequest"
}
```
:::

## Responses

### HTTP 200 - Успешно

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1DeliveryCheckoutResponse"
}
```
:::

### HTTP default - Ошибка

```json
{
  "code": 3,
  "message": "Delivery is not available for this user",
  "details": [
    {
      "@type": "type.googleapis.com/error.ErrorInfo",
      "code": "USER_DELIVERY_UNAVAILABLE",
      "message": "Delivery is not available for this user"
    }
  ]
}
```

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v2/delivery/checkout" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/delivery/checkout"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/delivery/checkout", {
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
