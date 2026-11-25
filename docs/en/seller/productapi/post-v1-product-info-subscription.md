---
title: "ProductAPI GetProductInfoSubscription"
description: "Количество подписавшихся на товар пользователей"
---

# ProductAPI GetProductInfoSubscription

<Badge type="tip" text="POST" /> `/v1/product/info/subscription`

## Endpoint Overview

- **Category**：📦 Products & Uploads
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/info/subscription`

::: details View Official Description (Russian)
> Метод для получения количества пользователей, которые нажали **Узнать о поступлении** на странице товара.
> 
> Вы можете передать несколько товаров в запросе.
> 
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
  "skus": [
    "889283932",
    "123456789",
    "987654321"
  ]
}
```

## Responses

### HTTP 200 - Количество подписавшихся пользователей

```json
{
  "result": [
    {
      "count": 3,
      "sku": 889283932
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/subscription" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/subscription"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/subscription", {
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
