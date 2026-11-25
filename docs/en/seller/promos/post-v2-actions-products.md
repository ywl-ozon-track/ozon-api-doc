---
title: "ActionsProducts"
description: "Получить список товаров, которые участвуют в акции"
---

# ActionsProducts

<Badge type="tip" text="POST" /> `/v2/actions/products`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/actions/products`

::: details View Official Description (Russian)
> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/PromosProducts">/v1/actions/products</a>.
> </aside>
> 
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
  "action_id": 213139,
  "last_id": "3262247282",
  "limit": 100
}
```

## Responses

### HTTP 200 - Список товаров, которые участвуют в акции

```json
{
  "products": [
    {
      "id": 99999,
      "price": {
        "amount": "4000",
        "currency": "RUB"
      },
      "action_price": {
        "amount": "4000",
        "currency": "RUB"
      },
      "max_action_price": {
        "amount": "3560",
        "currency": "RUB"
      },
      "add_mode": "SELLER",
      "stock": 2,
      "min_stock": 1,
      "recommended_stock": 10,
      "marketplace_seller_price": {
        "amount": "500",
        "currency": "RUB"
      },
      "alert_max_action_price_failed": false,
      "alert_max_action_price": {
        "amount": "4000",
        "currency": "RUB"
      },
      "current_boost": 12,
      "price_min_elastic": {
        "amount": "3560",
        "currency": "RUB"
      },
      "price_max_elastic": {
        "amount": "3560",
        "currency": "RUB"
      },
      "min_boost": 1,
      "max_boost": 12,
      "website_prices": {
        "price": {
          "amount": "382",
          "currency": "RUB"
        },
        "prices_by_schema": {}
      },
      "min_seller_price": {
        "amount": "4000",
        "currency": "RUB"
      },
      "is_quarantined": true
    }
  ],
  "total": 44,
  "last_id": "28743"
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v2/actions/products" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/actions/products"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/actions/products", {
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
