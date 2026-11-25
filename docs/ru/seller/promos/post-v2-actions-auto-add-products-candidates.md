---
title: "Получить список доступных товаров для автодобавления в акцию"
description: "Получить список доступных товаров для автодобавления в акцию"
---

# Получить список доступных товаров для автодобавления в акцию

<Badge type="tip" text="POST" /> `/v2/actions/auto-add/products/candidates`

## Обзор метода

- **Категория**：🎁 Акции Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/actions/auto-add/products/candidates`
- **Описание**：

> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/ActionsAutoAddProductsCandidates">/v1/actions/auto-add/products/candidates</a>.
> </aside>
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "action_id": 250204,
  "auto_add_date": "2025-01-01T00:00:00Z",
  "offset": 5,
  "limit": 100
}
```

## Ответы сервера

### HTTP 200 - Список доступных товаров для автодобавления в акцию

```json
{
  "products": [
    {
      "action_price_to_auto_add": {
        "amount": "1800",
        "currency": "RUB"
      },
      "base_price": {
        "amount": "1827",
        "currency": "RUB"
      },
      "currency": "RUB",
      "has_expired_min_seller_price": true,
      "id": 8888888,
      "is_manually_added": true,
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
      "offer_id": "PS0000",
      "price": {
        "amount": "1827",
        "currency": "RUB"
      },
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
              "amount": "1400",
              "currency": "RUB"
            },
            "green_price": {
              "amount": "18888",
              "currency": "RUB"
            }
          },
          "additionalProp2": {
            "black_price": {
              "amount": "1500",
              "currency": "RUB"
            },
            "green_price": {
              "amount": "1600",
              "currency": "RUB"
            }
          },
          "additionalProp3": {
            "black_price": {
              "amount": "1700",
              "currency": "RUB"
            },
            "green_price": {
              "amount": "1800",
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

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v2/actions/auto-add/products/candidates" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/actions/auto-add/products/candidates"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/actions/auto-add/products/candidates", {
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
