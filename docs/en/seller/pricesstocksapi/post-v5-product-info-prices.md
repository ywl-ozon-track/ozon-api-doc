---
title: "ProductAPI GetProductInfoPrices"
description: "Получить информацию о цене товара"
---

# ProductAPI GetProductInfoPrices

<Badge type="tip" text="POST" /> `/v5/product/info/prices`

## Endpoint Overview

- **Category**：💰 Prices & Stocks
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v5/product/info/prices`

::: details View Official Description (Russian)
> <aside class="warning">
> 23 ноября 2026 года отключим параметр <code>total</code> в ответе метода. Переключитесь на <code>total_items</code>.
> 
> Вы можете посмотреть историю обновления цен только в личном кабинете продавца.<br> <a href="https://seller-edu.ozon.ru/libra/ceny-i-akcii/rabota-s-cenami/price-control#как-посмотреть-историю-обновления-цен">Подробнее об истории обновления цен в Базе знаний продавца</a>
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
  "cursor": "",
  "filter": {
    "offer_id": [
      "356792"
    ],
    "product_id": [
      "243686911"
    ],
    "visibility": "ALL"
  },
  "limit": 100
}
```

## Responses

### HTTP 200 - Информация о цене товара

```json
{
  "items": [
    {
      "product_id": 1000123456,
      "offer_id": "test-offer-123456",
      "price": {
        "price": 2999.99,
        "old_price": 3499.99,
        "min_price": 2799.99,
        "net_price": 2000,
        "declared_price": {
          "amount": "1000",
          "currency": "RUB"
        },
        "currency_code": "RUB",
        "vat": 0.2,
        "auto_action_enabled": true,
        "auto_add_to_ozon_actions_list_enabled": true
      },
      "commissions": {
        "sales_percent_fbo": 15,
        "sales_percent_fbs": 12,
        "fbo_deliv_to_customer_amount": 14.75,
        "fbs_deliv_to_customer_amount": 60,
        "fbo_return_flow_amount": 50,
        "fbs_return_flow_amount": 40
      },
      "price_indexes": {
        "color_index": "GREEN",
        "ozon_index_data": {
          "min_price": 2899.99,
          "min_price_currency": "RUB",
          "price_index_value": 0.95
        },
        "external_index_data": {
          "min_price": 2799.99,
          "min_price_currency": "RUB",
          "price_index_value": 0.93
        }
      },
      "marketing_actions": {
        "ozon_actions_exist": true,
        "current_period_from": "2026-03-01T00:00:00Z",
        "current_period_to": "2026-03-31T23:59:59Z",
        "actions": [
          {
            "title": "Скидка 15% на электронику",
            "value": 15,
            "date_from": "2026-03-01T00:00:00Z",
            "date_to": "2026-03-31T23:59:59Z"
          }
        ]
      },
      "acquiring": 1.5,
      "volume_weight": 0.5
    },
    {
      "product_id": 1000123457,
      "offer_id": "test-offer-123457",
      "price": {
        "price": 5999.99,
        "old_price": 6999.99,
        "min_price": 5499.99,
        "net_price": 4000,
        "currency_code": "RUB",
        "vat": 0.2,
        "auto_action_enabled": false,
        "auto_add_to_ozon_actions_list_enabled": false
      },
      "commissions": {
        "sales_percent_fbo": 10,
        "sales_percent_fbs": 8,
        "fbo_deliv_to_customer_amount": 25.5,
        "fbs_deliv_to_customer_amount": 75,
        "fbo_return_flow_amount": 60,
        "fbs_return_flow_amount": 50
      },
      "price_indexes": {
        "color_index": "YELLOW",
        "ozon_index_data": {
          "min_price": 5899.99,
          "min_price_currency": "RUB",
          "price_index_value": 0.98
        }
      },
      "marketing_actions": {
        "ozon_actions_exist": false
      },
      "acquiring": 1.8,
      "volume_weight": 0.8
    }
  ],
  "cursor": "",
  "total": 2,
  "total_items": 2
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
curl -X POST "https://api-seller.ozon.ru/v5/product/info/prices" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v5/product/info/prices"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v5/product/info/prices", {
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
