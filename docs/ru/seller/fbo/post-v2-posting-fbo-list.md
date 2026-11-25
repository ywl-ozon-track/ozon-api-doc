---
title: "Список отправлений"
description: "Список отправлений"
---

# Список отправлений

<Badge type="tip" text="POST" /> `/v2/posting/fbo/list`

## Обзор метода

- **Категория**：📌 FBO
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/posting/fbo/list`
- **Описание**：

> <aside class="warning">
> С 31 августа 2026 года метод будет отключён. Переключитесь на <a href="#operation/PostingFboList">/v3/posting/fbo/list</a>.
> </aside>
> 
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
  "dir": "ASC",
  "filter": {
    "since": "2021-09-01T00:00:00.000Z",
    "status": "",
    "to": "2021-11-17T10:44:12.828Z"
  },
  "limit": 5,
  "offset": 0,
  "translit": true,
  "with": {
    "analytics_data": true,
    "financial_data": true,
    "legal_info": false
  }
}
```

## Ответы сервера

### HTTP 200 - Список отправлений

```json
{
  "result": [
    {
      "order_id": 354680487,
      "order_number": "16965409-0014",
      "posting_number": "16965409-0014-1",
      "status": "delivered",
      "substatus": "posting_delivered",
      "cancel_reason_id": 7,
      "created_at": "2021-09-01T00:23:45.607000Z",
      "in_process_at": "2021-09-01T00:25:30.120000Z",
      "legal_info": {
        "company_name": "ООО Книжный Мир",
        "inn": "77123456789",
        "kpp": "777777777"
      },
      "products": [
        {
          "sku": 160249683,
          "name": "Так говорил Омар Хайям. Жизнеописание. Афоризмы и рубайят. Классика в словах и картинках",
          "quantity": 1,
          "offer_id": "978-5-906864-56-7",
          "price": "81.00",
          "is_marketplace_buyout": true,
          "digital_codes": [],
          "currency_code": "RUB"
        }
      ],
      "analytics_data": {
        "city": "Ростов-на-Дону",
        "delivery_type": "PVZ",
        "is_premium": false,
        "payment_type_group_name": "Карты оплаты",
        "warehouse_id": 17717042026000,
        "warehouse_name": "РОСТОВ-НА-ДОНУ_РФЦ",
        "is_legal": false,
        "client_delivery_date_begin": "2025-11-24T13:32:40.336Z",
        "client_delivery_date_end": "2025-11-24T18:32:40.336Z"
      },
      "financial_data": {
        "products": [
          {
            "commission_amount": 12.15,
            "commission_percent": 15,
            "payout": 68.85,
            "product_id": 160249683,
            "currency_code": "RUB",
            "old_price": 115,
            "price": 81,
            "total_discount_value": 34,
            "total_discount_percent": 29.57,
            "actions": [
              "Системная виртуальная скидка селлера"
            ],
            "quantity": 1
          }
        ]
      },
      "additional_data": [
        {
          "delivery_track_number": "RX123456789RU",
          "courier_name": "Иванов П.С.",
          "delivery_time": "2025-11-24T15:20:00.000Z"
        }
      ]
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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbo/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbo/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbo/list", {
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
