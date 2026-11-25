---
title: "Получить список отправлений"
description: "Получить список отправлений"
---

# Получить список отправлений

<Badge type="tip" text="POST" /> `/v3/posting/fbo/list`

## Обзор метода

- **Категория**：📌 FBO
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v3/posting/fbo/list`
- **Описание**：

> Возвращает список отправлений за указанный период времени.
> Если период больше года, вернётся ошибка `PERIOD_IS_TOO_LONG`.
> 
> Дополнительно можно отфильтровать отправления по их статусу.
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
  "cursor": "",
  "filter": {
    "posting_numbers": [
      "9121072335-0187-1"
    ],
    "since": "2026-05-10T11:51:30.106Z",
    "statuses": [
      "awaiting_packaging",
      "awaiting_deliver",
      "delivering",
      "delivered",
      "cancelled"
    ],
    "to": "2026-05-15T11:51:30.106Z"
  },
  "limit": 100,
  "sort_dir": "ASC",
  "translit": false,
  "with": {
    "analytics_data": true,
    "financial_data": true,
    "legal_info": true
  }
}
```

## Ответы сервера

### HTTP 200 - Список отправлений

```json
{
  "has_next": false,
  "cursor": "",
  "postings": [
    {
      "posting_number": "9121072335-0187-1",
      "order_id": 39127012767,
      "order_number": "9121072335-0187",
      "status": "delivered",
      "substatus": "posting_received",
      "cancellation": null,
      "products": [
        {
          "is_marketplace_buyout": false,
          "offer_id": "SM-GALAXY-A54-128",
          "name": "Смартфон Samsung Galaxy A54",
          "sku": 9880276314,
          "quantity": 1,
          "price": {
            "amount": "28990",
            "currency": "RUB"
          },
          "digital_codes": []
        }
      ],
      "analytics_data": {
        "city": "",
        "delivery_type": "PVZ",
        "is_premium": false,
        "payment_type_group_name": "Система Быстрых Платежей",
        "warehouse_id": 1020001835658000,
        "warehouse_name": "ОМСК_РФЦ",
        "is_legal": false,
        "client_delivery_date_begin": null,
        "client_delivery_date_end": null
      },
      "financial_data": {
        "products": [
          {
            "payout": 0,
            "product_id": 9880276314,
            "old_price": 28990,
            "price": 28990,
            "total_discount_value": 0,
            "total_discount_percent": 0,
            "actions": [],
            "commission": {
              "amount": 0,
              "percent": 0,
              "currency": "RUB"
            }
          }
        ],
        "cluster_from": "Омск",
        "cluster_to": "Новосибирск"
      },
      "legal_info": null,
      "external_order": {
        "is_external": false,
        "platform_name": ""
      },
      "cancel_reason_id": 0,
      "created_at": "2026-05-10T23:59:51.653736Z",
      "in_process_at": "2026-05-11T00:00:07.716614Z",
      "additional_data": []
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v3/posting/fbo/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/posting/fbo/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/posting/fbo/list", {
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
