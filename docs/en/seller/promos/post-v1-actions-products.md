---
title: "PromosProducts"
description: "Список участвующих в акции товаров"
---

# PromosProducts

<Badge type="tip" text="POST" /> `/v1/actions/products`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/actions/products`

::: details View Official Description (Russian)
> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsProducts">/v2/actions/products</a>.
> </aside>
> 
> Метод для получения списка товаров, участвующих в акции, по её идентификатору.
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
  "action_id": 66011,
  "limit": 10,
  "last_id": "bnVсbA=="
}
```

## Responses

### HTTP 200 - Список товаров

```json
{
  "result": {
    "products": [
      {
        "id": 28745,
        "price": 99,
        "action_price": 50,
        "alert_max_action_price_failed": true,
        "alert_max_action_price": 31,
        "max_action_price": 32,
        "add_mode": "MANUAL",
        "stock": 20,
        "min_stock": 3,
        "current_boost": 1,
        "price_min_elastic": 2,
        "price_max_elastic": 5,
        "min_boost": 10,
        "max_boost": 15
      }
    ],
    "total": 263,
    "last_id": "bnVсbA=="
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/products" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/products"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/products", {
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
