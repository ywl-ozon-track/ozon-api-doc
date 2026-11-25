---
title: "ActionsAutoAddProductsListV2"
description: "Получить список товаров из автодобавления в акцию"
---

# ActionsAutoAddProductsListV2

<Badge type="tip" text="POST" /> `/v2/actions/auto-add/products/list`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/actions/auto-add/products/list`

::: details View Official Description (Russian)
> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/ActionsAutoAddProductsList">/v1/actions/auto-add/products/list</a>.
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
  "action_id": 0,
  "auto_add_date": "2025-01-01T00:00:00Z",
  "offset": 0,
  "limit": 0
}
```

## Responses

### HTTP 200 - Список товаров с автодобавлением

```json
{
  "products": [
    {
      "action_price_to_auto_add": {
        "amount": "1800",
        "currency": "RUB"
      },
      "add_mode": true,
      "base_price": {
        "amount": "1827",
        "currency": "RUB"
      },
      "currency": "RUB",
      "has_expired_min_seller_price": true,
      "marketplace_seller_price": {
        "amount": "70",
        "currency": "RUB"
      },
      "max_discount_price": {
        "amount": "62",
        "currency": "RUB"
      },
      "min_action_quantity": 1,
      "min_seller_price": {
        "amount": "1",
        "currency": "RUB"
      },
      "name": "Ароматизатор / Масло для бани / Эфирное масло \"Пихта\", 250 мл",
      "offer_id": "SR0000",
      "price": {
        "amount": "1827",
        "currency": "RUB"
      },
      "product_id": 8888888,
      "quantity_to_auto_add": 2,
      "sku": 8888888,
      "website_prices": {
        "price": {
          "amount": "54",
          "currency": "RUB"
        },
        "prices_by_schema": {
          "additionalProp1": {
            "black_price": {
              "amount": "111",
              "currency": "RUB"
            },
            "green_price": {
              "amount": "222",
              "currency": "RUB"
            }
          },
          "additionalProp2": {
            "black_price": {
              "amount": "333",
              "currency": "RUB"
            },
            "green_price": {
              "amount": "444",
              "currency": "RUB"
            }
          },
          "additionalProp3": {
            "black_price": {
              "amount": "555",
              "currency": "RUB"
            },
            "green_price": {
              "amount": "666",
              "currency": "RUB"
            }
          }
        }
      },
      "will_be_quarantined": false
    }
  ],
  "total": 219176
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
curl -X POST "https://api-seller.ozon.ru/v2/actions/auto-add/products/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/actions/auto-add/products/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/actions/auto-add/products/list", {
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
